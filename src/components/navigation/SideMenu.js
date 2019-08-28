import React from 'react';
import PropTypes from 'prop-types';
import headerMenu from './model/menuData';
import {withOutsideClick, withOutsideClickPropTypes} from "../directory-display/outside-click/withOutsideClick";
import "./SideMenu.scss";

@withOutsideClick
class SideMenu extends React.Component {
    static propTypes = {
        ...withOutsideClickPropTypes,
        isOpened: PropTypes.bool
    };

    componentDidMount() {
        this.props.subscribeToClickOutside(this.sideNavRef, this.props.onClickOutside);
    }

    componentWillUnmount() {
        this.props.unsubscribeFromClickOutside(this.sideNavRef, this.props.onClickOutside);
    }

    sideNavRef = React.createRef();

    render() {
        return <nav
                    className={"c-navigation-side" + (this.props.isOpened ? " isOpened" : " isClosed")}
                    ref={this.sideNavRef}
                >
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
