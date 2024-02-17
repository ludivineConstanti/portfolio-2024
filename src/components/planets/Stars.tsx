import * as THREE from "three";
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

import { MaterialGlass } from "../materials";
import { rotatePlanetOrStar } from "./constants";

// source => https://codesandbox.io/s/react-three-fiber-particles-ii-moio2?file=/src/index.js:0-9198

interface StarsProps {
  count: number;
}

const Stars = ({ count }: StarsProps) => {
  const mesh: React.MutableRefObject<any> = useRef();

  const dummy = useMemo(() => new THREE.Object3D(), []);
  // Generate some random positions, speed factors and timings
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);
  // The innards of this hook will run every frame
  useFrame(({ mouse }) => {
    // Run through the randomized data to calculate some movement
    particles.forEach((particle, i) => {
      let { t, speed, xFactor, yFactor, zFactor } = particle;
      // There is no sense or reason to any of this, just messing around with trigonometric functions
      t = particle.t += speed / 2;

      particle.mx += (mouse.x - particle.mx) * 0.01;
      particle.my += (mouse.y * -1 - particle.my) * 0.01;
      // Update the dummy object
      dummy.position.set(
        particle.mx / 10 + xFactor,
        particle.my / 10 + yFactor,
        particle.my / 10 + zFactor,
      );

      const rotation = Math.cos(t) * 0.001;
      rotatePlanetOrStar(dummy, { x: 0.00005, y: rotation, z: 0.00005 });

      dummy.updateMatrix();
      // And apply the matrix to the instanced item
      mesh.current.setMatrixAt(i, dummy.matrix);
    });

    mesh.current.instanceMatrix.needsUpdate = true;
  });
  return (
    <>
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <dodecahedronBufferGeometry attach="geometry" args={[0.25, 0]} />
        <MaterialGlass.White />
      </instancedMesh>
    </>
  );
};

export default Stars;
