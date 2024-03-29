/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import {
  MaterialBlue,
  MaterialGlass,
  MaterialYellow,
  MaterialGreen,
  MaterialRed,
  MaterialWater,
  MaterialWhite,
} from "../materials";
import { rotatePlanetOrStar } from "./constants";
import { breakpoints } from "@/models";
import { useAppSelector } from "@/store";

const Sintra = () => {
  const { nodes } = useGLTF("/planets/sintra.gltf") as unknown as {
    nodes: {
      glassDarkBlue: THREE.Mesh;
      glassRed: THREE.Mesh;
      blue: THREE.Mesh;
      water: THREE.Mesh;
      glassGreen: THREE.Mesh;
      yellow: THREE.Mesh;
      glassWhite: THREE.Mesh;
      white: THREE.Mesh;
      green: THREE.Mesh;
      red: THREE.Mesh;
    };
  };

  const [ref, setRef] = useState<THREE.Group | null>(null);

  useFrame(() => {
    rotatePlanetOrStar(ref, {
      x: 0.0005,
      y: 0.002,
      z: 0.0005,
    });
  });

  const { width } = useAppSelector((state) => state.system);
  return (
    <group dispose={null}>
      <group
        position={width >= breakpoints.sm ? [-45, -40, -45] : [-20, -45, -80]}
        scale={12}
        ref={(e) => setRef(e)}
      >
        <mesh geometry={nodes.glassDarkBlue.geometry}>
          <MaterialGlass.BlueDark />
        </mesh>
        <mesh geometry={nodes.glassRed.geometry}>
          <MaterialGlass.Red />
        </mesh>
        <mesh geometry={nodes.blue.geometry}>
          <MaterialBlue />
        </mesh>
        <mesh geometry={nodes.water.geometry}>
          <MaterialWater />
        </mesh>
        <mesh geometry={nodes.glassGreen.geometry}>
          <MaterialGlass.Green />
        </mesh>
        <mesh geometry={nodes.yellow.geometry}>
          <MaterialYellow />
        </mesh>
        <mesh geometry={nodes.glassWhite.geometry}>
          <MaterialGlass.White />
        </mesh>
        <mesh geometry={nodes.white.geometry}>
          <MaterialWhite />
        </mesh>
        <mesh geometry={nodes.green.geometry}>
          <MaterialGreen />
        </mesh>
        <mesh geometry={nodes.red.geometry}>
          <MaterialRed />
        </mesh>
      </group>
    </group>
  );
};

export default Sintra;
