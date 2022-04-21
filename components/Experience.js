import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { useMediaQuery } from 'react-responsive'


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import useOnScreen from "../utils/useOnScreen";
import TagList from "./reusable/TagList";
import ArticleSummaryCard from "./reusable/ArticleSummaryCard";
import pageStyle from "../styles/componentStyle/experience.module.css";
import titleAnimation from "../styles/titleAnimation.module.css";


const Experience = ({ blogs }) => {

    const skills = ['Appscript', 'Odoo', 'Vue', 'React']
    const [filteredBlogs, setFilteredBlogs] = useState(blogs);
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

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

                <div className={isMobile? `${pageStyle.articleCardWrapperMobile}` : `${pageStyle.articleCardWrapper}`}>
                    {
                        isMobile ?
                    <Slider {...settings} >
                        {
                            filteredBlogs.map(item =>
                                <ArticleSummaryCard
                                    key={item.frontMatter.title}
                                    blog={item.frontMatter}
                                    fileName={item.fileName} />)
                        }
                            </Slider>
                            : filteredBlogs.map(item =>
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


