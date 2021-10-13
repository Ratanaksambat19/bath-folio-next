import pageStyle from "../styles/componentStyle/hero.module.css"

const Hero = () => (
        <div className={`${pageStyle.hero_wrapper} flex flex-col lg:flex-row md:flex-row justify-around items-center sm:flex-col`}>
            <div className={`${pageStyle.self_intro}`}>
                
                    <h1>
                        HI! I'm Sam
                    </h1>
                    <div className="animation_text">
                        <div className={`${pageStyle.fragment1}`}>Frontend Developer</div>
                        <div className={`${pageStyle.fragment2}`}>UI/UX Designer</div>
                    </div>
                
            </div>
            <div className={`${pageStyle.hero_img}`}>
                <div className={`${pageStyle.main_img}`}>
                    <img src="/hero/Saly-10.png" alt="" />
                </div>
                <div className={`${pageStyle.decor_img}`}>
                    <img src="/hero/Saly-43.png" alt="" />
                </div>
            </div>
            <div className={`${pageStyle.introduction}`}>
                <h1>A college Student who's exloring new Tech.</h1>
            </div>
            <div className={`${pageStyle.logo_section}`}>
                <a href='/'>
                    bath.s
                </a>
            </div>
        </div>
    )

export default Hero