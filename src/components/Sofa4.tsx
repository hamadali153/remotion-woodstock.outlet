import { LottieTemplate } from "../LottieTemplate";
import { createContentReplacements, TEXT_KEYS } from "../utils/textReplacements";

export const Sofa4 = () => {
  // Text content directly in component - easier to maintain and modify
  const content = createContentReplacements({
    componentName: "sofa4",
    textReplacements: {
      [TEXT_KEYS.PRODUCT_NAME]: "NORDIC\rNAVY\r",
      [TEXT_KEYS.PRODUCT_SUBTITLE]: "Scandinavian Loveseat by Design Studio",
      [TEXT_KEYS.FEATURE_LEATHER]: "Sustainable fabric with stain protection",
      [TEXT_KEYS.FEATURE_TONE]: "Deep Navy Blue Upholstery",
      [TEXT_KEYS.FEATURE_SEATS]: "Compact two-seater design",
      [TEXT_KEYS.FEATURE_SILHOUETTE]: "Mid-century modern aesthetic",
      [TEXT_KEYS.FEATURE_CONSTRUCTION]: "Solid oak legs with natural finish",
      [TEXT_KEYS.CTA_SHOP]: "Bring Scandinavian style home from ",
      [TEXT_KEYS.WEBSITE]: "www.woodstockoutlet.com",
      [TEXT_KEYS.CTA_DISCOVER]: "Simplicity meets sophisticated comfort",
      [TEXT_KEYS.TAGLINE]: "Elevate your living space"
    }
  });

  return <LottieTemplate key="sofa4-template" contentReplacements={content} />;
}; 