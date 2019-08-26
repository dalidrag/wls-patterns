import React from 'react';
import TopMenu from './navigation/TopMenu';
import './Header.scss';

class Header extends React.Component {
    render() {
        return (<div className="c-header">
            <TopMenu />
        </div>)
    }
}

export default Header;
