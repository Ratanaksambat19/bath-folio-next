import React, { useRef } from "react";
import { VscCloud } from "react-icons/vsc"
import useOnScreen from "../utils/useOnScreen";
import pageStyle from "../styles/componentStyle/education.module.css";
import titleAnimation from "../styles/titleAnimation.module.css";
import Tabs from "./reusable/Tabs";

const Education = () => {

    const ref = useRef();
    const onScreen = useOnScreen(ref, "200px");

    return (
        <div className={`${pageStyle.education_wrapper}`}>
            <div ref={ref}>
                {onScreen ? (
                    <h1 className={`${titleAnimation.hidden}`} >Education</h1>

                ) : (
                    <h1 className={`${titleAnimation.page_title}`}>Education</h1>
                )}
            </div>
            <div className={`${pageStyle.education_section}`}>
                <Tabs className={`${pageStyle.education_content}`}>
                    <div className={`${pageStyle.self_learning}`} label="Self Taught">
                        <div className={`${pageStyle.education_title}`}>
                            <li>
                                <h3>React</h3>
                                <span className={`${pageStyle.readmore_active}`}>Frontend Master, Complete Intro to React, v6,
                                    <b><em>Brain Holt</em></b>
                                    <a href="https://react-pet-app.vercel.app/" className="flex justify-center items-center"><VscCloud/>React Pet app</a>
                                </span>
                            </li>
                        </div>
                        <div className={`${pageStyle.education_title}`}>
                            <li>
                                <h3>DSA</h3>
                                <span className={`${pageStyle.readmore_active}`}>Frontend Master, Introduction to Data Structures for Interviews, <b><em>Bianca Gandolfo</em></b></span>
                            </li>
                        </div>
                        <div className={`${pageStyle.education_title}`}>
                            <li>
                                <h3>Fullstack React Development</h3>
                                <span className={`${pageStyle.readmore_active}`}>
                                    <b><em>Moss Scott</em></b>
                                    <p>user@test.com, password</p>
                                    <a href="https://react-spotify-ebon.vercel.app/signin" className="flex justify-center items-center"><VscCloud />React Spotify</a>
                                </span>
                            </li>
                        </div>
                    </div>
                    <div className={`${pageStyle.degree}`} label="Degree">
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
                    <div className={`${pageStyle.bootcamp} flex justify-between w-full`} label="BootCamp">
                        <div className={`${pageStyle.bootcamp_description}`}>
                            <h2>Python</h2>
                            <p>Python fundamental and DSA</p>
                            <em>Kevin Sabee</em>
                        </div>
                        <div className={`${pageStyle.bootcamp_description}`}>
                            <h2>VueJs</h2>
                            <p>Frontend web development with vue.js Node.js, mongoDB</p>
                            <em>
                                Vignesh Manoharan
                            </em>
                        </div>
                    </div>
                </Tabs>
            </div>
        </div>
    )
}

export default Education;