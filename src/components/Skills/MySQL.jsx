/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function MySQL(props) {
    const { nodes, materials } = useGLTF('3D/models/skills/mysql.glb')
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
                position={[1.02, 0.797, 1.527]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.sql.geometry}
                material={materials.sql}
                position={[1.005, 2.983, 0]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={[1.478, 2.376, 2.376]}
            />
        </group>
    )
}

useGLTF.preload('3D/models/skills/mysql.glb')