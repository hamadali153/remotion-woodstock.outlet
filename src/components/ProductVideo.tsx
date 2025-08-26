import { LottieTemplate } from "../LottieTemplate";
import { createContentReplacements, TEXT_KEYS } from "../utils/textReplacements";

export const ProductVideo = () => {
  // Text content directly in component - easier to maintain and modify
  const content = createContentReplacements({
    componentName: "product",
    textReplacements: {
      [TEXT_KEYS.PRODUCT_BRAND]: "CHEVRON", // replaces "CLARE"
      [TEXT_KEYS.PRODUCT_COLOR]: "BLUE", // replaces "BEIGE"
      [TEXT_KEYS.PRODUCT_NAME]: "Chevron Blue Pouf \rAccent Ottoman", // replaces multiline product name
      [TEXT_KEYS.PRODUCT_SUBTITLE]: "Ashley Furniture",
      [TEXT_KEYS.FEATURE_MATERIAL]: "Handmade from genuine denim strips",
      [TEXT_KEYS.FEATURE_FINISH]: "Durable support for seating or ottoman",
      [TEXT_KEYS.FEATURE_SILHOUETTE]: "Dense polystyrene filling stays plush",
      [TEXT_KEYS.FEATURE_CONSTRUCTION]: "Zippered cotton cover for easy spot-cleaning",
      [TEXT_KEYS.CTA_SHOP]: "Shop online today",
      [TEXT_KEYS.WEBSITE]: "www.woodstockoutlet.com",
      [TEXT_KEYS.TAGLINE]: "Experience refined softness with the "
    }
  });

  return <LottieTemplate key="product-template" contentReplacements={content} />;
}; 