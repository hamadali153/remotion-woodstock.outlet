// src/FontLoader.tsx
import { useEffect } from "react";
import { delayRender, continueRender, staticFile } from "remotion";
import { loadFont } from "@remotion/fonts";
import "./fonts.css";

export const FontLoader: React.FC = () => {
  useEffect(() => {
    const handle = delayRender();

    // Load fonts as a single family with different weights
    Promise.all([
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
