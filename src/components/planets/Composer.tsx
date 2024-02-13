import { useEffect, useMemo } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { PixelShader } from "three/examples/jsm/shaders/PixelShader.js";
import * as THREE from "three";

interface ComposerProps {
  pixelSize: number;
}

const Composer = ({ pixelSize }: ComposerProps) => {
  const { gl, scene, camera, size } = useThree();

  const shaders = useMemo(() => {
    const pixel = new ShaderPass(PixelShader);
    pixel.uniforms["resolution"].value = new THREE.Vector2(
      size.width,
      size.height,
    );
    pixel.uniforms["resolution"].value.multiplyScalar(window.devicePixelRatio);
    pixel.uniforms["pixelSize"].value = 1;
    return {
      pixel,
    };
  }, []);

  const composer = useMemo(() => {
    const renderScene = new RenderPass(scene, camera);
    const comp = new EffectComposer(gl);
    comp.addPass(renderScene);
    comp.addPass(shaders.pixel);
    return comp;
  }, []);

  useEffect(() => {
    shaders.pixel.uniforms["pixelSize"].value = pixelSize;
  }, [pixelSize]);

  useEffect(() => {
    shaders.pixel.uniforms["resolution"].value = new THREE.Vector2(
      size.width,
      size.height,
    );
    shaders.pixel.uniforms["resolution"].value.multiplyScalar(
      window.devicePixelRatio,
    );
  }, [size]);

  return useFrame(() => {
    composer.render();
  }, 1);
};

export default Composer;
