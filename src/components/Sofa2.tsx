import { LottieTemplate } from "../LottieTemplate";
import { createContentReplacements, TEXT_KEYS } from "../utils/textReplacements";

export const Sofa2 = () => {
  // Text content directly in component - easier to maintain and modify
  const content = createContentReplacements({
    componentName: "sofa2",
    textReplacements: {
      [TEXT_KEYS.CARUSO]: "Cabalynn Oatmeal\r",
      [TEXT_KEYS.BONE]: "\rLight Brown\r",
      [TEXT_KEYS.PRODUCT_SUBTITLE]: "Ashley Furniture",
      [TEXT_KEYS.PERCENTAGE]: "Hardwood solids",
      [TEXT_KEYS.TOP_GRAIN]: " ",
      [TEXT_KEYS.ITALIAN]: " ",
      [TEXT_KEYS.LEATHER]: " ",
      [TEXT_KEYS.NEUTRAL]: "Architectural modern",
      [TEXT_KEYS.TONE]: " ",
      [TEXT_KEYS.BONE_COLOR]: " ",
      [TEXT_KEYS.FEATURE_1]: "Long-lasting durable construction",
      [TEXT_KEYS.FEATURE_2]: "Cushioned seat for sublime comfort",
      [TEXT_KEYS.FEATURE_3]: "Generous seat dimensions add comfort",
      [TEXT_KEYS.CTA_TEXT]: "Order yours online now ",
      [TEXT_KEYS.WEBSITE]: "www.woodstockoutlet.com",
      [TEXT_KEYS.FINAL_CTA]: "Refined neutral polyester upholstery",
      [TEXT_KEYS.ELEVATE]: "Elevate",
      [TEXT_KEYS.YOUR]: " your",       // Trailing space removed (moved to next element)
      [TEXT_KEYS.LIVING]: " space.",      // Trailing space removed (moved to next element)
      [TEXT_KEYS.SPACE]: " "         // Leading space added to compensate
    }
  });

  return <LottieTemplate key="sofa2-template" contentReplacements={content} />;
}; 