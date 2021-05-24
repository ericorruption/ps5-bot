import puppeteer, { Page } from "puppeteer";
import { urlToSelectorPS5Map } from "./links";

const SECONDS = 1000;

type Url = string;
type Selector = string;

const urlToSelectorMap: Record<Url, Selector> = urlToSelectorPS5Map;

const loop = async (page: Page) => {
  for (const entry of Object.entries(urlToSelectorMap)) {
    const [url, selector] = entry;

    try {
      await page.goto(url);
      await page.waitForSelector(selector, {
        timeout: 5 * SECONDS, // should we increase / decrease this? default 3000
      });
      const buyButton = await page.$(selector);
      if (buyButton !== null) {
        const disabledValue = await buyButton.getProperty("disabled");
        const isDisabled = await disabledValue?.jsonValue();
        if (!isDisabled) {
          console.log(
            `[${new Date().toLocaleTimeString()}] PS5 available at ${url}.`
          );
        }
      }
    } catch (e) {
      if (e instanceof Error) {
        if (e.name !== "TimeoutError") {
          console.error(e);
        }
      }
    }
  }
};

(async () => {
  const browser = await puppeteer.launch();
  const pages = await browser.pages();

  setInterval(
    () => loop(pages[0]),
    Object.entries(urlToSelectorMap).length * 6 * SECONDS
  );

  loop(pages[0]);
})();
