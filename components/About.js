import React, { useEffect, useRef, Suspense } from "react";
import Typical from "react-typical"
import { PresentationControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import useOnScreen from "../utils/useOnScreen";

import Box from "./threeJs/rotationBox";
import Circle from "./threeJs/Circle";  
import JavascriptSkill from "./threeJs/javascriptBox"
import SkillsLoader from "./threeJs/skills";
import Cactus from "./threeJs/pyramid";

import btnStyle from "../styles/buttonStyle.module.css"
import titleAnimation from "../styles/titleAnimation.module.css";
import pageStyle from "../styles/componentStyle/about.module.css"

const About = () => {

    const ref = useRef();
    const onScreen = useOnScreen(ref, "200px");
    
    useEffect(() => {
        
    }, [])
    return (
        <div className={`${pageStyle.about_wrapper}`} >

            <div ref={ref}>
            
                {onScreen ? (
                    <h1 className={`${titleAnimation.hidden}`} >About me</h1>

                ) : (
                    <h1 className={`${titleAnimation.page_title}`}>About me</h1>
                )} 
            </div>
            
            <div className={`${pageStyle.circle_threejs}`}>
                {/* <Circle /> */}
                {/* <Canvas flat dpr={[1, 2]} camera={{ fov: 25, position: [0, 0, 8] }}>
                    <Suspense>
                    <ambientLight />
                    <PresentationControls global zoom={0.8} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
                            <group position-y={-0.20} dispose={null}>
                                <Box />
                                <JavascriptSkill/>

                            </group>
                    </PresentationControls>
                    </Suspense>
                </Canvas> */}
                <Canvas flat dpr={[1, 2]} camera={{ fov: 25, position: [0, 0, 8] }}>
                    <Suspense fallback={null}>
                        <ambientLight />

                        <PresentationControls global zoom={0.8} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>

                        <group position-y={-0.2}>
                            <Box />
                        </group>
                        {/* <JavascriptSkill/> */}
                        {
                            (['atom', 'vuejs', 'javascript', 'python']).map(skill  => (

                                <SkillsLoader skill={skill} key={ skill }/>
                            ))
                            }
                            </PresentationControls>
                    </Suspense>
                </Canvas>
            </div>
            
            <div className={`${pageStyle.description_wrapper}`} data-aos='fade-up' data-aos-delay="300">
                <div className={`${pageStyle.description_container}`}>

                <h1>Doung Ratanaksambat</h1>
                <div className={`${pageStyle.self_description}`}>
                    A college student who is exploring new
                    technology, having ambitous to challege
                    with various problems. I am agile and
                    adaptable with new project, well
                    collaboration and support the team.

                    I like photography and basketball, and sometimes I do mobile
                    gamming as well.
                </div>
                <button type="button" className={`${btnStyle.pushable}`}>
                    <span className={`${btnStyle.shadow}`} />
                    <span className={`${btnStyle.edge}`} />
                    <span className={`${btnStyle.front}`}>
                        <Typical steps={['Download CV', 4000, "", 2000]} loop={Infinity} />
                    </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About;