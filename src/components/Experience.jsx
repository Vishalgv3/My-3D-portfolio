import { OrbitControls } from "@react-three/drei";
import { Vishal } from "./Avatars/Vishal";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Vishal />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};
