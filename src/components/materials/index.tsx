import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import * as THREE from "three";
import Matcap from "./Matcap";
import MaterialGlassBlueBasic from "./MaterialGlassBlueBasic";

export const MaterialGlass = {
  red: () => {
    const matcap = useLoader(TextureLoader, "matcaps/glassWhite.jpg");
    return <Matcap matcap={matcap} color={"#ffcac9"} />;
  },
  white: () => {
    const matcap = useLoader(TextureLoader, "matcaps/glassWhite.jpg");
    return <Matcap matcap={matcap} color={"#FFF"} />;
  },
  blueLight: () => {
    return <MaterialGlassBlueBasic color={"#FFF"} />;
  },
  blue: () => {
    return <MaterialGlassBlueBasic color={"#cee0ff"} />;
  },
  blueDark: () => {
    return <MaterialGlassBlueBasic color={"#95bdff"} />;
  },
  green: () => {
    return <MaterialGlassBlueBasic color={"#b9ffe9"} />;
  },
};
// "#457CE5"
export const MaterialBlue = () => {
  const matcap = useLoader(TextureLoader, "matcaps/blue.jpg");
  return <Matcap matcap={matcap} color={"#b7daf0"} />;
};
// "#9AE3CC"
export const MaterialGreen = () => {
  const matcap = useLoader(TextureLoader, "matcaps/greenLight.jpg");
  return <Matcap matcap={matcap} />;
};

export const MaterialWhite = () => {
  const matcap = useLoader(TextureLoader, "matcaps/white.jpg");
  return <Matcap matcap={matcap} />;
};

export const MaterialYellow = () => {
  const matcap = useLoader(TextureLoader, "matcaps/yellow.jpg");
  return <Matcap matcap={matcap} />;
};
// "#FFABE4"
export const MaterialPink = () => {
  const matcap = useLoader(TextureLoader, "matcaps/pink.jpg");
  return <Matcap matcap={matcap} />;
};

export const MaterialRed = () => {
  const matcap = useLoader(TextureLoader, "matcaps/red.jpg");
  return <Matcap matcap={matcap} color={"#ffdad9"} />;
};

export const MaterialWater = () => {
  const matcap = useLoader(TextureLoader, "matcaps/water.jpg");
  return <Matcap matcap={matcap} color={"#d9e7ff"} />;
};
