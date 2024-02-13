import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

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
        <useMaterialWhite />
      </mesh>
      <mesh geometry={nodes.Sphere006_1.geometry}>
        <useMaterialWater />
      </mesh>
      <mesh geometry={nodes.Sphere006_2.geometry}>
        <useMaterialBlue />
      </mesh>
      <mesh geometry={nodes.Sphere006_3.geometry}>
        <useMaterialGreen />
      </mesh>
      <mesh geometry={nodes.Sphere006_4.geometry}>
        <useMaterialPink />
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
