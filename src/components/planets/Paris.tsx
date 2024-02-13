import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import {
  MaterialBlue,
  MaterialGlass,
  MaterialGreen,
  MaterialPink,
  MaterialWater,
  MaterialWhite,
} from "../materials";

const Paris = () => {
  const { nodes } = useGLTF("/planets/paris.gltf");

  const ref = useRef();

  useFrame(() => {
    if (ref) {
      const x = ref.current.rotation.x + 0.001;
      const y = ref.current.rotation.y + 0.002;
      const z = ref.current.rotation.z + 0.003;
      ref.current.rotation.set(x, y, z);
    }
  });

  return (
    <group ref={ref} scale={12} position={[-17.7, 0, -30]}>
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
        <MaterialGlass.blueLight />
      </mesh>
      <mesh geometry={nodes.Sphere006_6.geometry}>
        <MaterialGlass.white />
      </mesh>
      <mesh geometry={nodes.Sphere006_7.geometry}>
        <MaterialGlass.blueDark />
      </mesh>
      <mesh geometry={nodes.Sphere006_8.geometry}>
        <MaterialGlass.blue />
      </mesh>
    </group>
  );
};

export default Paris;
