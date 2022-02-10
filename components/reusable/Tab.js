import PropTypes from 'prop-types';
import pageStyle from '../../styles/tabStyle.module.css';

const Tab = ({ activeTab, label }) => {

    const getStyle = () => {

        if (activeTab === label) {
            return pageStyle.tab_list_active
        }
        return pageStyle.tab_list_item
    }
    

    return (
        <li
            className={getStyle()}
        >
            {label}
        </li>
    );
}

Tab.prototype = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClickTab: PropTypes.func.isRequired,
}

export default Tab;