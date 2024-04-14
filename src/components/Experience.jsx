import { OrbitControls, Sky, Environment, ContactShadows } from "@react-three/drei";
import { Vishal } from "./Avatars/Vishal";
import { ShreeRam } from "./Avatars/ShreeRam";
import { ShreeKrishna } from "./Avatars/ShreeKrishna";
import { SeanSir } from "./Avatars/SeanSir";
import { Papa } from "./Avatars/Papa";
import { Mumum } from "./Avatars/Mumum";
import { useControls } from "leva";

export const Experience = () => {

  const { animation } = useControls({
    animation: {
      value: "IdleToSprint",
      options: ["IdleToSprint", "Flying", "FallingToRoll"],
    }
  });

  return (
    <>
      <OrbitControls enableZoom={false} />
      <Sky />
      <Environment preset="sunset" />

      <group position-y={-1}>
        <ContactShadows opacity={0.42} scale={10} blur={1} far={10} resolution={256} color="#000000" />

        <Mumum position-x={-3} />
        <Papa position-x={-2} />
        <Vishal position-x={-1} animation={animation} />
        <ShreeRam />
        <SeanSir position-x={1} />
        <ShreeKrishna scale={0.06} position={[2.5, 0, -1.7]} />

        <mesh scale={8} rotation-x={-Math.PI / 2} position-y={-0.001} >
          <planeBufferGeometry />
          <meshBasicMaterial color="#cbcbcb" />
        </mesh>
      </group>
    </>
  );
};
