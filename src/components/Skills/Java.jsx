/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Java(props) {
    const { nodes, materials } = useGLTF('3D/models/skills/java.glb')
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
                position={[1.02, 0.797, 0.59]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.806}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.java.geometry}
                material={materials.java}
                position={[1.006, 2.953, 0]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={2.646}
            />
        </group>
    )
}

useGLTF.preload('3D/models/skills/java.glb')