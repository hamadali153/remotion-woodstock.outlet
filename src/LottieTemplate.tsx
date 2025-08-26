import { Lottie } from "@remotion/lottie";
import { useEffect, useState, useMemo } from "react";
import {
  AbsoluteFill,
  Audio,
  Sequence,
  continueRender,
  delayRender,
  staticFile,
} from "remotion";
import { ContentReplacements } from "./utils/textReplacements";
import "./fonts.css";

interface LottieAsset {
  id: string;
  p: string;
  u: string;
  t?: number;
  [key: string]: any;
}

interface LottieLayer {
  nm: string;
  ty?: number;
  t?: {
    d?: {
      k?: Array<{
        s?: {
          t?: string;
          f?: string;
        };
      }>;
    };
  };
  [key: string]: any;
}

interface LottieTemplateProps {
  contentReplacements?: ContentReplacements;
}

export const LottieTemplate: React.FC<LottieTemplateProps> = ({ 
  contentReplacements = { textReplacements: {}, useOriginalPaths: false }
}) => {
  const [handle] = useState(() => delayRender("Loading animation"));
  const [audioHandle] = useState(() => delayRender("Calculating audio playback rate"));
  const [animationData, setAnimationData] = useState(null);
  const [audioError, setAudioError] = useState<string | null>(null);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [audioReady, setAudioReady] = useState(false);

  // Get base paths based on component name or use original
  const getAssetBasePaths = (componentName?: string, useOriginalPaths?: boolean) => {
    if (useOriginalPaths) {
      return {
        imagePath: "",
        audioPath: ""
      };
    }
    return {
      imagePath: `${componentName || 'original'}/images/`,
      audioPath: `${componentName || 'original'}/audio/`
    };
  };

  const { imagePath, audioPath } = useMemo(
    () => getAssetBasePaths(contentReplacements.componentName, contentReplacements.useOriginalPaths),
    [contentReplacements.componentName, contentReplacements.useOriginalPaths]
  );

  useEffect(() => {
    const processAnimationData = async () => {
      try {
        // Always fetch fresh data - no global caching to prevent state persistence between compositions
        const response = await fetch(staticFile("templates/ae-template.json"));
        const json = await response.json();
        
        // Create a fresh copy for processing
        const processedJson = JSON.parse(JSON.stringify(json));

        // If using original paths, don't modify the assets
        if (!contentReplacements.useOriginalPaths) {
          // Process assets (images and audio)
          if (processedJson.assets) {
            processedJson.assets = processedJson.assets.map((asset: LottieAsset) => {
              if (!asset.t && asset.p) {
                // Handle image assets
                return {
                  ...asset,
                  u: "",
                  p: staticFile(`${imagePath}${asset.p}`)
                };
              }
              if (asset.t === 2 && asset.p) {
                // Handle audio assets
                return {
                  ...asset,
                  u: "",
                  p: staticFile(`${audioPath}${asset.p}`)
                };
              }
              return asset;
            });
          }

          // Process text layers if text replacements are provided
          if (processedJson.layers && contentReplacements.textReplacements) {
            processedJson.layers = processedJson.layers.map((layer: LottieLayer) => {
              // Check if it's a text layer (ty === 5) and has text content
              if (layer.ty === 5 && layer.t?.d?.k?.[0]?.s?.t) {
                const originalText = layer.t.d.k[0].s.t;
                
                // Check if we have a replacement for this text
                const replacement = contentReplacements.textReplacements?.[originalText];
                
                if (replacement) {
                  return {
                    ...layer,
                    t: {
                      ...layer.t,
                      d: {
                        ...layer.t.d,
                        k: [
                          {
                            ...layer.t.d.k[0],
                            s: {
                              ...layer.t.d.k[0].s,
                              t: replacement
                            }
                          }
                        ]
                      }
                    }
                  };
                }
              }
              return layer;
            });
          }
        }

        setAnimationData(processedJson);
        continueRender(handle);
      } catch (error) {
        console.error("Animation failed to load:", error);
        setAudioError("Failed to load animation");
      }
    };

    processAnimationData();
  }, [handle, contentReplacements, imagePath, audioPath]);

  // Calculate playback rate to match video duration
  useEffect(() => {
    if (!animationData || contentReplacements.useOriginalPaths) {
      setAudioReady(true);
      continueRender(audioHandle);
      return;
    }

    const calculatePlaybackRate = async () => {
      try {
        // Get video duration from Lottie JSON
        const totalFrames = (animationData as any).op;
        const frameRate = (animationData as any).fr;
        const videoDuration = totalFrames / frameRate; // in seconds

        // Get audio duration
        const audio = new window.Audio(staticFile(`${audioPath}aud_1.mp3`));
        
        audio.addEventListener('loadedmetadata', () => {
          const audioDuration = audio.duration; // in seconds
          
          // Calculate playback rate
          const calculatedRate = audioDuration / videoDuration;
          setPlaybackRate(calculatedRate);
          
          console.log(`=== Audio Sync Calculation ===`);
          console.log(`Video duration from Lottie: ${videoDuration.toFixed(2)}s`);
          console.log(`Audio duration: ${audioDuration.toFixed(2)}s`);
          console.log(`Calculated playback rate: ${calculatedRate.toFixed(3)}`);
          console.log(`==============================`);

          // Mark audio as ready and continue rendering
          setAudioReady(true);
          continueRender(audioHandle);
        });

        audio.addEventListener('error', (error: any) => {
          console.error("Failed to load audio metadata:", error);
          // Keep default playback rate of 1 if audio fails to load
          setAudioReady(true);
          continueRender(audioHandle);
        });

        // Load the audio to trigger metadata loading
        audio.load();
      } catch (error) {
        console.error("Error calculating playback rate:", error);
        setAudioReady(true);
        continueRender(audioHandle);
      }
    };

    calculatePlaybackRate();
  }, [animationData, audioPath, contentReplacements.useOriginalPaths, audioHandle]);

  if (!animationData || !audioReady) {
    return (
      <AbsoluteFill style={{ 
        backgroundColor: '#000',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        Loading animation and calculating audio sync...
      </AbsoluteFill>
    );
  }

  if (audioError) {
    return (
      <AbsoluteFill style={{ 
        backgroundColor: '#000',
        color: '#ff4444',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        Error: {audioError}
      </AbsoluteFill>
    );
  }

  return (
    <AbsoluteFill>
      <Lottie animationData={animationData} />
      {!contentReplacements.useOriginalPaths && (
        <>
          <Audio
            src={staticFile(`${audioPath}aud_1.mp3`)}
            volume={1}
            playbackRate={playbackRate}
            onError={(error) => {
              console.error("Audio 1 error:", error);
              setAudioError("Failed to load audio 1");
            }}
          />
      
          <Audio
            src={staticFile(`${audioPath}aud_2.mp3`)}
            volume={0.8}
            playbackRate={1}
            onError={(error) => {
              console.error("Audio 2 error:", error);
              setAudioError("Failed to load audio 2");
            }}
          />
        </>
      )}
    </AbsoluteFill>
  );
}; 