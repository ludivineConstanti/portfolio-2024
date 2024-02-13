import React, { Suspense, useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import Stars from "./Stars";
import { Paris, Miyajima, Sintra } from ".";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const transitionSpeed = 0.1;

const PlanetsAndStars = () => {
  const [scrollPositionY, setScrollPositionY] = useState(0);

  useScrollPosition(({ _, currPos }) => {
    setScrollPositionY(currPos.y * -0.01);
  });

  const groupRef: null | { current: THREE.Mesh } = useRef();

  useFrame(() => {
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      scrollPositionY,
      transitionSpeed,
    );
  });

  return (
    <group ref={groupRef}>
      <Stars count={250} />
      <Suspense fallback={null}>
        <Sintra />
      </Suspense>
      <Suspense fallback={null}>
        <Paris />
      </Suspense>
      <Suspense fallback={null}>
        <Miyajima />
      </Suspense>
    </group>
  );
};

export default PlanetsAndStars;
