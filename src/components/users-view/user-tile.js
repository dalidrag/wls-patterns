import React from 'react';
import PropTypes from 'prop-types';

class UserTile extends React.Component {
    static propTypes = {
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    };

    state = {
        isDisplayed: false,
        top: 0,
        left: 0
    };

    componentDidMount() {
        const {top, left} = this.getPopoverPosition();
        this.setState({top, left});
    }

    imgRef = React.createRef();

    onMouseEnter = () => {
        this.setState({
            isDisplayed: true,
        });
    };

    onMouseLeave = () => {
        this.setState({
            isDisplayed: false,
        });
    };

    getPopoverPosition = () => {
        const elementNode = this.imgRef.current;

        const elementRect = elementNode.getBoundingClientRect();

        const top = elementRect.top;
        const left = elementRect.left;

        return {top, left};
    };

    render() {
        const popoverStyle = {
            display: this.state.isDisplayed ? 'block' : 'none',
            top: this.state.top,
            left: this.state.left
        };

        return <div className={'wls-p-user-tile'}>
            <img
                src={this.props.imgSrc}
                alt={"User Image"}
                ref={this.imgRef}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            />
            <div>
                {`${this.props.firstName} ${this.props.lastName}`}
            </div>
            <div
                className='wls-p-popover'
                style={popoverStyle}
            >
                {this.props.email}
            </div>
        </div>
    }
}

export default UserTile;
