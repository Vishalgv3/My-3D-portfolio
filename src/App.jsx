import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { useEffect, useState } from "react";
import { ScrollManager } from "./components/ScrollManager";
import { Menu } from "./components/Menu";
import { MotionConfig } from "framer-motion";

import { framerMotionConfig } from "./components/config";
import { Cursor } from "./components/Cursor";

function App() {

  // ------------- state variables
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  // ------------- use Effect
  useEffect(() => {
    setMenuOpened(false);
  }, [section])

  return (
    <>
      <MotionConfig transition={{ ...framerMotionConfig }}>
        <Canvas shadows camera={{ position: [0, 0, 10], fov: 42 }}>
          <color attach="background" args={["#ececec"]} />
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            {/* <Scroll> */}
            <Experience section={section} menuOpened={menuOpened} />
            {/* </Scroll> */}
            <Scroll html>
              <Interface setSection={setSection} />
            </Scroll>
          </ScrollControls>
        </Canvas >
        <Menu onSectionChange={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
      </MotionConfig >
      <Cursor />
    </>
  );
}

export default App;
