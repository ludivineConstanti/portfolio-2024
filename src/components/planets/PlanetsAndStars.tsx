import React, { Suspense, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import Stars from "./Stars";
import { Paris, Miyajima, Sintra } from ".";
import { updateDelta } from "./constants";

const transitionSpeed = 0.1;

const PlanetsAndStars = ({ scrollPositionY }: { scrollPositionY: number }) => {
  const [groupRef, setGroupRef] = useState<THREE.Group | null>(null);

  useFrame(() => {
    if (groupRef) {
      // This is adjusted based on the frame rate of the website
      // It will stabilize the animation speed
      updateDelta();
      groupRef.position.y = THREE.MathUtils.lerp(
        groupRef.position.y,
        scrollPositionY * -0.01,
        transitionSpeed,
      );
    }
  });

  return (
    <group ref={(e) => setGroupRef(e)}>
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
