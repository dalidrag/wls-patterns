import React from 'react';
import headerMenu from './model/menuData';
import './TopMenu.scss';

class TopMenu extends React.Component {
    render() {
        return <ul className="c-top-menu">
            {headerMenu.map(menuItem => <li key={menuItem.id} className="c-top-menu__item">
                {menuItem.title}
                {menuItem.children.length > 0 ? <ul className="c-top-menu__sub-menu">
                    {menuItem.children.map(menuSubItem => <li key={menuSubItem.id} className="c-top-menu__sub-menu__item">{menuSubItem.title}</li>)}
                    </ul> : null}
                </li>)}
        </ul>
    }
}

export default TopMenu;
