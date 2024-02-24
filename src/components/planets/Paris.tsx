import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import {
  MaterialGlass,
  MaterialWhite,
  MaterialWater,
  MaterialBlue,
  MaterialGreen,
  MaterialPink,
} from "../materials";
import { rotatePlanetOrStar } from "./constants";
import { breakpoints } from "@/models";
import { useAppSelector } from "@/store";

const Paris = () => {
  const { nodes } = useGLTF("/planets/paris.gltf") as unknown as {
    nodes: {
      Sphere006: THREE.Mesh;
      Sphere006_1: THREE.Mesh;
      Sphere006_2: THREE.Mesh;
      Sphere006_3: THREE.Mesh;
      Sphere006_4: THREE.Mesh;
      Sphere006_5: THREE.Mesh;
      Sphere006_6: THREE.Mesh;
      Sphere006_7: THREE.Mesh;
      Sphere006_8: THREE.Mesh;
    };
  };
  const [ref, setRef] = useState<THREE.Group | null>(null);
  useFrame(() => {
    rotatePlanetOrStar(ref, {
      x: 0.001,
      y: 0.002,
      z: 0.003,
    });
  });
  const { width } = useAppSelector((state) => state.system);

  return (
    <group
      ref={(e) => setRef(e)}
      scale={12}
      position={width >= breakpoints.sm ? [-17.7, 0, -30] : [2.5, -5, -50]}
    >
      <mesh geometry={nodes.Sphere006.geometry}>
        <MaterialWhite />
      </mesh>
      <mesh geometry={nodes.Sphere006_1.geometry}>
        <MaterialWater />
      </mesh>
      <mesh geometry={nodes.Sphere006_2.geometry}>
        <MaterialBlue />
      </mesh>
      <mesh geometry={nodes.Sphere006_3.geometry}>
        <MaterialGreen />
      </mesh>
      <mesh geometry={nodes.Sphere006_4.geometry}>
        <MaterialPink />
      </mesh>
      <mesh geometry={nodes.Sphere006_5.geometry}>
        <MaterialGlass.BlueLight />
      </mesh>
      <mesh geometry={nodes.Sphere006_6.geometry}>
        <MaterialGlass.White />
      </mesh>
      <mesh geometry={nodes.Sphere006_7.geometry}>
        <MaterialGlass.BlueDark />
      </mesh>
      <mesh geometry={nodes.Sphere006_8.geometry}>
        <MaterialGlass.Blue />
      </mesh>
    </group>
  );
};

export default Paris;
