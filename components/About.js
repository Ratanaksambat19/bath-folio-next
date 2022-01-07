import React, { useEffect, useRef } from "react";
import Typical from "react-typical"
import Circle from './threeJs/Circle'
import useOnScreen from "../utils/useOnScreen";

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
                <Circle />
            </div>
            
            <div className={`${pageStyle.description_wrapper}`} data-aos='fade-up' data-aos-delay="300">
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

            {/* <div className={`${pageStyle.content_wrapper}`} data-aos="fade-up" data-aos-delay="1000">
                <h1>Doung Ratanaksambat</h1>
                <div className={`${pageStyle.self_intro}`}>

                    <div className={`${pageStyle.self_description}`}>
                        A college student who is exploring new
                        technology, having ambitous to challege
                        with various problems. I am agile and
                        adaptable with new project, well
                        collaboration and support the team.

                        I like photography and basketball, and sometimes I do mobile
                        gamming as well.
                    </div>

                    <div className={`${pageStyle.self_skills}`}>
                        <ul>
                            <li>html, css, js</li>
                        </ul>
                    </div>
                </div>
            </div> */}

        </div>
    )
}
// const { ref, inView, entry } = useInView({
//     /* Optional options */
//     threshold: 0,
// });

// useEffect(() => {
//     console.log(inView);
//     console.log(entry);
//     console.log(ref)
// }, [inView, entry, ref]);

//  (

//     <div className={`${pageStyle.about_wrapper}`} >
//         {/* <div ref={ref} >
//             <h2>{`Header inside viewport ${inView}.`}</h2>
//         </div> */}

//     {/* <InView as="div" onChange={(inView, entry) => console.log('Inview:', inView)}>
//         <h2>Plain children are always rendered. Use onChange to monitor state.</h2>
//     </InView> */}
//         <InView as="div" onChange={(inView, entry) => console.log('Inview:', inView)}>
//         <h1 className="text-white" >About me</h1>
//         </InView>


//         <div className={`${pageStyle.content_wrapper}`}>
//             <div className={`${pageStyle.self_intro}`} data-aos="fade-up"
//                 data-aos-delay="500">
//                 <h1>Doung Ratanaksambat</h1>

//                 <div className={`${pageStyle.self_description}`}>
//                     A college student who is exploring new
//                     technology, having ambitous to challege
//                     with various problems. I am agile and
//                     adaptable with new project, well
//                     collaboration and support the team.

//                     I like photography and basketball, and sometimes I do mobile
//                     gamming as well.
//                 </div>

//                 <div className={`${pageStyle.self_skills}`}>
//                     <ul>
//                         <li>html, css, js</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>

//     </div>
// )


export default About;