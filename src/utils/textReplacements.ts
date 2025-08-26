// src/utils/textReplacements.ts
// Types for text and content replacements
export interface TextReplacements {
  [key: string]: string;
}

export interface ImageReplacements {
  [imageId: string]: string;
}

export interface ContentReplacements {
  textReplacements?: TextReplacements;
  imageReplacements?: ImageReplacements;
  assetPath?: string; // Custom asset path for images
  audioPath?: string; // Custom audio path for audio files
  playbackRate?: number; // Audio playback rate override
  componentName?: string; // This will be used to determine the folder for assets
  useOriginalPaths?: boolean; // If true, uses paths directly from JSON
}

// TEXT KEYS updated to match actual strings found in public/templates/ae-template.json
// These are the exact originals we will replace in the JSON.
export const TEXT_KEYS = {
  // Branding / product identifier
  PRODUCT_BRAND: "CLARE",
  PRODUCT_COLOR: "BEIGE",
  PRODUCT_NAME: "CLARE VIEW\rCUSHIONED \rOUTDOOR \rSOFA", // multiline with \r as in JSON

  // Subtitle / byline
  PRODUCT_SUBTITLE: "SOFA BY ASHLY FURNITURE",

  // Website
  WEBSITE: "www.woodstockoutlet.com",

  // CTA
  CTA_SHOP: "SHOP ONLINE NOW",

  // Feature lines (exact copies from JSON)
  FEATURE_CONSTRUCTION: "THE AMPLE 76.5-INCH SEAT & \rALL-WEATHER FOAM CORE DELIVERS LASTING COMFORT",
  FEATURE_SILHOUETTE: "REMOVABLE CUSHIONS FOR EASY MAINTENANCE & \rNUVELLA PILLOWS OFFER PLUSH SUPPORT",
  FEATURE_FINISH: "FIVE-STEP PROTECTIVE FINISH STANDS UP TO RAIN AND SUN",
  FEATURE_MATERIAL: "CRAFTED FROM STURDY EUCALYPTUS WOOD",
  TAGLINE: "ENJOY OUTDOOR STYLE\u00A0AND\u00A0COMFORT" // includes non-breaking spaces in template
} as const;

// Image asset IDs from the Lottie JSON
export const IMAGE_IDS = {
  IMAGE_0: "image_0",
  IMAGE_1: "image_1",
  IMAGE_2: "image_2",
  IMAGE_3: "image_3",
  IMAGE_4: "image_4",
  IMAGE_5: "image_5",
  IMAGE_6: "image_6",
  IMAGE_7: "image_7"
} as const;

// Audio asset IDs from the Lottie JSON (present but not directly used for text)
export const AUDIO_IDS = {
  AUDIO_0: "audio_0",
  AUDIO_1: "audio_1",
  AUDIO_2: "audio_2",
  AUDIO_3: "audio_3"
} as const;

// ACTUAL original text mapping from the JSON template (exact strings)
export const ORIGINAL_TEXTS = {
  [TEXT_KEYS.WEBSITE]: TEXT_KEYS.WEBSITE,
  [TEXT_KEYS.CTA_SHOP]: TEXT_KEYS.CTA_SHOP,
  [TEXT_KEYS.FEATURE_CONSTRUCTION]: TEXT_KEYS.FEATURE_CONSTRUCTION,
  [TEXT_KEYS.FEATURE_SILHOUETTE]: TEXT_KEYS.FEATURE_SILHOUETTE,
  [TEXT_KEYS.FEATURE_FINISH]: TEXT_KEYS.FEATURE_FINISH,
  [TEXT_KEYS.FEATURE_MATERIAL]: TEXT_KEYS.FEATURE_MATERIAL,
  [TEXT_KEYS.PRODUCT_SUBTITLE]: TEXT_KEYS.PRODUCT_SUBTITLE,
  [TEXT_KEYS.PRODUCT_NAME]: TEXT_KEYS.PRODUCT_NAME,
  [TEXT_KEYS.TAGLINE]: TEXT_KEYS.TAGLINE,
  [TEXT_KEYS.PRODUCT_BRAND]: TEXT_KEYS.PRODUCT_BRAND,
  [TEXT_KEYS.PRODUCT_COLOR]: TEXT_KEYS.PRODUCT_COLOR
};

// Helper function to create content replacements (text + images + audio)
export const createContentReplacements = (options: Partial<ContentReplacements>): ContentReplacements => {
  return {
    textReplacements: options.textReplacements || {},
    imageReplacements: options.imageReplacements || {},
    componentName: options.componentName,
    useOriginalPaths: options.useOriginalPaths || false,
    assetPath: options.assetPath,
    audioPath: options.audioPath,
    playbackRate: options.playbackRate
  };
};

// Helper function to get all original text strings for reference
export const getAllOriginalTexts = (): string[] => {
  return Object.values(ORIGINAL_TEXTS);
};

