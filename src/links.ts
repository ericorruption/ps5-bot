// https://mein-mmo.de/ps5-kaufen-februar-2021-4-welle-start/
// https://www.gameswirtschaft.de/wirtschaft/playstation-5-kaufen-kw-20-2021-ps5turbo/

type Url = string;
type Selector = string;

export const urlToSelectorAvailableMap: Record<Url, Selector> = {
  "https://www.euronics.de/computer-und-buero/buerobedarf/buerogeraete/ps-53-cc-aktenvernichter-schwarz-4061856244839":
    "#buybox--button",
  "https://www.amazon.de/-/en/UniversalHumid-Selection-Languages-Guaranteed-Cardboard/dp/B08FG4MCDZ?ref_=Oct_DLandingS_D_575f483f_63&smid=A3JWKAKR8XB7XF":
    "#add-to-cart-button",
  "https://www.alternate.de/Kaspersky/Internet-Security-Sicherheit-Software/html/product/1563986":
    "#add-to-cart-form .add-to-cart.tp-button",
  "https://www.mueller.de/p/super-smash-bros-ultimate-2414993/":
    ".mu-product-cta__add-to-cart",
  "https://www.medimax.de/p/1332131/galaxy-a52-a525f-128gb":
    ".product-cart-add-to-cart-button",
};

export const urlToSelectorPS5Map: Record<Url, Selector> = {
  "https://www.euronics.de/spiele-und-konsolen-film-und-musik/spiele-und-konsolen/playstation-5/spielekonsole/playstation-5-konsole-4061856837826":
    "#buybox--button",
  "https://www.euronics.de/spiele-und-konsolen-film-und-musik/spiele-und-konsolen/playstation-5/spielekonsole/playstation-5-digital-edition-konsole-4061856837833":
    "#buybox--button",
  "https://www.amazon.de/dp/B091DZ8WZQ?tag=mmo-deals-21": "#add-to-cart-button",
  "https://www.amazon.de/-/en/dp/B08H93ZRK9/ref=sr_1_2?dchild=1&keywords=ps5&qid=1621670003&sr=8-2":
    "#add-to-cart-button",
  "https://www.amazon.de/gp/product/B08H98GVK8?pf_rd_r=G4FZ6BGBWRFXDQ86W0ES&pf_rd_p=4ba7735c-ede3-4212-a657-844b25584948&pd_rd_r=5ebceaa6-bb1c-4e5f-a928-b3d2a5b202d1&pd_rd_w=UPP4J&pd_rd_wg=DkPsN&linkCode=sl1&tag=gameswirtschaft-21&linkId=b709b0463b40afc029ca1a98e90893fe&language=de_DE&ref_=as_li_ss_tl":
    "#add-to-cart-button",
  "https://www.alternate.de/Sony-Interactive-Entertainment/PlayStation-5-Digital-Edition-Spielkonsole/html/product/1651221?zanpid=11731_1621880829_0950efcc8835f69451f03172046f592e&awc=11731_1621880829_0950efcc8835f69451f03172046f592e&partner=dezanoxtextlink&campaign=AF/DeZanox/Textlinks/Alternate":
    "#add-to-cart-form .add-to-cart.tp-button",
  "https://www.alternate.de/Sony-Interactive-Entertainment/PlayStation-5-Spielkonsole/html/product/1651220?zanpid=11731_1621880829_661d943bae907ca88ff720bf1a90d30e&awc=11731_1621880829_661d943bae907ca88ff720bf1a90d30e&partner=dezanoxtextlink&campaign=AF/DeZanox/Textlinks/Alternate":
    "#add-to-cart-form .add-to-cart.tp-button",
  "https://www.mueller.de/p/playstation-5-konsole-2675305/":
    ".mu-product-cta__add-to-cart",
  "https://www.mueller.de/p/playstation-5-konsole-digital-edition-2675308/":
    ".mu-product-cta__add-to-cart",
  "https://www.medimax.de/p/1315337/playstation-5-digital-edition-825gb-ssd":
    ".product-cart-add-to-cart-button",
  "https://www.medimax.de/p/1315336/play-station-5-825gb-ssd":
    ".product-cart-add-to-cart-button",
};
