import React from 'react';
import PropTypes from 'prop-types';
import TopMenu from './navigation/TopMenu';
import SideMenu from './navigation/SideMenu';
import './Header.scss';
import {withOverlay} from "./directory-display/overlay/withOverlay";

@withOverlay
class Header extends React.Component {
    static propTypes = {
        openOverlay: PropTypes.func,
        closeOverlay: PropTypes.func
    };

    state = {
        isSideMenuOpened: false
    };

    toggleMenu = () => {
        !this.state.isSideMenuOpened ? this.props.openOverlay() : this.props.closeOverlay();
        this.setState({isSideMenuOpened: !this.state.isSideMenuOpened});
    };

    render() {
        return (<div className="c-header">
            <button className="c-burger-button" onClick={this.toggleMenu}>
                <img src="/images/burger.svg" alt="burger-icon" />
            </button>
            <SideMenu isOpened={this.state.isSideMenuOpened}/>
            <TopMenu />
        </div>)
    }
}

export default Header;
