import React, { useRef, useState } from "react";

import useOnScreen from "../utils/useOnScreen";
import TagList from "./reusable/TagList";
import ArticleSummaryCard from "./reusable/ArticleSummaryCard";
import pageStyle from "../styles/componentStyle/experience.module.css";
import titleAnimation from "../styles/titleAnimation.module.css";


const Experience = ({ blogs }) => {

    const skills = ['Appscript', 'Odoo', 'Vue', 'React']
    const [filteredBlogs, setFilteredBlogs] = useState(blogs);

    const handleFilter = (data) => {
        setFilteredBlogs(data);
    };

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
                    <ul className={`${pageStyle.skillWrapper}`}>
                    <TagList tags={skills} blogs={blogs} filterBlogs={handleFilter} articleType='project'/>
                    </ul>

                <div className={`${pageStyle.articleCardWrapper}`}>
                        {
                            filteredBlogs.map(item =>
                                <ArticleSummaryCard
                                    key={item.frontMatter.title}
                                    blog={item.frontMatter}
                                    fileName={item.fileName} />)
                        }
                </div>
            </div>
        </div>
    )
}

export default Experience


