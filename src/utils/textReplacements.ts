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

// ACTUAL text keys that exist in the JSON template (exact matches from the animation)
export const TEXT_KEYS = {
  // Website and branding
  WEBSITE: "www.woodstockoutlet.com",
  
  // Call to action text
  CTA_SHOP: "Shop the Caruso Bone Leather Maxi Sofa at ",
  CTA_DISCOVER: "Discover minimalist luxury now.",
  
  // Product features and descriptions
  FEATURE_CONSTRUCTION: "Durable, easy-care construction built for modern life",
  FEATURE_TONE: "Neutral Bone Tone",
  FEATURE_SILHOUETTE: "Sleek tapered legs and tailored seams for a clean silhouette",
  FEATURE_SEATS: "Two oversized low-profile seats",
  FEATURE_LEATHER: "100% top-grain Italian leather",
  
  // Product information
  PRODUCT_SUBTITLE: "Leather Maxi Sofa by Soft Line America",
  PRODUCT_NAME: "CARUSO\rBONE\r", // This includes line breaks as in the original
  
  // Tagline
  TAGLINE: "Elevate your living space"
} as const;

// Image asset IDs from the Lottie JSON
export const IMAGE_IDS = {
  IMAGE_0: "image_0", // Logo (img_0.png)
  IMAGE_1: "image_1", // Product image (img_1.png)
  IMAGE_2: "image_2", // High-res product shot (img_2.jpg)
  IMAGE_3: "image_3", // Feature image (img_3.jpg)
  IMAGE_4: "image_4", // Feature image (img_4.jpg)
  IMAGE_5: "image_5", // Feature image (img_5.jpg)
  IMAGE_6: "image_6", // Product image (img_6.png)
  IMAGE_7: "image_7"  // Background image (img_7.jpg)
} as const;

// Audio asset IDs from the Lottie JSON
export const AUDIO_IDS = {
  AUDIO_0: "audio_0", // aud_0.mp3
  AUDIO_1: "audio_1", // aud_1.mp3
  AUDIO_2: "audio_2", // aud_2.mp3
  AUDIO_3: "audio_3"  // aud_3.mp3
} as const;

// ACTUAL original text mapping from the JSON template (exact strings)
export const ORIGINAL_TEXTS = {
  [TEXT_KEYS.WEBSITE]: "www.woodstockoutlet.com",
  [TEXT_KEYS.CTA_SHOP]: "Shop the Caruso Bone Leather Maxi Sofa at ",
  [TEXT_KEYS.CTA_DISCOVER]: "Discover minimalist luxury now.",
  [TEXT_KEYS.FEATURE_CONSTRUCTION]: "Durable, easy-care construction built for modern life",
  [TEXT_KEYS.FEATURE_TONE]: "Neutral Bone Tone",
  [TEXT_KEYS.FEATURE_SILHOUETTE]: "Sleek tapered legs and tailored seams for a clean silhouette",
  [TEXT_KEYS.FEATURE_SEATS]: "Two oversized low-profile seats",
  [TEXT_KEYS.FEATURE_LEATHER]: "100% top-grain Italian leather",
  [TEXT_KEYS.PRODUCT_SUBTITLE]: "Leather Maxi Sofa by Soft Line America",
  [TEXT_KEYS.PRODUCT_NAME]: "CARUSO\rBONE\r",
  [TEXT_KEYS.TAGLINE]: "Elevate your living space"
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

// Helper function to create a furniture product template replacement
export const createFurnitureProductReplacement = (
  productName: string = "CARUSO\rBONE\r",
  productSubtitle: string = "Leather Maxi Sofa by Soft Line America",
  material: string = "100% top-grain Italian leather",
  colorTone: string = "Neutral Bone Tone",
  seatingDescription: string = "Two oversized low-profile seats",
  designFeatures: string = "Sleek tapered legs and tailored seams for a clean silhouette",
  construction: string = "Durable, easy-care construction built for modern life",
  ctaShop: string = "Shop the Caruso Bone Leather Maxi Sofa at ",
  ctaDiscover: string = "Discover minimalist luxury now.",
  website: string = "www.woodstockoutlet.com",
  tagline: string = "Elevate your living space"
): TextReplacements => {
  return {
    [TEXT_KEYS.PRODUCT_NAME]: productName,
    [TEXT_KEYS.PRODUCT_SUBTITLE]: productSubtitle,
    [TEXT_KEYS.FEATURE_LEATHER]: material,
    [TEXT_KEYS.FEATURE_TONE]: colorTone,
    [TEXT_KEYS.FEATURE_SEATS]: seatingDescription,
    [TEXT_KEYS.FEATURE_SILHOUETTE]: designFeatures,
    [TEXT_KEYS.FEATURE_CONSTRUCTION]: construction,
    [TEXT_KEYS.CTA_SHOP]: ctaShop,
    [TEXT_KEYS.CTA_DISCOVER]: ctaDiscover,
    [TEXT_KEYS.WEBSITE]: website,
    [TEXT_KEYS.TAGLINE]: tagline
  };
};

// Example: Create a replacement for a different sofa
export const createSofaVariantReplacement = (
  sofaName: string,
  color: string,
  material: string,
  website: string
): TextReplacements => {
  return createFurnitureProductReplacement(
    `${sofaName.toUpperCase()}\r${color.toUpperCase()}\r`,
    `${material} Maxi Sofa by Soft Line America`,
    `100% top-grain ${material.toLowerCase()}`,
    `${color} ${color === 'Bone' ? 'Tone' : 'Finish'}`,
    "Two oversized low-profile seats",
    "Sleek tapered legs and tailored seams for a clean silhouette",
    "Durable, easy-care construction built for modern life",
    `Shop the ${sofaName} ${color} ${material} Maxi Sofa at `,
    "Discover minimalist luxury now.",
    website,
    "Elevate your living space"
  );
};

// Predefined sofa variants
export const SOFA_VARIANTS = {
  CARUSO_BONE: () => createSofaVariantReplacement("Caruso", "Bone", "Leather", "www.woodstockoutlet.com"),
  CARUSO_BLACK: () => createSofaVariantReplacement("Caruso", "Black", "Leather", "www.woodstockoutlet.com"),
  MILANO_CREAM: () => createSofaVariantReplacement("Milano", "Cream", "Leather", "www.woodstockoutlet.com"),
  ROMA_BROWN: () => createSofaVariantReplacement("Roma", "Brown", "Leather", "www.woodstockoutlet.com")
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