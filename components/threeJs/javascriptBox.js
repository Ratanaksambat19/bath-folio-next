import React, { useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

export default function JavascriptSkill() {
    const colorMap = useLoader(TextureLoader, 'skills/atom.png')
    return (
        <>
            <ambientLight intensity={0.2} />
            <directionalLight />
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial map={colorMap} />
            </mesh>
        </>
    )
}


