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

// ACTUAL text keys that exist in the JSON template
export const TEXT_KEYS = {
  // Main product names
  CARUSO: "CARUSO\r",
  BONE: "\rBONE",
  PRODUCT_SUBTITLE: "Leather Maxi Sofa by Soft Line America",
  
  // Material descriptors
  PERCENTAGE: "100%",
  TOP_GRAIN: "top-grain",
  ITALIAN: " Italian",
  LEATHER: "leather",
  NEUTRAL: "Neutral",
  TONE: "Tone",
  BONE_COLOR: "Bone",
  
  // Feature descriptions
  FEATURE_1: "Two oversized low-profile seats",
  FEATURE_2: "Sleek tapered legs and tailored seams for a clean silhouette",
  FEATURE_3: "Durable, easy-care construction built for modern life",
  
  // Call to action
  CTA_TEXT: "Shop the Caruso Bone Leather Maxi Sofa at ",
  WEBSITE: "www.woodstockoutlet.com",
  FINAL_CTA: "Discover minimalist luxury now.",
  
  // Tagline words
  ELEVATE: "Elevate ",
  YOUR: " your ",
  LIVING: " living ",
  SPACE: "space."
} as const;

// Image asset IDs from the Lottie JSON
export const IMAGE_IDS = {
  IMAGE_0: "image_0", // Logo
  IMAGE_1: "image_1", // Product image
  IMAGE_2: "image_2", // High-res product shot
  IMAGE_3: "image_3", // Feature image
  IMAGE_4: "image_4", // Feature image
  IMAGE_5: "image_5", // Feature image
  IMAGE_6: "image_6", // Product image
  IMAGE_7: "image_7"  // Background image
} as const;

// ACTUAL original text mapping from the JSON template (for reference)
export const ORIGINAL_TEXTS = {
  // Product names and branding
  [TEXT_KEYS.CARUSO]: "CARUSO\r",
  [TEXT_KEYS.BONE]: "\rBONE",
  [TEXT_KEYS.PRODUCT_SUBTITLE]: "Leather Maxi Sofa by Soft Line America",
  
  // Material specifications
  [TEXT_KEYS.PERCENTAGE]: "100%",
  [TEXT_KEYS.TOP_GRAIN]: "top-grain",
  [TEXT_KEYS.ITALIAN]: " Italian",
  [TEXT_KEYS.LEATHER]: "leather",
  [TEXT_KEYS.NEUTRAL]: "Neutral",
  [TEXT_KEYS.TONE]: "Tone",
  [TEXT_KEYS.BONE_COLOR]: "Bone",
  
  // Product features
  [TEXT_KEYS.FEATURE_1]: "Two oversized low-profile seats",
  [TEXT_KEYS.FEATURE_2]: "Sleek tapered legs and tailored seams for a clean silhouette",
  [TEXT_KEYS.FEATURE_3]: "Durable, easy-care construction built for modern life",
  
  // Call to action elements
  [TEXT_KEYS.CTA_TEXT]: "Shop the Caruso Bone Leather Maxi Sofa at ",
  [TEXT_KEYS.WEBSITE]: "www.woodstockoutlet.com",
  [TEXT_KEYS.FINAL_CTA]: "Discover minimalist luxury now.",
  
  // Tagline components
  [TEXT_KEYS.ELEVATE]: "Elevate ",
  [TEXT_KEYS.YOUR]: " your ",
  [TEXT_KEYS.LIVING]: " living ",
  [TEXT_KEYS.SPACE]: "space."
};

// Helper function to create content replacements (text + images + audio)
export const createContentReplacements = (options: Partial<ContentReplacements>): ContentReplacements => {
  return {
    textReplacements: options.textReplacements || {},
    componentName: options.componentName,
    useOriginalPaths: options.useOriginalPaths || false
  };
};

// Helper function to get all original text strings for reference
export const getAllOriginalTexts = (): string[] => {
  return Object.values(ORIGINAL_TEXTS);
};

// Helper function to create a complete replacement mapping
export const createCompleteTextReplacement = (
  caruso: string = "CARUSO\r",
  bone: string = "\rBONE",
  productSubtitle: string = "Leather Maxi Sofa by Soft Line America",
  percentage: string = "100%",
  topGrain: string = "top-grain",
  italian: string = " Italian",
  leather: string = "leather",
  neutral: string = "Neutral",
  tone: string = "Tone",
  boneColor: string = "Bone",
  feature1: string = "Two oversized low-profile seats",
  feature2: string = "Sleek tapered legs and tailored seams for a clean silhouette",
  feature3: string = "Durable, easy-care construction built for modern life",
  ctaText: string = "Shop the Caruso Bone Leather Maxi Sofa at ",
  website: string = "www.woodstockoutlet.com",
  finalCta: string = "Discover minimalist luxury now.",
  elevate: string = "Elevate ",
  your: string = " your ",
  living: string = " living ",
  space: string = "space."
): TextReplacements => {
  return {
    [TEXT_KEYS.CARUSO]: caruso,
    [TEXT_KEYS.BONE]: bone,
    [TEXT_KEYS.PRODUCT_SUBTITLE]: productSubtitle,
    [TEXT_KEYS.PERCENTAGE]: percentage,
    [TEXT_KEYS.TOP_GRAIN]: topGrain,
    [TEXT_KEYS.ITALIAN]: italian,
    [TEXT_KEYS.LEATHER]: leather,
    [TEXT_KEYS.NEUTRAL]: neutral,
    [TEXT_KEYS.TONE]: tone,
    [TEXT_KEYS.BONE_COLOR]: boneColor,
    [TEXT_KEYS.FEATURE_1]: feature1,
    [TEXT_KEYS.FEATURE_2]: feature2,
    [TEXT_KEYS.FEATURE_3]: feature3,
    [TEXT_KEYS.CTA_TEXT]: ctaText,
    [TEXT_KEYS.WEBSITE]: website,
    [TEXT_KEYS.FINAL_CTA]: finalCta,
    [TEXT_KEYS.ELEVATE]: elevate,
    [TEXT_KEYS.YOUR]: your,
    [TEXT_KEYS.LIVING]: living,
    [TEXT_KEYS.SPACE]: space
  };
};