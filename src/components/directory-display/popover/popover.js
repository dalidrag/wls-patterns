import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Popover extends Component {
    static propTypes = {
        isCallerHovered: PropTypes.bool,
        writeUp: PropTypes.string,
        elementNode: PropTypes.object,
    };

    static defaultProps = {
        isCallerHovered: false,
        writeUp: "",
        elementNode: null,
    };

    getPopoverPosition = () => {
        const elementRect = this.props.elementNode && this.props.elementNode.getBoundingClientRect();
        if (!elementRect) return {top: -10000, left: -10000};

        const top = elementRect.top;
        const left = elementRect.left;

        return {top, left};
    };


    render() {
        const {top, left} = this.getPopoverPosition();

        const popoverStyle = {
            display: this.props.isCallerHovered ? 'block' : 'none',
            top: top,
            left: left
        };

        return (
            <div
                className='wls-p-popover'
                style={popoverStyle}
            >
                {this.props.writeUp}
            </div>
        )
    }
}

export default Popover;
