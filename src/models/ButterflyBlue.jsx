/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Erina eka syaharani (https://sketchfab.com/erinaekasyaharani)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/blue-butterfly-4fe9c2835522458a822b5b784a680de4
Title: blue butterfly
*/

import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import butterflyScene from "../components/assets/3d/butterfly.glb";

const ButterlyBlue = ({ ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(butterflyScene);

  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    actions["Take 01"].play();
    return () => {
      actions["Take 01"].stop();
    };
  }, [actions]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() / 2;
    // Define the flight path here, for example a circular path
    const x = Math.sin(time) * -2;
    const y = Math.cos(time) * -1;
    const z = Math.sin(time) * Math.cos(time);

    // Update position
    ref.current.position.set(x, y, z);

    // Update rotation to face the direction of movement
    // Assuming the butterfly faces along the positive Y-axis by default
    ref.current.rotation.y = Math.atan2(x, y);

    // Add some scale changes for more natural movement
    ref.current.scale.set(
      1 + Math.sin(time) * 0.1,
      1 + Math.cos(time) * 0.1,
      1
    );
  });

  return (
    <mesh {...props} position={[-1, -1, -5]} scale={[1, 1, 1]} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default ButterlyBlue;
