import React, {PureComponent} from 'react';
import './Overlay.scss';

class Overlay extends PureComponent {
    componentDidMount() {
        window.document.body.classList.add('scroll-disabled'); //eslint-disable-line
    }

    componentWillUnmount() {
        window.document.body.classList.remove('scroll-disabled'); //eslint-disable-line
    }

    render() {
        return (
            <div className="c-overlay" />
        );
    }
}

export default Overlay;
