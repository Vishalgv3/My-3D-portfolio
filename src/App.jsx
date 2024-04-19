import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { Suspense, useEffect, useState } from "react";
import { ScrollManager } from "./components/UI/ScrollManager";
import { Menu } from "./components/UI/Menu";
import { MotionConfig } from "framer-motion";

import { framerMotionConfig } from "./data/config";
import { Cursor } from "./components/UI/Cursor";
import { LoadingOverlay } from "./components/UI/LoadingOverlay";
import { DialogBox } from "./components/UI/DialogBox";

function App() {

  // ------------- state variables
  const [started, setStarted] = useState(false);
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [teacherClicked, setTeacherClicked] = useState(false);
  const [teacher, setTeacher] = useState("");

  // ------------- use Effect
  useEffect(() => {
    setMenuOpened(false);
  }, [section, started])

  return (
    <>
      <LoadingOverlay started={started} setStarted={setStarted} />

      <DialogBox teacherClicked={teacherClicked} setTeacherClicked={setTeacherClicked} teacher={teacher} />

      <MotionConfig transition={{ ...framerMotionConfig }}>
        <Canvas shadows camera={{ position: [0, 0, 10], fov: 42 }}>
          <color attach="background" args={["#ececec"]} />
          <ScrollControls pages={6} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Suspense>
              <Experience section={section} menuOpened={menuOpened} setTeacherClicked={setTeacherClicked} setTeacher={setTeacher} />
            </Suspense>
            <Scroll html>
              {started && <Interface started={started} setSection={setSection} />}
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
