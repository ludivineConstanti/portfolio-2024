import * as THREE from "three";
export const speed = 5000;
export let delta = 100 / speed;

export let then = Date.now();

export const updateDelta = () => {
  delta = (Date.now() - then) / speed;
  then = Date.now();
};

export const rotatePlanetOrStar = (
  ref: THREE.Group | THREE.Object3D | null,
  { x, y, z }: { x: number; y: number; z: number },
  customSpeed?: number,
) => {
  let currentSpeed = customSpeed || 75;
  if (ref) {
    ref.rotation.x = THREE.MathUtils.lerp(
      ref.rotation.x,
      ref.rotation.x + x,
      currentSpeed * delta,
    );
    ref.rotation.y = THREE.MathUtils.lerp(
      ref.rotation.y,
      ref.rotation.y + y,
      currentSpeed * delta,
    );
    ref.rotation.z = THREE.MathUtils.lerp(
      ref.rotation.z,
      ref.rotation.z + z,
      currentSpeed * delta,
    );
  }
};
