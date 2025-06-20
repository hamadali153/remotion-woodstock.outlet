import { LottieTemplate } from "../LottieTemplate";
import { createContentReplacements } from "../utils/textReplacements";

export const OriginalVideo = () => {
  // Original video uses no text replacements - shows original JSON content
  const content = createContentReplacements({
    componentName: "original", // This will use assets from public/original/ directory  
    textReplacements: {}, // Empty replacements to show original text
    useOriginalPaths: false // Use consistent asset loading like other components
  });

  return <LottieTemplate key="original-template" contentReplacements={content} />;
}; 