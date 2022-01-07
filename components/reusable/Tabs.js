import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab'

import pageStyle from '../../styles/tabStyle.module.css';

const Tabs = ({children}) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);
    
    for (let i = 0; i <= 2; i++) {
        // console.log(children[i])

    }


    
    const onClickTabItem = (tab) => {
        console.log('tabss',tab)
        setActiveTab({activeTab: tab})
    }

    return (
        <div className={`${pageStyle.tabs}`}>
            <ol className={`${pageStyle.tab_list}`}>
                
                {
                    children.map((child) => {
                        const { label } = child.props;

                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClick={onClickTabItem}
                            />
                        );
                    })
                }
            </ol>
            <div className={`${pageStyle.tab_content}`}>
                {/* {children.map((child) => {
                    if (child.props.label !== activeTab) return undefined;
                    return child.props.children;
                })} */}
            </div>
        </div>
    )
}

Tabs.prototype = {
    children: PropTypes.instanceOf(Array).isRequired,
}

export default Tabs;