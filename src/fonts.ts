// src/FontLoader.tsx
import { useEffect } from "react";
import { delayRender, continueRender, staticFile } from "remotion";
import { loadFont } from "@remotion/fonts";
import "./fonts.css";

export const FontLoader: React.FC = () => {
  useEffect(() => {
    const handle = delayRender();

    // Load fonts as families with different weights
    Promise.all([
      // Sora fonts
      loadFont({
        family: "Sora",
        url: staticFile("fonts/Sora-Regular.ttf"),
        weight: "normal",
        style: "normal",
        display: "block"
      }),
      loadFont({
        family: "Sora",
        url: staticFile("fonts/Sora-Bold.ttf"),
        weight: "bold",
        style: "normal",
        display: "block"
      }),
      loadFont({
        family: "Sora",
        url: staticFile("fonts/Sora-SemiBold.ttf"),
        weight: "600",
        style: "normal",
        display: "block"
      }),
      loadFont({
        family: "Sora",
        url: staticFile("fonts/Sora-ExtraLight.ttf"),
        weight: "200",
        style: "normal",
        display: "block"
      }),
      loadFont({
        family: "Sora",
        url: staticFile("fonts/Sora-Light.ttf"),
        weight: "300",
        style: "normal",
        display: "block"
      }),
      loadFont({
        family: "Sora",
        url: staticFile("fonts/Sora-Medium.ttf"),
        weight: "500",
        style: "normal",
        display: "block"
      }),
      loadFont({
        family: "Sora",
        url: staticFile("fonts/Sora-ExtraBold.ttf"),
        weight: "800",
        style: "normal",
        display: "block"
      }),
      
      // Poppins fonts
      loadFont({
        family: "Poppins",
        url: staticFile("fonts/Poppins-Regular.ttf"),
        weight: "normal",
        style: "normal",
        display: "block"
      }),
      loadFont({
        family: "Poppins",
        url: staticFile("fonts/Poppins-Bold.ttf"),
        weight: "bold",
        style: "normal",
        display: "block"
      }),
      loadFont({
        family: "Poppins",
        url: staticFile("fonts/Poppins-SemiBold.ttf"),
        weight: "600",
        style: "normal",
        display: "block"
      }),
      loadFont({
        family: "Poppins",
        url: staticFile("fonts/Poppins-Medium.ttf"),
        weight: "500",
        style: "normal",
        display: "block"
      }),
      loadFont({
        family: "Poppins",
        url: staticFile("fonts/Poppins-Light.ttf"),
        weight: "300",
        style: "normal",
        display: "block"
      }),
      loadFont({
        family: "Poppins",
        url: staticFile("fonts/Poppins-ExtraLight.ttf"),
        weight: "200",
        style: "normal",
        display: "block"
      }),
      loadFont({
        family: "Poppins",
        url: staticFile("fonts/Poppins-Thin.ttf"),
        weight: "100",
        style: "normal",
        display: "block"
      }),
      loadFont({
        family: "Poppins",
        url: staticFile("fonts/Poppins-ExtraBold.ttf"),
        weight: "800",
        style: "normal",
        display: "block"
      }),
      loadFont({
        family: "Poppins",
        url: staticFile("fonts/Poppins-Black.ttf"),
        weight: "900",
        style: "normal",
        display: "block"
      }),
      
      // Poppins italic variants
      loadFont({
        family: "Poppins",
        url: staticFile("fonts/Poppins-Italic.ttf"),
        weight: "normal",
        style: "italic",
        display: "block"
      }),
      loadFont({
        family: "Poppins",
        url: staticFile("fonts/Poppins-BoldItalic.ttf"),
        weight: "bold",
        style: "italic",
        display: "block"
      }),
      loadFont({
        family: "Poppins",
        url: staticFile("fonts/Poppins-SemiBoldItalic.ttf"),
        weight: "600",
        style: "italic",
        display: "block"
      }),
      loadFont({
        family: "Poppins",
        url: staticFile("fonts/Poppins-MediumItalic.ttf"),
        weight: "500",
        style: "italic",
        display: "block"
      }),
      loadFont({
        family: "Poppins",
        url: staticFile("fonts/Poppins-LightItalic.ttf"),
        weight: "300",
        style: "italic",
        display: "block"
      }),
      loadFont({
        family: "Poppins",
        url: staticFile("fonts/Poppins-ExtraLightItalic.ttf"),
        weight: "200",
        style: "italic",
        display: "block"
      }),
      loadFont({
        family: "Poppins",
        url: staticFile("fonts/Poppins-ThinItalic.ttf"),
        weight: "100",
        style: "italic",
        display: "block"
      }),
      loadFont({
        family: "Poppins",
        url: staticFile("fonts/Poppins-ExtraBoldItalic.ttf"),
        weight: "800",
        style: "italic",
        display: "block"
      }),
      loadFont({
        family: "Poppins",
        url: staticFile("fonts/Poppins-BlackItalic.ttf"),
        weight: "900",
        style: "italic",
        display: "block"
      })
    ])
      .then(() => {
        continueRender(handle);
      })
      .catch((err) => {
        console.error("Error loading fonts:", err);
        continueRender(handle);
      });
  }, []);

  return null;
};
