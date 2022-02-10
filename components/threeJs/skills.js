import { useLoader, useFrame } from "@react-three/fiber";
import React, { useRef } from 'react'

import { TextureLoader } from "three";
import * as THREE from "three";


export default function SkillsLoader({ skill }) {

    const mesh = useRef()
    const colorMap = useLoader(TextureLoader, `skills/${skill}.png`)
    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(4.5));
    
    useFrame(() => {
        mesh.current.rotation.x -= 0.02;
    });

    return (
        <>
            <ambientLight intensity={0.2} />
            <directionalLight />
            <mesh position={[x, y, z]} ref={mesh}>
                <boxGeometry args={[0.5, 0.5, 0.5]} />
                <meshStandardMaterial map={colorMap} />
            </mesh>
        </>
    )

}