import { LottieTemplate } from "../LottieTemplate";
import { createContentReplacements, TEXT_KEYS } from "../utils/textReplacements";

export const Sofa3 = () => {
  // Text content directly in component - easier to maintain and modify
  const content = createContentReplacements({
    componentName: "sofa3",
    textReplacements: {
      [TEXT_KEYS.CARUSO]: "EMELDA CREAM CEREMIC\r",
      [TEXT_KEYS.BONE]: "\rTABLE LAMP\r",
      [TEXT_KEYS.PRODUCT_SUBTITLE]: "Ashley Furniture",
      [TEXT_KEYS.PERCENTAGE]: "Glazed ceramic base",
      [TEXT_KEYS.TOP_GRAIN]: " ",
      [TEXT_KEYS.ITALIAN]: " ",
      [TEXT_KEYS.LEATHER]: " ",
      [TEXT_KEYS.NEUTRAL]: "Vase shape with handles",
      [TEXT_KEYS.TONE]: " ",
      [TEXT_KEYS.BONE_COLOR]: " ",
      [TEXT_KEYS.FEATURE_1]: "Vintage crackle glaze finish",
      [TEXT_KEYS.FEATURE_2]: "3-way switch lighting",
      [TEXT_KEYS.FEATURE_3]: "Ideal end table proportions",
      [TEXT_KEYS.CTA_TEXT]: "Shop instantly online—fast",
      [TEXT_KEYS.WEBSITE]: "www.woodstockoutlet.com",
      [TEXT_KEYS.FINAL_CTA]: "UL listed for safety assurance",
      [TEXT_KEYS.ELEVATE]: "elevate ",
      [TEXT_KEYS.YOUR]: " your",          // Trailing space removed (moved to next element)
      [TEXT_KEYS.LIVING]: " home",        // Trailing space removed (moved to next element)
      [TEXT_KEYS.SPACE]: " now."          // Leading space added to compensate
    }
  });

  return <LottieTemplate key="sofa3-template" contentReplacements={content} />;
}; 