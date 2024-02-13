import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { NoToneMapping } from "three";

import Composer from "./Composer";
import PlanetsAndStars from "./PlanetsAndStars";
import Camera from "./Camera";

interface CanvasProps {
  pixelSize?: number;
}

const CanvasComponent = ({ pixelSize = 100 }: CanvasProps) => {
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
        <Composer pixelSize={pixelSize} />
        <Camera />
        <PlanetsAndStars />
      </Canvas>
    </div>
  );
};

export default CanvasComponent;
