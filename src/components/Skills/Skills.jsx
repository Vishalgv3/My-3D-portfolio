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
    // ----------------------- use Frame
    useFrame((state, delta) => {
        // Calculate the position and rotation based on the elapsed time        
        let positionX = Math.sin(state.clock.elapsedTime) * 10;
        let positionZ = Math.cos(state.clock.elapsedTime) * 20;
        let rotationY = Math.cos(state.clock.elapsedTime) * 1;
        let delay = 0.39;

        // Apply the position and rotation to the HTML element
        htmlRef.current.position.x = positionX;
        htmlRef.current.position.z = positionZ;
        htmlRef.current.rotation.y = rotationY;

        // Apply the same position and rotation to the CSS element with a slight delay
        setTimeout(() => {
            cssRef.current.position.x = positionX;
            cssRef.current.position.z = positionZ;
            cssRef.current.rotation.y = rotationY;
        }, delay * 1000); // Convert seconds to milliseconds

        // Apply the same position and rotation to the Blender element with a slight delay
        setTimeout(() => {
            blenderRef.current.position.x = positionX;
            blenderRef.current.position.z = positionZ;
            blenderRef.current.rotation.y = rotationY;
        }, delay * 2000); // Convert seconds to milliseconds

        // Apply the same position and rotation to the Java element with a slight delay
        setTimeout(() => {
            javaRef.current.position.x = positionX;
            javaRef.current.position.z = positionZ;
            javaRef.current.rotation.y = rotationY;
        }, delay * 3000); // Convert seconds to milliseconds

        // Apply the same position and rotation to the JavaScript element with a slight delay
        setTimeout(() => {
            javaScriptRef.current.position.x = positionX;
            javaScriptRef.current.position.z = positionZ;
            javaScriptRef.current.rotation.y = rotationY;
        }, delay * 4000); // Convert seconds to milliseconds

        // Apply the same position and rotation to the Laravel element with a slight delay
        setTimeout(() => {
            laravelRef.current.position.x = positionX;
            laravelRef.current.position.z = positionZ;
            laravelRef.current.rotation.y = rotationY;
        }, delay * 5000); // Convert seconds to milliseconds

        // Apply the same position and rotation to the Linux element with a slight delay
        setTimeout(() => {
            linuxRef.current.position.x = positionX;
            linuxRef.current.position.z = positionZ;
            linuxRef.current.rotation.y = rotationY;
        }, delay * 6000); // Convert seconds to milliseconds

        // Apply the same position and rotation to the MySQL element with a slight delay
        setTimeout(() => {
            mysqlRef.current.position.x = positionX;
            mysqlRef.current.position.z = positionZ;
            mysqlRef.current.rotation.y = rotationY;
        }, delay * 7000); // Convert seconds to milliseconds

        // Apply the same position and rotation to the Networking element with a slight delay
        setTimeout(() => {
            networkingRef.current.position.x = positionX;
            networkingRef.current.position.z = positionZ;
            networkingRef.current.rotation.y = rotationY;
        }, delay * 8000); // Convert seconds to milliseconds

        // Apply the same position and rotation to the NextJS element with a slight delay
        setTimeout(() => {
            nextRef.current.position.x = positionX;
            nextRef.current.position.z = positionZ;
            nextRef.current.rotation.y = rotationY;
        }, delay * 9000); // Convert seconds to milliseconds

        // Apply the same position and rotation to the PHP element with a slight delay
        setTimeout(() => {
            phpRef.current.position.x = positionX;
            phpRef.current.position.z = positionZ;
            phpRef.current.rotation.y = rotationY;
        }, delay * 10000); // Convert seconds to milliseconds

        // Apply the same position and rotation to the Python element with a slight delay
        setTimeout(() => {
            pythonRef.current.position.x = positionX;
            pythonRef.current.position.z = positionZ;
            pythonRef.current.rotation.y = rotationY;
        }, delay * 11000); // Convert seconds to milliseconds

        // Apply the same position and rotation to the ReactJS element with a slight delay
        setTimeout(() => {
            reactRef.current.position.x = positionX;
            reactRef.current.position.z = positionZ;
            reactRef.current.rotation.y = rotationY;
        }, delay * 12000); // Convert seconds to milliseconds

        // Apply the same position and rotation to the R3F element with a slight delay
        setTimeout(() => {
            r3fRef.current.position.x = positionX;
            r3fRef.current.position.z = positionZ;
            r3fRef.current.rotation.y = rotationY;
        }, delay * 13000); // Convert seconds to milliseconds

        // Apply the same position and rotation to the ThreeJS element with a slight delay
        setTimeout(() => {
            threeRef.current.position.x = positionX;
            threeRef.current.position.z = positionZ;
            threeRef.current.rotation.y = rotationY;
        }, delay * 14000); // Convert seconds to milliseconds

        // Apply the same position and rotation to the Tailwind element with a slight delay
        setTimeout(() => {
            tailwindRef.current.position.x = positionX;
            tailwindRef.current.position.z = positionZ;
            tailwindRef.current.rotation.y = rotationY;
        }, delay * 15000); // Convert seconds to milliseconds
    });

    return (
        <>
            <group scale={0.2} rotation={[0, -Math.PI / 2, 0]} position-y={-viewport.height * 3 - 3}>
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