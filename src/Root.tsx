import { Composition } from "remotion";
import { ProductVideo } from "./components/ProductVideo";
import { OriginalVideo } from "./components/OriginalVideo";
import { RoybeckLightBrown as Sofa1 } from "./components/Sofa1";
import { Sofa2 } from "./components/Sofa2";
import { Sofa3 } from "./components/Sofa3";
import { Sofa4 } from "./components/Sofa4";
import { FontLoader } from "./fonts";
import "./fonts"; // This loads the local Sora fonts

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <FontLoader />
      <Composition
        id="OriginalVideo"
        component={OriginalVideo}
        durationInFrames={1080}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="ProductVideo"
        component={ProductVideo}
        durationInFrames={1080}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Sofa1"
        component={Sofa1}
        durationInFrames={1080}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Sofa2"
        component={Sofa2}
        durationInFrames={1080}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Sofa3"
        component={Sofa3}
        durationInFrames={1080}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Sofa4"
        component={Sofa4}
        durationInFrames={1080}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
