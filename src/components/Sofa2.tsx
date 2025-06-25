import { LottieTemplate } from "../LottieTemplate";
import { createContentReplacements, TEXT_KEYS } from "../utils/textReplacements";

export const Sofa2 = () => {
  // Text content directly in component - easier to maintain and modify
  const content = createContentReplacements({
    componentName: "sofa2",
    textReplacements: {
      [TEXT_KEYS.PRODUCT_NAME]: "VALENCIA\rCREAM\r",
      [TEXT_KEYS.PRODUCT_SUBTITLE]: "Sectional Sofa by Modern Living",
      [TEXT_KEYS.FEATURE_LEATHER]: "Premium microfiber upholstery",
      [TEXT_KEYS.FEATURE_TONE]: "Neutral Cream Finish",
      [TEXT_KEYS.FEATURE_SEATS]: "Spacious L-shaped configuration",
      [TEXT_KEYS.FEATURE_SILHOUETTE]: "Contemporary design with clean lines",
      [TEXT_KEYS.FEATURE_CONSTRUCTION]: "High-density foam for ultimate comfort",
      [TEXT_KEYS.CTA_SHOP]: "Discover luxury seating solutions at ",
      [TEXT_KEYS.WEBSITE]: "www.woodstockoutlet.com",
      [TEXT_KEYS.CTA_DISCOVER]: "Transform your living room today",
      [TEXT_KEYS.TAGLINE]: "Elevate your living space"
    }
  });

  return <LottieTemplate key="sofa2-template" contentReplacements={content} />;
}; 