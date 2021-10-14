import { useEffect, useState } from "react"
import { IconContext } from "react-icons/lib"
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
        <IconContext.Provider value={{ className: "global-class-name", color: 'white', size: "24px" }}>
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
                            <a href="/">
                                <VscHome/>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <VscAccount/>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <VscBook/>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <VscBracketDot/>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <VscTerminal/>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <VscGithubInverted/>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <VscBroadcast />
                            </a>
                        </li>
                    </ul>
                </nav>
            </IconContext.Provider>
            </div>
        </>
    )
}

export default Navigation