import { useAnimations, useGLTF } from "@react-three/drei";
import skyScene from "../assets/3d/sky.glb";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Sky({ isRotating }) {
  const skyRef = useRef();
  const sky = useGLTF(skyScene);

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.15 * delta;
    }
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
}
