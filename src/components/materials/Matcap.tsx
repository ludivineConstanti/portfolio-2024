import React from "react"
import { Texture } from "three"

interface MatcapProps {
  matcap: Texture
  color?: string
}

export const Matcap = ({ matcap, color }: MatcapProps) => {
  return <meshMatcapMaterial matcap={matcap} color={color} flatShading={true} />
}

export default Matcap
