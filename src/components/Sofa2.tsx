import { LottieTemplate } from "../LottieTemplate";
import { createContentReplacements, TEXT_KEYS } from "../utils/textReplacements";

export const Sofa2 = () => {
  // Text content directly in component - easier to maintain and modify
  const content = createContentReplacements({
    componentName: "sofa2",
    textReplacements: {
      [TEXT_KEYS.PRODUCT_BRAND]: "TRAEMORE", // replaces "CLARE"
      [TEXT_KEYS.PRODUCT_COLOR]: "RIVER", // replaces "BEIGE"
      [TEXT_KEYS.PRODUCT_NAME]: "Traemore - River - Accent Chair", 
      [TEXT_KEYS.TAGLINE]: "Transform your space with the ",// replaces multiline product name
      [TEXT_KEYS.PRODUCT_SUBTITLE]: "Ashley Furniture",
      [TEXT_KEYS.FEATURE_MATERIAL]: "Plush foam seat cushions",
      [TEXT_KEYS.FEATURE_FINISH]: "Sturdy corner-blocked frame",
      [TEXT_KEYS.FEATURE_SILHOUETTE]: "Oversized check print blue design",
      [TEXT_KEYS.FEATURE_CONSTRUCTION]: "Ensure versatile placement",
      [TEXT_KEYS.CTA_SHOP]: "Order Your Accent Now",
      [TEXT_KEYS.WEBSITE]: "www.woodstockoutlet.com"
    }
  });

  return <LottieTemplate key="sofa2-template" contentReplacements={content} />;
}; 