// Backward-compatible helper: Create a product replacement mapping using new template strings.
export const createFurnitureProductReplacement = (
  productName: string = TEXT_KEYS.PRODUCT_NAME,
  productSubtitle: string = TEXT_KEYS.PRODUCT_SUBTITLE,
  featureMaterial: string = TEXT_KEYS.FEATURE_MATERIAL,
  featureFinish: string = TEXT_KEYS.FEATURE_FINISH,
  featureConstruction: string = TEXT_KEYS.FEATURE_CONSTRUCTION,
  featureSilhouette: string = TEXT_KEYS.FEATURE_SILHOUETTE,
  ctaShop: string = TEXT_KEYS.CTA_SHOP,
  website: string = TEXT_KEYS.WEBSITE,
  tagline: string = TEXT_KEYS.TAGLINE,
  brand: string = TEXT_KEYS.PRODUCT_BRAND,
  color: string = TEXT_KEYS.PRODUCT_COLOR
): TextReplacements => {
  return {
    [TEXT_KEYS.PRODUCT_NAME]: productName,
    [TEXT_KEYS.PRODUCT_SUBTITLE]: productSubtitle,
    [TEXT_KEYS.FEATURE_MATERIAL]: featureMaterial,
    [TEXT_KEYS.FEATURE_FINISH]: featureFinish,
    [TEXT_KEYS.FEATURE_CONSTRUCTION]: featureConstruction,
    [TEXT_KEYS.FEATURE_SILHOUETTE]: featureSilhouette,
    [TEXT_KEYS.CTA_SHOP]: ctaShop,
    [TEXT_KEYS.WEBSITE]: website,
    [TEXT_KEYS.TAGLINE]: tagline,
    [TEXT_KEYS.PRODUCT_BRAND]: brand,
    [TEXT_KEYS.PRODUCT_COLOR]: color
  };
};

// Predefined variant example (can be adapted as needed)
export const SOFA_VARIANTS = {
  CLARE_BEIGE: () => createFurnitureProductReplacement(
    TEXT_KEYS.PRODUCT_NAME,
    TEXT_KEYS.PRODUCT_SUBTITLE,
    TEXT_KEYS.FEATURE_MATERIAL,
    TEXT_KEYS.FEATURE_FINISH,
    TEXT_KEYS.FEATURE_CONSTRUCTION,
    TEXT_KEYS.FEATURE_SILHOUETTE,
    TEXT_KEYS.CTA_SHOP,
    TEXT_KEYS.WEBSITE,
    TEXT_KEYS.TAGLINE,
    "CLARE",
    "BEIGE"
  )
};

// USAGE EXAMPLES:

/* 
// Example 1: Using the original content (no text replacements)
const originalContent = createContentReplacements({
  componentName: "original",
  textReplacements: {}, // Empty - shows original text
});

// Example 2: Complete custom replacement
const customContent = createContentReplacements({
  componentName: "custom",
  textReplacements: {
    [TEXT_KEYS.PRODUCT_NAME]: "AURORA\rGOLD\r",
    [TEXT_KEYS.PRODUCT_SUBTITLE]: "Luxury Sectional by Elite Design",
    [TEXT_KEYS.FEATURE_LEATHER]: "Hand-crafted premium velvet",
    [TEXT_KEYS.FEATURE_TONE]: "Elegant Gold Accent",
    [TEXT_KEYS.FEATURE_SEATS]: "Four spacious seating sections",
    [TEXT_KEYS.FEATURE_SILHOUETTE]: "Art deco inspired curved design",
    [TEXT_KEYS.FEATURE_CONSTRUCTION]: "Reinforced hardwood frame construction",
    [TEXT_KEYS.CTA_SHOP]: "Experience luxury furniture at ",
    [TEXT_KEYS.WEBSITE]: "www.elitedesign.com",
    [TEXT_KEYS.CTA_DISCOVER]: "Where luxury meets comfort",
    [TEXT_KEYS.TAGLINE]: "Transform your living space"
  }
});

// Example 3: Using predefined variants
const carusoBlackContent = createContentReplacements({
  componentName: "caruso-black",
  textReplacements: SOFA_VARIANTS.CARUSO_BLACK()
});

// Example 4: Quick furniture replacement helper
const modernSofaContent = createContentReplacements({
  componentName: "modern-sofa",
  textReplacements: createFurnitureProductReplacement(
    "MODERN\rGRAY\r",
    "Contemporary Sofa by Urban Living",
    "100% recycled polyester fabric",
    "Charcoal Gray Finish",
    "Modular three-seater configuration",
    "Minimalist design with hidden storage",
    "Eco-friendly materials and construction",
    "Shop sustainable furniture at ",
    "Discover eco-luxury living",
    "www.urbanliving.com",
    "Create a sustainable home"
  )
});
*/