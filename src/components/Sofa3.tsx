import { LottieTemplate } from "../LottieTemplate";
import { createContentReplacements, TEXT_KEYS } from "../utils/textReplacements";

export const Sofa3 = () => {
  // Text content directly in component - easier to maintain and modify
  const content = createContentReplacements({
    componentName: "sofa3",
    textReplacements: {
      [TEXT_KEYS.PRODUCT_NAME]: "EMELDA CREAM CEREMIC\rTABLE LAMP\r",
      [TEXT_KEYS.PRODUCT_SUBTITLE]: "Ashley Furniture",
      [TEXT_KEYS.FEATURE_LEATHER]: "Glazed ceramic base construction",
      [TEXT_KEYS.FEATURE_TONE]: "Beautifully styled handles",
      [TEXT_KEYS.FEATURE_SEATS]: "Vintage crackle glaze finish",
      [TEXT_KEYS.FEATURE_SILHOUETTE]: "3-way switch lighting for flexible lighting",
      [TEXT_KEYS.FEATURE_CONSTRUCTION]: "Ideal end table proportions",
      [TEXT_KEYS.CTA_SHOP]: "Shop instantly online—fast, reliable shipping",
      [TEXT_KEYS.WEBSITE]: "www.woodstockoutlet.com",
      [TEXT_KEYS.CTA_DISCOVER]: " UL listed for quality",
      [TEXT_KEYS.TAGLINE]: "Illuminate your home"
    }
  });

  return <LottieTemplate key="sofa3-template" contentReplacements={content} />;
}; 