import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './CustomDropDownTouchDevice.scss';

class CustomDropDownTouchDevice extends Component {
    static propTypes = {
        children: PropTypes.node,
        openOverlay: PropTypes.func,
        closeOverlay: PropTypes.func,
        label: PropTypes.string,
    };

    static defaultProps = {
        children: null,
        openOverlay: null,
        closeOverlay: null,
        label: null,
    };

    componentDidMount() {
        this.props.openOverlay();
    }

    componentWillUnmount() {
        this.props.closeOverlay();
    }

    render() {
        const {children, closeOverlay, label} = this.props;
        return (
            <div className="vub-c-custom-drop-down-touch-device">
                <div className="vub-c-custom-drop-down-touch-device__header" onClick={closeOverlay} />
                <div className="vub-c-custom-drop-down-touch-device__content">
                    <ul className="vub-c-custom-drop-down-touch-device_list">
                        {label && <li className="vub-c-custom-select-item vub-c-custom-select-item--is-disabled">{label}</li>}
                        {children}
                    </ul>
                </div>
            </div>
        );
    }
}

export default CustomDropDownTouchDevice;
