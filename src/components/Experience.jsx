import { OrbitControls, Sky, Environment, ContactShadows } from "@react-three/drei";
import { Vishal } from "./Avatars/Vishal";
import { ShreeRam } from "./Avatars/ShreeRam";
import { ShreeKrishna } from "./Avatars/ShreeKrishna";
import { SeanSir } from "./Avatars/SeanSir";
import { Papa } from "./Avatars/Papa";
import { Mumum } from "./Avatars/Mumum";
import { useControls } from "leva";

import { motion } from "framer-motion-3d";
import { useEffect } from "react";
import { animate, useMotionValue } from "framer-motion";
import { useFrame, useThree } from "@react-three/fiber";

import { framerMotionConfig } from "./config";

export const Experience = (props) => {

  const { section, menuOpened } = props;

  const { animation } = useControls({
    animation: {
      value: "IdleToSprint",
      options: ["IdleToSprint", "Flying", "FallingToRoll"],
    }
  });

  const { camera } = useThree();

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, { ...framerMotionConfig });
    animate(cameraLookAtX, menuOpened ? 5 : 0, { ...framerMotionConfig });

  }, [section, menuOpened, cameraPositionX, cameraLookAtX])

  useFrame((state) => {

    if (camera) {
      camera.position.x = cameraPositionX.get();
      camera.lookAt(cameraLookAtX.get(), 0, 0);
    }

  })

  return (
    <>
      <OrbitControls enableZoom={false} />
      <Sky />
      <Environment preset="sunset" />

      <group position-y={-1}>
        <ContactShadows opacity={0.42} scale={10} blur={1} far={10} resolution={256} color="#000000" />

        <Mumum position-x={-3} />
        <Papa position-x={-2} />

        <motion.group position-x={-1} rotateY={Math.PI / 2}
          animate={{
            rotateY: section === 0 ? 0 : Math.PI / 2,
          }}
        >
          <Vishal animation={animation} />
        </motion.group>


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
