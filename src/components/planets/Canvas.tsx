import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { NoToneMapping } from "three";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import Composer from "./Composer";
import PlanetsAndStars from "./PlanetsAndStars";
import Camera from "./Camera";
import { useResizeObserver } from "@/hooks";

const CanvasComponent = () => {
  const [scrollPositionY, setScrollPositionY] = useState(0);
  const [width, setWidth] = useState(0);

  useScrollPosition(({ currPos }) => {
    setScrollPositionY(currPos.y);
  });

  const ref = React.useRef<HTMLDivElement>(null);

  useResizeObserver(ref.current, ({ clientWidth }) => {
    setWidth(window ? window.innerWidth : clientWidth);
  });

  return (
    <div className="fixed top-0 h-full w-full" ref={ref}>
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
        <PlanetsAndStars scrollPositionY={scrollPositionY} width={width} />
      </Canvas>
    </div>
  );
};

export default CanvasComponent;
