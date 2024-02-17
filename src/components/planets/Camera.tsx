import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { delta } from "./constants";

const transitionSpeed = 0.1;

const Camera = () => {
  const speed = transitionSpeed * delta;
  return useFrame(({ mouse, camera }) => {
    const cameraX = THREE.MathUtils.lerp(camera.position.x, mouse.x * 4, speed);
    const cameraY = THREE.MathUtils.lerp(camera.position.y, mouse.y * 4, speed);

    const cameraZ = camera.position.z;

    camera.position.set(cameraX, cameraY, cameraZ);
  });
};

export default Camera;
