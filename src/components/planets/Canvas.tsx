import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { NoToneMapping } from "three";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import Composer from "./Composer";
import PlanetsAndStars from "./PlanetsAndStars";
import Camera from "./Camera";

interface CanvasProps {
  pixelSize?: number;
}

const CanvasComponent = ({ pixelSize = 100 }: CanvasProps) => {
  const [scrollPositionY, setScrollPositionY] = useState(0);

  console.log("scrollPositionY", scrollPositionY);

  useScrollPosition(({ currPos }) => {
    setScrollPositionY(currPos.y);
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
        <Composer scrollPositionY={scrollPositionY} />
        <Camera />
        <PlanetsAndStars scrollPositionY={scrollPositionY} />
      </Canvas>
    </div>
  );
};

export default CanvasComponent;
