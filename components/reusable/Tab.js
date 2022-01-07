// import React, { useState } from 'react';
import PropTypes from 'prop-types';

import pageStyle from '../../styles/tabStyle.module.css';

const Tab = (props) => {

    const { activeTab, label } = props;
    // const onClickTab = () => {
    //     // console.log(label)
    //     // onClickTab(label)
    //     console.log(props)
    // }

    let customClass = 'tab-list-item';

    if (activeTab === label) {
        console.log('fromtab', activeTab)
        customClass += ' tab-list-active';
    }

    return (
        <div>
            <button
                type='button'
                className={pageStyle.className}
                // onClick={onClickTab}
            >
            {label}
            </button>
        </div>
    );
}

Tab.prototype = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClickTab: PropTypes.func.isRequired,
}

export default Tab;