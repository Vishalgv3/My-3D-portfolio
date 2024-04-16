import { OrbitControls, Sky, Environment, ContactShadows, useScroll, Scroll } from "@react-three/drei";
import { Vishal } from "./Avatars/Vishal";
import { ShreeRam } from "./Avatars/ShreeRam";
import { ShreeKrishna } from "./Avatars/ShreeKrishna";
import { SeanSir } from "./Avatars/SeanSir";
import { Papa } from "./Avatars/Papa";
import { Mumum } from "./Avatars/Mumum";
// import { Projects } from "./Other3D/Project";

import { motion } from "framer-motion-3d";
import { useEffect, useState } from "react";
import { animate, useMotionValue } from "framer-motion";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";

import { framerMotionConfig } from "../data/config";
import { Background } from "./Other3D/Background";
import { Projects } from "./Other3D/Project";

export const Experience = (props) => {

  const { menuOpened } = props;
  const data = useScroll();

  // ----------------------- State variables
  const [section, setSection] = useState(0);

  // ----------------------- Leva User Controls
  const { animation } = useControls({
    animation: {
      value: "IdleToSprint",
      options: ["IdleToSprint", "Flying", "FallingToRoll", "JumpOver"],
    }
  });

  // ----------------------- use Three
  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();


  // ----------------------- use Effect
  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, { ...framerMotionConfig });
    animate(cameraLookAtX, menuOpened ? 5 : 0, { ...framerMotionConfig });
  }, [menuOpened, cameraPositionX, cameraLookAtX])

  // ----------------------- use Frame
  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection < 0) curSection = 0;

    if (curSection == 2 || curSection == 3) {
      curSection = 1;
    } else if (curSection == 4) {
      curSection = 2;
    } else if (curSection >= 5) {
      curSection = 3;
    }

    if (curSection !== section) {
      setSection(curSection);
    }

    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  })

  return (
    <>
      <Background />

      <Scroll>

        <directionalLight intensity={1} position={[0, 5, 5]} />

        <group position-y={-1}>
          <ContactShadows opacity={0.42} scale={10} blur={1} far={10} resolution={256} color="#000000" />

          <Mumum position-x={-3} />
          <Papa position-x={-2} />

          <motion.group position-x={-1} rotateY={Math.PI / 2}
            // animate={{
            //   // rotateY: section === 0 ? 0 : Math.PI / 2,

            //   // make the avatar disappear when the menu is opened
            //   scale: menuOpened ? 0 : 1,

            //   // make the avatar emit red light when the menu is closed
            //   intensity: menuOpened ? 0 : 1,

            //   // make the avatar rotate when the menu is closed
            //   rotateY: menuOpened ? 0 : Math.PI / 4,
            // }}
            initial={{
              scale: 1,
              intensity: 0,
              rotateY: Math.PI / 4,
            }}
            animate={{
              scale: menuOpened ? 2 : 1,
              intensity: menuOpened ? 2 : 1,
              // rotateY: menuOpened ? 0 : Math.PI / 4,
            }}
            transition={{
              duration: 1,
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
          <Projects />
        </group>
      </Scroll>
    </>
  );
};
