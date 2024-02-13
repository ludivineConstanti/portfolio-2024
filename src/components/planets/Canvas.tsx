import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { NoToneMapping } from "three";

import Composer from "./Composer";
import PlanetsAndStars from "./PlanetsAndStars";
import Camera from "./Camera";

interface CanvasProps {
  pixelSize?: number;
  hue?: number;
  saturation?: number;
}

const CanvasComponent = ({
  pixelSize = 100,
  hue = 0,
  saturation = 0,
}: CanvasProps) => {
  const [shaderState, setShadersState] = useState({
    pixel: { pixelSize: 0 },
    hueSaturation: {
      hue: 0,
      saturation: 0,
    },
  });

  return (
    <div className="fixed top-0 h-full w-full">
      <Canvas
        gl={{
          antialias: true,
          toneMapping: NoToneMapping,
          preserveDrawingBuffer: true,
          alpha: true,
        }}
        linear
      >
        <Composer
          shadersState={shaderState}
          pixelSize={pixelSize}
          hue={hue}
          saturation={saturation}
        />
        <Camera />
        <PlanetsAndStars />
      </Canvas>
    </div>
  );
};

export default CanvasComponent;
