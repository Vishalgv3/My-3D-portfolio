import { Html } from './Html';
import { Css } from './Css';
import { JavaScript } from './JavaScript';
import { ReactJS } from './ReactJS';
import { NextJS } from './NextJS';
import { Tailwind } from './Tailwind';
import { Laravel } from './Laravel';
import { PHP } from './PHP';
import { Python } from './Python';
import { Java } from './Java';
import { MySQL } from './MySQL';
import { Networking } from './Networking';
import { Linux } from './Linux';
import { Blender } from './Blender';
import { ThreeJS } from './ThreeJS';
import { R3F } from './R3F';

import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';

export const Skills = (props) => {

    // ----------------------- use Three
    const { viewport } = useThree();

    // ----------------------- use Ref
    const htmlRef = useRef();
    const cssRef = useRef();
    const blenderRef = useRef();
    const javaRef = useRef();
    const javaScriptRef = useRef();
    const pythonRef = useRef();
    const phpRef = useRef();
    const networkingRef = useRef();
    const linuxRef = useRef();
    const mysqlRef = useRef();
    const reactRef = useRef();
    const nextRef = useRef();
    const tailwindRef = useRef();
    const laravelRef = useRef();
    const threeRef = useRef();
    const r3fRef = useRef();


    // APPRAOCHE 1: FOLLOWING IN A CIRCLE
    let angle = 0;
    let skillsRefs = [htmlRef, cssRef, blenderRef, javaRef, javaScriptRef, pythonRef, phpRef, networkingRef, linuxRef, mysqlRef, reactRef, nextRef, tailwindRef, laravelRef, threeRef, r3fRef];

    // ----------------------- use Frame
    useFrame((state, delta) => {
        // Calculate the position and rotation based on the elapsed time        
        let positionX = Math.sin(angle) * 20;
        let positionZ = Math.cos(angle) * 15;
        let rotationY = Math.cos(angle) * 1;
        let scale = Math.sin(angle) * 0.2 + 0.6;
        let delay = 1.3;

        skillsRefs.forEach((ref, index) => {
            setTimeout(() => {
                ref.current.position.x = positionX;
                ref.current.position.z = positionZ;
                ref.current.rotation.y = rotationY;
                ref.current.scale.set(scale, scale, scale);

            }, delay * index * 1000); // Convert seconds to milliseconds
        });
        // Increase the angle
        angle += 0.005;
    });

    return (
        <>
            <group scale={0.2} rotation={[0, -Math.PI / 2, 0]} position-y={-viewport.height * 3.1}>
                <group ref={htmlRef}>
                    <Html />
                </group>
                <group ref={cssRef}>
                    <Css />
                </group>
                <group ref={blenderRef}>
                    <Blender />
                </group>
                <group ref={javaRef}>
                    <Java />
                </group>
                <group ref={javaScriptRef}>
                    <JavaScript />
                </group>
                <group ref={laravelRef}>
                    <Laravel />
                </group>
                <group ref={linuxRef}>
                    <Linux />
                </group>
                <group ref={mysqlRef}>
                    <MySQL />
                </group>
                <group ref={networkingRef}>
                    <Networking />
                </group>
                <group ref={nextRef}>
                    <NextJS />
                </group>
                <group ref={phpRef}>
                    <PHP />
                </group>
                <group ref={pythonRef}>
                    <Python />
                </group>
                <group ref={reactRef}>
                    <ReactJS />
                </group>
                <group ref={r3fRef}>
                    <R3F />
                </group>
                <group ref={threeRef}>
                    <ThreeJS />
                </group>
                <group ref={tailwindRef}>
                    <Tailwind />
                </group>
            </group >
        </>
    )

}