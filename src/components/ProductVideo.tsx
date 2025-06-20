import { LottieTemplate } from "../LottieTemplate";
import { createContentReplacements, TEXT_KEYS } from "../utils/textReplacements";

export const ProductVideo = () => {
  // Text content directly in component - easier to maintain and modify
  const content = createContentReplacements({
    componentName: "product",
    textReplacements: {
      [TEXT_KEYS.CARUSO]: "CLARE\r",
      [TEXT_KEYS.BONE]: "\rBEIGE\r",
      [TEXT_KEYS.PRODUCT_SUBTITLE]: "Sofa with Cushion by Ashley Furniture",
      [TEXT_KEYS.PERCENTAGE]: "Crafted from sturdy wood",
      [TEXT_KEYS.TOP_GRAIN]: " ",
      [TEXT_KEYS.ITALIAN]: " ",
      [TEXT_KEYS.LEATHER]: " ",
      [TEXT_KEYS.NEUTRAL]: " Nuvella",
      [TEXT_KEYS.TONE]: " ",
      [TEXT_KEYS.BONE_COLOR]: " pillows",
      [TEXT_KEYS.FEATURE_1]: "Five-step protective finish stands up to rain and sun",
      [TEXT_KEYS.FEATURE_2]: "Removable cushions for easy maintenance",
      [TEXT_KEYS.FEATURE_3]: "Ample 76.5-inch seat for spacious seating",
      [TEXT_KEYS.CTA_TEXT]: "Shop online now, free shipping guaranteed",
      [TEXT_KEYS.WEBSITE]: "www.woodstockoutlet.com",
      [TEXT_KEYS.FINAL_CTA]: "All-weather foam core delivers lasting comfort",
      [TEXT_KEYS.ELEVATE]: "Enjoy outdoor style",
      [TEXT_KEYS.YOUR]: " ",          // Trailing space removed (moved to next element)
      [TEXT_KEYS.LIVING]: " ",      // Trailing space removed (moved to next element)
      [TEXT_KEYS.SPACE]: " "        // Leading space added to compensate
    }
  });

  return <LottieTemplate key="product-template" contentReplacements={content} />;
}; 