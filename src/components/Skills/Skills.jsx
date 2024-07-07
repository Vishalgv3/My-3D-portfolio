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

    // APPRAOCHE 1: FOLLOWING IN A CIRCLE
    // ----------------------- use Frame
    // useFrame((state, delta) => {
    //     // Calculate the position and rotation of the HTML element
    //     const htmlPosition = {
    //         x: Math.sin(state.clock.elapsedTime) * 2,
    //         z: Math.cos(state.clock.elapsedTime) * 2,
    //     };
    //     const htmlRotationY = Math.cos(state.clock.elapsedTime) * 0.5;

    //     // Apply the position and rotation to the HTML element
    //     htmlRef.current.position.x = htmlPosition.x;
    //     htmlRef.current.position.z = htmlPosition.z;
    //     htmlRef.current.rotation.y = htmlRotationY;

    //     // Apply the same position and rotation to the CSS element with a slight delay
    //     const delay = 0.5; // Adjust as needed
    //     const cssPosition = {
    //         x: htmlPosition.x - 1,
    //         z: htmlPosition.z,
    //     };
    //     const cssRotationY = htmlRotationY;

    //     // Apply the delayed position and rotation to the CSS element
    //     setTimeout(() => {
    //         cssRef.current.position.x = cssPosition.x;
    //         cssRef.current.position.z = cssPosition.z;
    //         cssRef.current.rotation.y = cssRotationY;
    //     }, delay * 1000); // Convert seconds to milliseconds
    // });

    // APPROACH 2: SPINNING IN PLACE
    // ----------------------- use Frame
    useFrame((state, delta) => {

    });

    return (
        <>
            <group scale={0.2} rotation={[0, -Math.PI / 2, 0]} position-y={-viewport.height * 3}>

                <group position={[0, -10, 0]}>
                    <Blender position={[0, 0, -10]} />
                    <Css position={[0, 0, -3.2]} />
                    <Html position={[0, 0, 3.5]} />
                    <Java position={[0, 0, 10.5]} />
                </group>
                <group position={[0, -5, 0]}>
                    <JavaScript position={[0, 0, -10]} />
                    <Laravel position={[0, 0, -3.2]} />
                    <Linux position={[0, 0, 3.5]} />
                    <MySQL position={[0, 0, 10.5]} />
                </group>
                <group position={[0, 0, 0]}>
                    <Networking position={[0, 0, -10]} />
                    <NextJS position={[0, 0, -3.2]} />
                    <PHP position={[0, 0, 3.5]} />
                    <Python position={[0, 0, 10.5]} />
                </group>
                <group position={[0, 5, 0]}>
                    <ReactJS position={[0, 0, -10]} />
                    <R3F position={[0, 0, -3.2]} />
                    <Tailwind position={[0, 0, 3.5]} />
                    <ThreeJS position={[0, 0, 10.5]} />
                </group>

            </group>
        </>
    )

}