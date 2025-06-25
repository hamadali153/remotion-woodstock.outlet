import { LottieTemplate } from "../LottieTemplate";
import { createContentReplacements, TEXT_KEYS } from "../utils/textReplacements";

export const Sofa3 = () => {
  // Text content directly in component - easier to maintain and modify
  const content = createContentReplacements({
    componentName: "sofa3",
    textReplacements: {
      [TEXT_KEYS.PRODUCT_NAME]: "MANHATTAN\rCHARCOAL\r",
      [TEXT_KEYS.PRODUCT_SUBTITLE]: "Power Reclining Sofa by Elite Comfort",
      [TEXT_KEYS.FEATURE_LEATHER]: "100% genuine leather upholstery",
      [TEXT_KEYS.FEATURE_TONE]: "Rich Charcoal Finish",
      [TEXT_KEYS.FEATURE_SEATS]: "Dual power reclining mechanisms",
      [TEXT_KEYS.FEATURE_SILHOUETTE]: "USB charging ports in both armrests",
      [TEXT_KEYS.FEATURE_CONSTRUCTION]: "Memory foam cushions for personalized comfort",
      [TEXT_KEYS.CTA_SHOP]: "Experience ultimate relaxation at ",
      [TEXT_KEYS.WEBSITE]: "www.woodstockoutlet.com",
      [TEXT_KEYS.CTA_DISCOVER]: "Redefine comfort and convenience",
      [TEXT_KEYS.TAGLINE]: "Elevate your living space"
    }
  });

  return <LottieTemplate key="sofa3-template" contentReplacements={content} />;
}; 