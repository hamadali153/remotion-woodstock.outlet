import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

// Load all Sora font variants with the exact family names expected by Lottie
export const loadSoraFonts = () => {
  // Sora-Regular - This is what the JSON template expects
  loadFont({
    family: "Sora-Regular",
    url: staticFile("fonts/Sora-Regular.ttf"),
    weight: "400",
    style: "normal"
  });

  // Sora-SemiBold - This is what the JSON template expects
  loadFont({
    family: "Sora-SemiBold",
    url: staticFile("fonts/Sora-SemiBold.ttf"),
    weight: "600",
    style: "normal"
  });

  // Sora-Bold - This is what the JSON template expects  
  loadFont({
    family: "Sora-Bold",
    url: staticFile("fonts/Sora-Bold.ttf"),
    weight: "700",
    style: "normal"
  });

  // Load additional weights as general "Sora" family for custom use
  loadFont({
    family: "Sora",
    url: staticFile("fonts/Sora-Thin.ttf"),
    weight: "100",
    style: "normal"
  });

  loadFont({
    family: "Sora",
    url: staticFile("fonts/Sora-ExtraLight.ttf"),
    weight: "200",
    style: "normal"
  });

  loadFont({
    family: "Sora",
    url: staticFile("fonts/Sora-Light.ttf"),
    weight: "300",
    style: "normal"
  });

  loadFont({
    family: "Sora",
    url: staticFile("fonts/Sora-Regular.ttf"),
    weight: "400",
    style: "normal"
  });

  loadFont({
    family: "Sora",
    url: staticFile("fonts/Sora-Medium.ttf"),
    weight: "500",
    style: "normal"
  });

  loadFont({
    family: "Sora",
    url: staticFile("fonts/Sora-SemiBold.ttf"),
    weight: "600",
    style: "normal"
  });

  loadFont({
    family: "Sora",
    url: staticFile("fonts/Sora-Bold.ttf"),
    weight: "700",
    style: "normal"
  });

  loadFont({
    family: "Sora",
    url: staticFile("fonts/Sora-ExtraBold.ttf"),
    weight: "800",
    style: "normal"
  });
};

// Font family constants for easy use
export const FONT_FAMILIES = {
  sora: "Sora",
  soraRegular: "Sora-Regular",
  soraSemiBold: "Sora-SemiBold",
  soraBold: "Sora-Bold"
};

// Call this function to load all fonts
loadSoraFonts(); 