import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab'

import pageStyle from '../../styles/tabStyle.module.css';

const Tabs = ({children}) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);
    
    const onClickTabItem = (event) => {
        setActiveTab(event.currentTarget.value)
    }

    return (
        <div className={`${pageStyle.tabs}`}>
            <ol className={`${pageStyle.tab_list}`}>
                {
                    children.map((child) => {
                        const { label } = child.props;

                        return (
                            <button type='button' key={label} onClick={onClickTabItem} value={label}>

                                <Tab
                                    activeTab={activeTab}
                                    key={label}
                                    label={label}
                                    className="text-white"
                                    
                                />
                            </button>
                        );
                    })
                }
            </ol>
            <div className={`${pageStyle.tab_content} h-full`}>
                {children.map((child) => {
                    if (child.props.label !== activeTab) return undefined;
                    return (
                        <div key={child.props.label} className='text-white flex lg:flex-row lg:justify-around flex-col justify-center items-center gap-28'>
                            {child.props.children}
                        </div>
                        )
                })}
            </div>
        </div>
    )
}

Tabs.prototype = {
    children: PropTypes.instanceOf(Array).isRequired,
}

export default Tabs;