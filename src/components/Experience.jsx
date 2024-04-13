import { OrbitControls } from "@react-three/drei";
import { Vishal } from "./Avatars/Vishal";
import { ShreeRam } from "./Avatars/ShreeRam";
import { ShreeKrishna } from "./Avatars/ShreeKrishna";
import { SeanSir } from "./Avatars/SeanSir";
import { Papa } from "./Avatars/Papa";
import { Mumum } from "./Avatars/Mumum";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <group>
        <Mumum position={[-3, -1, 0]} />
        <Papa position={[-2, -1, 0]} />
        <Vishal position={[-1, -1, 0]} />
        <ShreeRam position={[0, -1, 0]} />
        <SeanSir position={[1, -1, 0]} />
        <ShreeKrishna scale={0.06} position={[2, -1, -1.3]} />
      </group>
      <ambientLight intensity={1} />
    </>
  );
};
