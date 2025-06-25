import { LottieTemplate } from "../LottieTemplate";
import { createContentReplacements, TEXT_KEYS } from "../utils/textReplacements";

export const Sofa2 = () => {
  // Text content directly in component - easier to maintain and modify
  const content = createContentReplacements({
    componentName: "sofa2",
    textReplacements: {
      [TEXT_KEYS.PRODUCT_NAME]: "CABALYNN OATMEAL\rLIGHT BROWN\r",
      [TEXT_KEYS.PRODUCT_SUBTITLE]: "Ashley Furniture",
      [TEXT_KEYS.FEATURE_LEATHER]: "Hardwood solids and veneers",
      [TEXT_KEYS.FEATURE_TONE]: "Architectural modern lodge",
      [TEXT_KEYS.FEATURE_SEATS]: "Neutral polyester upholstery",
      [TEXT_KEYS.FEATURE_SILHOUETTE]: "Cushioned seat for sublime comfort",
      [TEXT_KEYS.FEATURE_CONSTRUCTION]: "Generous seat dimensions",
      [TEXT_KEYS.CTA_SHOP]: "Order yours online now",
      [TEXT_KEYS.WEBSITE]: "www.woodstockoutlet.com",
      [TEXT_KEYS.CTA_DISCOVER]: "Durable construction shine",
      [TEXT_KEYS.TAGLINE]: "Elevate your space with Cabalynn"
    }
  });

  return <LottieTemplate key="sofa2-template" contentReplacements={content} />;
}; 