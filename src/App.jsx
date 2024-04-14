import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 10], far: 10000, fov: 30, near: 1 }}>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={4} damping={0.1}>
          <Experience />
          <Scroll html>
            <div className="text-8xl">
              Page 1
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
