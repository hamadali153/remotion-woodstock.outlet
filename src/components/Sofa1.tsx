import { LottieTemplate } from "../LottieTemplate";
import { createContentReplacements, TEXT_KEYS } from "../utils/textReplacements";

export const RoybeckLightBrown = () => {
  // Text content directly in component - easier to maintain and modify
  const content = createContentReplacements({
    componentName: "sofa1",
    textReplacements: {
      [TEXT_KEYS.PRODUCT_NAME]: "ROYBECK\rLIGHT BROWN\r",
      [TEXT_KEYS.PRODUCT_SUBTITLE]: "Ashley Furniture",
      [TEXT_KEYS.FEATURE_LEATHER]: "Expertly crafted from acacia wood",
      [TEXT_KEYS.FEATURE_TONE]: "Butterfly-patterned Veneer",
      [TEXT_KEYS.FEATURE_SEATS]: "Robust dark bronze-tone wood frame",
      [TEXT_KEYS.FEATURE_SILHOUETTE]: "Fixed shelf provides convenient display",
      [TEXT_KEYS.FEATURE_CONSTRUCTION]: "Set includes coffee table",
      [TEXT_KEYS.CTA_SHOP]: "Shop today, enjoy complimentary shipping at ",
      [TEXT_KEYS.WEBSITE]: "www.woodstockoutlet.com",
      [TEXT_KEYS.CTA_DISCOVER]: "Premium materials guarantee lasting elegance and quality",
      [TEXT_KEYS.TAGLINE]: "Elevate your living space"
    }
  });

  return <LottieTemplate key="sofa1-template" contentReplacements={content} />;
}; 