import { OrbitControls, Sky, Environment, ContactShadows, useScroll, Scroll } from "@react-three/drei";
import { Vishal } from "./Avatars/Vishal";
import { ShreeRam } from "./Avatars/ShreeRam";
import { ShreeKrishna } from "./Avatars/ShreeKrishna";
import { SeanSir } from "./Avatars/SeanSir";
import { Papa } from "./Avatars/Papa";
import { Mumum } from "./Avatars/Mumum";
import { Background } from "./Other3D/Background";
import { Projects } from "./Other3D/Project";
import { Skills } from "./Skills/Skills";

import { motion } from "framer-motion-3d";
import { useEffect, useRef, useState } from "react";
import { MotionConfig, animate, useMotionValue } from "framer-motion";
import { useFrame, useThree } from "@react-three/fiber";
import { DoubleSide } from "three";

import { framerMotionConfig } from "../data/config";

export const Experience = (props) => {

  const { menuOpened, setTeacherClicked, setTeacher } = props;
  const data = useScroll();

  // ----------------------- use Three
  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();
  const { viewport } = useThree();
  const isMobile = window.innerWidth < 768;
  const responsiveRatio = viewport.width / 12;

  console.log(viewport);
  console.log(`width: ${viewport.width} <<<>>> height: ${viewport.height}`);

  // ----------------------- use Ref
  const parentsMaterialRef = useRef();
  const shreeRamMaterialRef = useRef();
  const seanSirMaterialRef = useRef();
  const shreeKrishnaMaterialRef = useRef();

  // --------------------------------- State variables
  const [section, setSection] = useState(0);
  const [actualSection, setActualSection] = useState(0);
  const [characterAnimation, setCharacterAnimation] = useState("Kneeling");
  const [vishalPositionX, setVishalPositionX] = useState(0);
  const [vishalPositionY, setVishalPositionY] = useState(0);
  const [vishalPositionZ, setVishalPositionZ] = useState(0);

  // ----------------------- use Effect
  useEffect(() => {

    actualSection < 5.5 && setCharacterAnimation("FallDown");

    let x = 0;
    let y = 0;
    let z = 0;
    let animation;

    // ----------------------- set position based on switch case
    switch (actualSection) {
      case 0:
        x = isMobile ? 0 : 3;
        y = isMobile ? -viewport.height / 5 : -2;
        z = 2;
        animation = "LeanThinking";
        break;
      case 1:
        x = isMobile ? 1.5 : 4;
        y = isMobile ? -viewport.height / 0.8 : -viewport.height * 1 - 1.46;
        z = 0;
        animation = "LeanStand";
        break;
      case 2:
        x = isMobile ? -1.4 : -3;
        y = -viewport.height * 2 - 0.98;
        z = isMobile ? 1.5 : 3;
        animation = "Kneeling";
        break;
      case 3:
        x = 0;
        y = -viewport.height * 2.6 - (isMobile ? 0 : 1);
        z = 0;
        animation = "Laying";
        break;
      case 4:
        x = isMobile ? 0 : -5;
        y = -viewport.height * 4 - (isMobile ? -2 : 0);
        z = isMobile ? 0 : -2;
        animation = "FallStraight";
        break;
      default:
        x = isMobile ? 1 : 3;
        y = -viewport.height * 5 - (isMobile ? 2.3 : 2);
        z = 0;
        animation = "SitStraight";
    }


    // ----------------------- set character animation
    setTimeout(() => {
      setCharacterAnimation(animation);
    }, 600);

    // ----------------------- set character position
    setVishalPositionX(x);
    setVishalPositionY(y);
    setVishalPositionZ(z);
  }, [actualSection]);

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, { ...framerMotionConfig });
    animate(cameraLookAtX, menuOpened ? 5 : 0, { ...framerMotionConfig });
  }, [menuOpened, cameraPositionX, cameraLookAtX])

  // ----------------------- use Frame
  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);
    setActualSection(curSection);

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

  // --------------------------------- event handlers
  const onParentsClicked = (e) => {
    e.stopPropagation();
    setTeacher("My Parents");
    setTeacherClicked(true);
  }

  const onShreeRamClicked = (e) => {
    e.stopPropagation();
    setTeacher("Shree Ram");
    setTeacherClicked(true);
  }

  const onSeanSirClicked = (e) => {
    e.stopPropagation();
    setTeacher("Sir Sean Morrow");
    setTeacherClicked(true);
  }

  const onShreeKrishnaClicked = (e) => {
    e.stopPropagation();
    setTeacher("Shree Krishna");
    setTeacherClicked(true);
  }

  return (
    <>
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        <Background />

        <group>
          <directionalLight intensity={0.5} position={[-30, 5, 5]} />
          <directionalLight intensity={1} position={[15, 2, 5]} />
          <directionalLight intensity={0.5} position={[-18, 2, 5]} />
        </group>

        <Scroll>

          <motion.group
            initial={{
              scale: 2,
            }}
            animate={{
              x: vishalPositionX,
              y: vishalPositionY,
              z: vishalPositionZ,
              scale: actualSection === 2 ? (isMobile ? 0.2 : 0.5) : (isMobile ? 1 : 2),
              rotateY: actualSection === 2 ? 3 : 0,
              rotateX: 0,
              rotateZ: actualSection === 3 ? -0.1 : 0,
            }}
            transition={{
              duration: 1,
            }}
          >
            <Vishal animation={characterAnimation} />
          </motion.group>

          {/* HOME page's box and plane */}
          <group visible={isMobile ? false : true} position-y={-2.3} position={[0, -2.3, 1.5]} >
            <mesh scale={[0.8, 0.88, 0.8]} position={[2.2, 0.7, 1.3]} rotation-y={-0.3} >
              <boxGeometry />
              <meshToonMaterial color="#373c4b" />
            </mesh>
            <mesh scale={5} rotation={[-Math.PI / 2, 0, -0.2]} position-x={3} position-y={0.25} >
              <planeGeometry />
              <meshToonMaterial side={DoubleSide} color="#ffffff" />
            </mesh>
          </group>

          {/* ABOUT ME section's box and plane */}
          <group visible={isMobile ? false : true} position-y={-viewport.height * 1 - 1.5}>
            <mesh scale={[0.8, 0.85, 0.8]} position={[3.2, 0.43, 0.5]} rotation-y={-0.3} >
              <boxGeometry />
              <meshToonMaterial color="#373c4b" />
            </mesh>
            <mesh scale={5} rotation={[-Math.PI / 2, 0, -0.2]} position-x={3} >
              <planeGeometry />
              <meshToonMaterial side={DoubleSide} color="#ffffff" />
            </mesh>
          </group>

          {/* SOME TEACHERS OF MY LIFE section */}
          <group scale={isMobile ? 0.5 : 1} position-y={-viewport.height * 2 - 1}>
            {/* <ContactShadows opacity={0.42} scale={10} blur={1} far={10} resolution={256} color="#000000" /> */}

            <group>
              <mesh scale={[0.85, 1.5, 0.8]} position={[-2.3, 0.8, 0]}
                onPointerEnter={(e) => parentsMaterialRef.current.opacity = 0.2}
                onPointerLeave={(e) => parentsMaterialRef.current.opacity = 0}
                onClick={onParentsClicked}>
                <sphereGeometry />
                <meshToonMaterial ref={parentsMaterialRef} transparent={true} color="#e3ba36" opacity={0} />
              </mesh>

              <Papa position-x={-2.6} />
              <Mumum position-x={-2} />
            </group>

            <group>
              <mesh scale={[0.7, 1.5, 1]} position={[-0.5, 0.8, 0.5]}
                onPointerEnter={(e) => shreeRamMaterialRef.current.opacity = 0.2}
                onPointerLeave={(e) => shreeRamMaterialRef.current.opacity = 0}
                onClick={onShreeRamClicked}>
                <sphereGeometry />
                <meshToonMaterial ref={shreeRamMaterialRef} transparent={true} color="#e3ba36" opacity={0} />
              </mesh>
              <ShreeRam position-y={0.05} position-x={-0.5} />
            </group>

            <group>
              <mesh scale={[0.7, 1.5, 1]} position={[1, 0.8, 0.3]}
                onPointerEnter={(e) => seanSirMaterialRef.current.opacity = 0.2}
                onPointerLeave={(e) => seanSirMaterialRef.current.opacity = 0}
                onClick={onSeanSirClicked}>
                <sphereGeometry />
                <meshToonMaterial ref={seanSirMaterialRef} transparent={true} color="#e3ba36" opacity={0} />
              </mesh>
              <SeanSir position-x={1} />
            </group>

            <group>
              <mesh scale={[0.7, 1.5, 1]} position={[2.4, 0.8, 0]}
                onPointerEnter={(e) => shreeKrishnaMaterialRef.current.opacity = 0.2}
                onPointerLeave={(e) => shreeKrishnaMaterialRef.current.opacity = 0}
                onClick={onShreeKrishnaClicked}>
                <sphereGeometry />
                <meshToonMaterial ref={shreeKrishnaMaterialRef} transparent={true} color="#e3ba36" opacity={0} />
              </mesh>
              <ShreeKrishna scale={0.06} position-x={2.5} rotation={[0, -Math.PI / 2, 0]} />
            </group>

            <mesh scale={8} rotation-x={-Math.PI / 2} position-y={-0.001} >
              <planeGeometry />
              <meshToonMaterial side={DoubleSide} color="#cbcbcb" />
            </mesh>
          </group>

          {/* SKILLS section*/}
          <group position-x={0}>
            <Skills isMobile={isMobile} />

          </group>

          {/* PROJECTS section */}
          <Projects />

          {/* CONTACT ME section's box and plane */}
          <group scale={isMobile ? 0.5 : 1} position={isMobile ? -0.5 : 0} position-y={-viewport.height * 5 - (isMobile ? 2.7 : 2.5)}>
            <mesh scale={[3, 2, 2]} position={[3.3, 0.5, -1]} rotation-y={-0.3} >
              <boxGeometry />
              <meshToonMaterial color="#373c4b" />
            </mesh>
            <mesh scale={5} rotation={[-Math.PI / 2, 0, -0.2]} position-x={3} >
              <planeGeometry />
              <meshToonMaterial side={DoubleSide} color="#ffffff" />
            </mesh>
          </group>
        </Scroll >
      </MotionConfig >
    </>
  );
};
