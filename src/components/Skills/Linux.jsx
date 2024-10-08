/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Linux(props) {
    const { nodes, materials } = useGLTF('3D/models/skills/linux.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={materials['Material.001']}
                position={[0, 2.507, 0]}
                scale={[1, 2.203, 3.92]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Text.geometry}
                material={materials['Material.002']}
                position={[1.02, 0.797, 1.141]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.linux.geometry}
                material={materials.linux}
                position={[1.009, 2.858, 0]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={[2.907, 2.907, 2.334]}
            />
        </group>
    )
}

useGLTF.preload('3D/models/skills/linux.glb')