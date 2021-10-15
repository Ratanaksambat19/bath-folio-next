import Typical from "react-typical"
import pageStyle from "../styles/componentStyle/hero.module.css"

const Hero = () => (
        <div className={`${pageStyle.hero_wrapper} flex flex-col px-14 lg:flex-row md:flex-row items-center sm:flex-col`}>
        <div className={`${pageStyle.self_intro_section}`}>
            <div className={`${pageStyle.self_intro}`}>
                <h1 className="lg:text-5xl md:text-4xl text-3xl">
                    HI! I'm Sam
                </h1>
                <div className="animation_text lg:text-3xl md:text-2xl text-xl">
                    <Typical
                    steps={['Frontend Developer💻', 2000, 'UX/UI Designer🧩', 2000, 'ailurophile😺', 1000]}
                        loop={Infinity}
                        wrapper="p"
                    />
                </div>
            </div> 
            <button type="button" className={`${pageStyle.pushable}`}>
                <span className={`${pageStyle.shadow}`}/>
                <span className={`${pageStyle.edge}`} />
                <span className={`${pageStyle.front}`}>
                        Push me
                    </span>
            </button>
           
            </div>
            <div className={`${pageStyle.hero_img}`}>
                <div className={`${pageStyle.main_img}`}>
                    <img src="/hero/Saly-10.png" alt="" />
                </div>
                <div className={`${pageStyle.decor_img}`}>
                    <img src="/hero/Saly-43.png" alt="" />
                </div>
            </div>
            <div className={`${pageStyle.introduction}  lg:text-3xl md:text-2xl text-xl`}>
                    <h1>A college Student who's exloring new Tech.</h1>
            </div>
            <div className={`${pageStyle.logo_section}`}>
            <a href='/' className=" lg:text-4xl md:text-2xl text-2xl">
                    bath.s
                </a>
            </div>
        </div>
    )

export default Hero