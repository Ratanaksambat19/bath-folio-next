import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from "@react-three/drei"

export default function Cactus() {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    const props = useTexture({
        map: 'PavingStones092_1K_Color.jpg',
        displacementMap: 'PavingStones092_1K_Displacement.jpg',
        normalMap: 'PavingStones092_1K_Normal.jpg',
        roughnessMap: 'PavingStones092_1K_Roughness.jpg',
        aoMap: 'PavingStones092_1K_AmbientOcclusion.jpg',
    })
    
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => (mesh.current.rotation.x += 0.01))

    return (
        <mesh
            // {...props}
            // ref={mesh}
            // scale={active ? 1.5 : 1}
            // onClick={(event) => setActive(!active)}
            // onPointerOver={(event) => setHover(true)}
            // onPointerOut={(event) => setHover(false)}
        >
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial {...props} />
        </mesh>
    )
}


// import React, { Suspense } from "react";
// import { Canvas, useLoader } from "@react-three/fiber";
// import { OrbitControls, useTexture } from "@react-three/drei";
// import { TextureLoader } from "three";

// // All textures are CC0 textures from: https://cc0textures.com/
// const name = (type) => `PavingStones092_1K_${type}.jpg`;

// export default function Cactus() {
//     const [
//         colorMap,
//         displacementMap,
//         normalMap,
//         roughnessMap,
//         aoMap
//     ] = useLoader(TextureLoader, [
//         name("Color"),
//         name("Displacement"),
//         name("Normal"),
//         name("Roughness"),
//         name("AmbientOcclusion")
//     ]);
//     // const [
//     //   colorMap,
//     //   displacementMap,
//     //   normalMap,
//     //   roughnessMap,
//     //   aoMap
//     // ] = useTexture([
//     //   name("Color"),
//     //   name("Displacement"),
//     //   name("Normal"),
//     //   name("Roughness"),
//     //   name("AmbientOcclusion")
//     // ]);
//     return (
//         <>
//             <ambientLight intensity={0.2} />
//             <directionalLight />
//             <mesh>
//                 {/* Width and height segments for displacementMap */}
//                 <sphereBufferGeometry args={[1, 100, 100]} />
//                 <meshStandardMaterial
//                     displacementScale={0.2}
//                     map={colorMap}
//                     displacementMap={displacementMap}
//                     normalMap={normalMap}
//                     roughnessMap={roughnessMap}
//                     aoMap={aoMap}
//                 />
//             </mesh>
//         </>
//     );
// }



