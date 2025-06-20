import { LottieTemplate } from "../LottieTemplate";
import { createContentReplacements, TEXT_KEYS } from "../utils/textReplacements";

export const Sofa4 = () => {
  // Text content directly in component - easier to maintain and modify
  const content = createContentReplacements({
    componentName: "sofa4",
    textReplacements: {
      [TEXT_KEYS.CARUSO]: "LUXURY\r",
      [TEXT_KEYS.BONE]: "\rCREAM\r",
      [TEXT_KEYS.PRODUCT_SUBTITLE]: "Executive Leather Lounge Suite",
      [TEXT_KEYS.PERCENTAGE]: "100%",
      [TEXT_KEYS.TOP_GRAIN]: "full-grain",
      [TEXT_KEYS.ITALIAN]: " Italian",
      [TEXT_KEYS.LEATHER]: "leather",
      [TEXT_KEYS.NEUTRAL]: "Classic",
      [TEXT_KEYS.TONE]: "Cream",
      [TEXT_KEYS.BONE_COLOR]: "Leather",
      [TEXT_KEYS.FEATURE_1]: "Hand-stitched with precision detailing",
      [TEXT_KEYS.FEATURE_2]: "Executive-grade comfort and style",
      [TEXT_KEYS.FEATURE_3]: "Timeless design for distinguished spaces",
      [TEXT_KEYS.CTA_TEXT]: "Explore luxury furniture at ",
      [TEXT_KEYS.WEBSITE]: "www.luxurylounge.com",
      [TEXT_KEYS.FINAL_CTA]: "Indulge in luxury today.",
      [TEXT_KEYS.ELEVATE]: "Indulge ",
      [TEXT_KEYS.YOUR]: " in",            // Trailing space removed (moved to next element)
      [TEXT_KEYS.LIVING]: " luxury",      // Trailing space removed (moved to next element)
      [TEXT_KEYS.SPACE]: " today."        // Leading space added to compensate
    }
  });

  return <LottieTemplate key="sofa4-template" contentReplacements={content} />;
}; 