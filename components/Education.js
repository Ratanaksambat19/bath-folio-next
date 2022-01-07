import React, { useRef, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import useOnScreen from "../utils/useOnScreen";
import pageStyle from "../styles/componentStyle/education.module.css";
import titleAnimation from "../styles/titleAnimation.module.css";
import Tabs from "./reusable/Tabs";

const Education = () => {
    const [activeTab, setActiveTab] = useState(true);
    const [hideTab, setHideTab] = useState(true)
    const ref = useRef();
    const onScreen = useOnScreen(ref, "200px");
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    const handleClick = () => {
        setActiveTab(!activeTab)
    }
    useEffect(() => {
        setHideTab(!isMobile)
    }, [isMobile])

    return (
        // <Tabs>
        //     <div label="Gator">
        //         See ya later, <em>Alligator</em>!
        //     </div>
        //     <div label="Croc">
        //         After 'while, <em>Crocodile</em>!
        //     </div>
        //     <div label="Sarcosuchus">
        //         Nothing to see here, this tab is <em>extinct</em>!
        //     </div>
        // </Tabs>
        <div className={`${pageStyle.education_wrapper}`}>
            <div ref={ref}>
                {onScreen ? (
                    <h1 className={`${titleAnimation.hidden}`} >Education</h1>

                ) : (
                    <h1 className={`${titleAnimation.page_title}`}>Education</h1>
                )}
            </div>

            <div className={`${pageStyle.education_section}`} data-aos='fade-up' data-aos-delay="300">
                <div className={hideTab ? `${pageStyle.education_tab}` : `${pageStyle.education_tab} ${pageStyle.active}`}>
                    <button onClick={handleClick} type="button" className={`${pageStyle.tabButtons}`}>Self Learning</button>
                    <button onClick={handleClick} type="button" className={`${pageStyle.tabButtons}`}>Degree</button>
                </div>
                <div className={`${pageStyle.education_content}`}>
                    <div className={`${pageStyle.self_learning}`}>
                        <div className={`${pageStyle.title}`}>
                            <h2>
                                Self Learning
                            </h2>
                        </div>

                        <div className={`${pageStyle.education_title}`}>
                            <li>
                                <h3>React</h3>
                                <span className={`${pageStyle.readmore_active}`}>Frontend Master, Complete Intro to React, v6, <b>Brain Holt</b></span>
                            </li>
                        </div>
                        <div className={`${pageStyle.education_title}`}>
                            <li>
                                <h3>DSA</h3>
                                <span className={`${pageStyle.readmore_active}`}>Frontend Master, Introduction to Data Structures for Interviews, <b>Bianca Gandolfo</b></span>
                            </li>
                        </div>
                        <div className={`${pageStyle.education_title}`}>
                            <li>
                                <h3>UI & UX Design</h3>
                                <span className={`${pageStyle.readmore_active}`}>Google</span>
                            </li>
                        </div>
                    </div>
                    <div className={`${pageStyle.degree}`}>
                        <div className={`${pageStyle.title}`}>
                            <h2>
                                Degree
                            </h2>
                        </div>
                        <div className={`${pageStyle.degree_description}`}>
                            <h2>
                                Software Engineering
                            </h2>
                            <p>
                                Bachelor's degree of Software engineering at Kirirom Institute of Technology
                            </p>
                            <h3>
                                2019 - 2023
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;