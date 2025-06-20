import { LottieTemplate } from "../LottieTemplate";
import { createContentReplacements, TEXT_KEYS } from "../utils/textReplacements";

export const Sofa1 = () => {
  // Text content directly in component - easier to maintain and modify
  const content = createContentReplacements({
    componentName: "sofa1",
    textReplacements: {
      [TEXT_KEYS.CARUSO]: "ROYBECK\r",
      [TEXT_KEYS.BONE]: "\rLIGHT BROWN\r",
      [TEXT_KEYS.PRODUCT_SUBTITLE]: "Ashley Furniture",
      [TEXT_KEYS.PERCENTAGE]: "Crafted from acacia veneers",
      [TEXT_KEYS.TOP_GRAIN]: " ",
      [TEXT_KEYS.ITALIAN]: " ",
      [TEXT_KEYS.LEATHER]: " ",
      [TEXT_KEYS.NEUTRAL]: "Butterfly-patterned veneer",
      [TEXT_KEYS.TONE]: " ",
      [TEXT_KEYS.BONE_COLOR]: " ",
      [TEXT_KEYS.FEATURE_1]: "Robust dark bronze-tone wood frame",
      [TEXT_KEYS.FEATURE_2]: "Fixed shelf provides convenient display",
      [TEXT_KEYS.FEATURE_3]: "Set includes coffee table",
      [TEXT_KEYS.CTA_TEXT]: "Shop today, enjoy complimentary shipping. ",
      [TEXT_KEYS.WEBSITE]: "www.woodstockoutlet.com",
      [TEXT_KEYS.FINAL_CTA]: "Premium materials guarantee lasting elegance",
      [TEXT_KEYS.ELEVATE]: "Elevate",
      [TEXT_KEYS.YOUR]: " your",          // Trailing space removed (moved to next element)
      [TEXT_KEYS.LIVING]: " living",      // Trailing space removed (moved to next element)
      [TEXT_KEYS.SPACE]: " space."        // Leading space added to compensate
    }
  });

  return <LottieTemplate key="sofa1-template" contentReplacements={content} />;
}; 