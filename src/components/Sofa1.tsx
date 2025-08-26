import { LottieTemplate } from "../LottieTemplate";
import { createContentReplacements, TEXT_KEYS } from "../utils/textReplacements";

export const RoybeckLightBrown = () => {
  // Text content directly in component - easier to maintain and modify
  const content = createContentReplacements({
    componentName: "sofa1",
    textReplacements: {
      [TEXT_KEYS.PRODUCT_BRAND]: "SAHER", // replaces "CLARE"
      [TEXT_KEYS.PRODUCT_COLOR]: "GREEN", // replaces "BEIGE"
      [TEXT_KEYS.PRODUCT_NAME]: "Saher Green \rCeramic Table Lamp", 
      [TEXT_KEYS.TAGLINE]: "Elevate your living space with the ",// replaces multiline product name
      [TEXT_KEYS.PRODUCT_SUBTITLE]: "Ashley Furniture",
      [TEXT_KEYS.FEATURE_MATERIAL]: "Earthy two-tone ceramic base",
      [TEXT_KEYS.FEATURE_FINISH]: "Textured fabric shade for elegance",
      [TEXT_KEYS.FEATURE_SILHOUETTE]: "Easy-care surface with wipe clean finish",
      [TEXT_KEYS.FEATURE_CONSTRUCTION]: "Perfectly sized for any table",
      [TEXT_KEYS.CTA_SHOP]: "Order Yours Today",
      [TEXT_KEYS.WEBSITE]: "www.woodstockoutlet.com"
    }
  });

  return <LottieTemplate key="sofa1-template" contentReplacements={content} />;
}; 