import React from "react"
import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three/src/loaders/TextureLoader"
import Matcap from "./Matcap"

interface MaterialGlassBlueBasicProps {
  color: string
}

const MaterialGlassBlueBasic = ({ color }: MaterialGlassBlueBasicProps) => {
  const matcap = useLoader(TextureLoader, "matcaps/glassBlue.jpg")
  return <Matcap matcap={matcap} color={color} />
}

export default MaterialGlassBlueBasic
