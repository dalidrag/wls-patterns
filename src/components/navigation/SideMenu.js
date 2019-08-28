import React from 'react';
import PropTypes from 'prop-types';
import headerMenu from './model/menuData';
import "./SideMenu.scss";

class SideMenu extends React.Component {
    static propTypes = {
        isOpened: PropTypes.bool
    };

    render() {
        return <nav className={"c-navigation-side" + (this.props.isOpened ? " isOpened" : " isClosed")}>
            <ul className="c-navigation-side__content">
                {headerMenu.map(menuItem => <li key={menuItem.id} className="c-side-menu__item">
                    {menuItem.title}
                    {/* {menuItem.children.length > 0 ? <ul className="c-top-menu__sub-menu">
                        {menuItem.children.map(menuSubItem => <li key={menuSubItem.id} className="c-top-menu__sub-menu__item">{menuSubItem.title}</li>)}
                    </ul> : null} */}
                </li>)}
            </ul>
        </nav>
    }
}

export default SideMenu;
