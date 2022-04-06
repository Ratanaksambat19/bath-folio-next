import React, { useRef } from "react";
import useOnScreen from "../utils/useOnScreen";
import pageStyle from "../styles/componentStyle/experience.module.css";
import titleAnimation from "../styles/titleAnimation.module.css";

const Experience = () => {

    const skills = ['Appscript', 'Odoo', 'Vue', 'React']
    const ref = useRef() 
    const onScreen = useOnScreen(ref, "200px")

    return (
        <div className={`${pageStyle.experience_wrapper}`}>
            <div ref={ref}>
                {onScreen ? (
                    <h1 className={`${titleAnimation.hidden}`} >Experience</h1>

                ) : (
                    <h1 className={`${titleAnimation.page_title}`}>Experience</h1>
                )}
            </div>

            <div className={`${pageStyle.experience_section}`}>
                <div>
                    <ul className={`${pageStyle.skills_wrapper}`}>
                        {skills.map(skill => (<li key={skill}>{ skill }</li>))}
                    </ul>

                    <div className={`${pageStyle.viewtype_wrapper}`}>
                        <ul>list</ul>
                        <ul>Card</ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience


