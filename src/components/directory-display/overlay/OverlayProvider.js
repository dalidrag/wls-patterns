import React, {Component} from 'react';
import Overlay from './Overlay';
import OverlayContext from './OverlayContext';

export default class OverlayProvider extends Component {
    state = {
        isOpened: false,
    };

    openOverlay = () => {
        !this.state.isOpened && this.setState({
            isOpened: true,
        });
    };

    closeOverlay = () => {
        this.setState({
            isOpened: false,
        });
    };

    render() {
        const {children} = this.props; //eslint-disable-line
        const {isOpened} = this.state;
        return (
            <OverlayContext.Provider value={{
                closeOverlay: this.closeOverlay,
                openOverlay: this.openOverlay,
                isOverlayOpened: isOpened,
            }}
            >
                {children}
                {isOpened && (
                    <Overlay
                        closeOverlay={this.closeOverlay}
                    />
                )}
            </OverlayContext.Provider>
        );
    }
}

