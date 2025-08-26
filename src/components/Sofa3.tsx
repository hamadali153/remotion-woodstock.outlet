import { LottieTemplate } from "../LottieTemplate";
import { createContentReplacements, TEXT_KEYS } from "../utils/textReplacements";

export const Sofa3 = () => {
  // Text content directly in component - easier to maintain and modify
  const content = createContentReplacements({
    componentName: "sofa3",
    textReplacements: {
      [TEXT_KEYS.PRODUCT_BRAND]: "VENALDI", // replaces "CLARE"
      [TEXT_KEYS.PRODUCT_COLOR]: "GUNMETAL", // replaces "BEIGE"
      [TEXT_KEYS.PRODUCT_NAME]: "Venaldi - Gunmetal - Chair", 
      [TEXT_KEYS.TAGLINE]: "Elevate your space with the ",// replaces multiline product name
      [TEXT_KEYS.PRODUCT_SUBTITLE]: "Ashley Furniture",
      [TEXT_KEYS.FEATURE_MATERIAL]: "Luxurious faux leather upholstery",
      [TEXT_KEYS.FEATURE_FINISH]: "Sleek linear track arms design",
      [TEXT_KEYS.FEATURE_SILHOUETTE]: "Durable platform foundation",
      [TEXT_KEYS.FEATURE_CONSTRUCTION]: "Experience sophisticated relaxation",
      [TEXT_KEYS.CTA_SHOP]: "Order Yours Today",
      [TEXT_KEYS.WEBSITE]: "www.woodstockoutlet.com"
    }
  });

  return <LottieTemplate key="sofa3-template" contentReplacements={content} />;
}; 