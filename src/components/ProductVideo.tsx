import { LottieTemplate } from "../LottieTemplate";
import { createContentReplacements, TEXT_KEYS } from "../utils/textReplacements";

export const ProductVideo = () => {
  // Text content directly in component - easier to maintain and modify
  const content = createContentReplacements({
    componentName: "product",
    textReplacements: {
      [TEXT_KEYS.PRODUCT_NAME]: "CLARE\rBEIGE\r",
      [TEXT_KEYS.PRODUCT_SUBTITLE]: "Ashley Furniture",
      [TEXT_KEYS.FEATURE_LEATHER]: "Crafted from sturdy eucalyptus wood",
      [TEXT_KEYS.FEATURE_TONE]: "Nuvella pillows offer plush support",
      [TEXT_KEYS.FEATURE_SEATS]: "Five-step protective finish stands up to rain and sun",
      [TEXT_KEYS.FEATURE_SILHOUETTE]: "Removable cushions for easy maintenance",
      [TEXT_KEYS.FEATURE_CONSTRUCTION]: "The ample 76.5-inch seat",
      [TEXT_KEYS.CTA_SHOP]: "Shop online now, free shipping guaranteed at ",
      [TEXT_KEYS.WEBSITE]: "www.woodstockoutlet.com",
      [TEXT_KEYS.CTA_DISCOVER]: "All-weather foam core delivers lasting comfort",
      [TEXT_KEYS.TAGLINE]: "Enjoy outdoor style and comfort"
    }
  });

  return <LottieTemplate key="product-template" contentReplacements={content} />;
}; 