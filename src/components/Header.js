import React from 'react';
import TopMenu from './navigation/TopMenu';
import SideMenu from './navigation/SideMenu';
import './Header.scss';

class Header extends React.Component {
    state = {
        isSideMenuOpened: false
    };

    toggleMenu = () => {
        this.setState({isSideMenuOpened: !this.state.isSideMenuOpened})
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
