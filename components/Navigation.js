import { useEffect, useState } from "react"
import { useMediaQuery } from 'react-responsive'
import { VscFoldDown, VscFoldUp, VscHome, VscAccount, VscBook, VscBracketDot, VscTerminal, VscGithubInverted, VscBroadcast } from "react-icons/vsc"
import pageStyle from "../styles/componentStyle/navigation.module.css"

const Navigation = () => {
    const [sidebar, setSidebar] = useState(true);
    const handleClick = () => {
        setSidebar(!sidebar);
    };
    
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    useEffect(() => {

        setSidebar(!isMobile)
    }, [isMobile])
    return (
        <>
        <div className={`${pageStyle.navigation_wrapper}`}>
            <div className={`${pageStyle.navbar}`}>
                <button type="button" className={`${pageStyle.menu_bar}`} onClick={handleClick}>  
                        {
                            sidebar ? <VscFoldDown /> 
                            : <VscFoldUp/>
                    }
                </button>
            </div>
            <nav className={sidebar ? ` ${pageStyle.active} ${pageStyle.nav_menu}` : `${pageStyle.nav_menu}`}>

                    <ul className={`${pageStyle.items_wrapper} `} >

                        <li>
                            <a href="#home">
                                <span>home</span>
                                <VscHome/>
                            </a>
                        </li>
                        <li>
                            <a href="#about">
                                <span>about_me</span>
                                <VscAccount/>
                            </a>
                        </li>
                        <li>
                            <a href="#education">
                                <span>education</span>
                                <VscBook/>
                            </a>
                        </li>
                        <li>
                            <a href="#experience">
                                <span>experience</span>
                                <VscBracketDot/>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span>project</span>
                                <VscTerminal/>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span>my_repos</span>
                                <VscGithubInverted/>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span>contact</span>
                                <VscBroadcast />
                            </a>
                            </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navigation