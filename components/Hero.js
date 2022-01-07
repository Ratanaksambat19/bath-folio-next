import Typical from "react-typical"
import pageStyle from "../styles/componentStyle/hero.module.css"
import btnStyle from "../styles/buttonStyle.module.css"

const Hero = () => (
        <div className={`${pageStyle.hero_wrapper} flex  px-14 lg:flex-row md:flex-row items-center `}> 
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
                <button type="button" className={`${btnStyle.pushable}`}>
                    <span className={`${btnStyle.shadow}`}/>
                    <span className={`${btnStyle.edge}`} />
                    <span className={`${btnStyle.front}`}>
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