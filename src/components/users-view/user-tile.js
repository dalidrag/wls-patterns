import React from 'react';
import PropTypes from 'prop-types';
import {
    withPopover,
    withPopoverPropTypes,
    withPopoverDefaultProps,
} from '../directory-display/popover/with-popover';

@withPopover
class UserTile extends React.Component {
    static propTypes = {
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        ...withPopoverPropTypes
    };

    static defaultProps = {
        ...withPopoverDefaultProps
    };

    onMouseEnter = () => {
        this.props.togglePopover(true, this.props.email);
    };

    onMouseLeave = () => {
        this.props.togglePopover(false);
    };

    render() {
        return <div className={'wls-p-user-tile'}>
            <img
                src={this.props.imgSrc}
                alt={"User Image"}
                ref={this.props.popoverCallerRef}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            />
            <div>
                {`${this.props.firstName} ${this.props.lastName}`}
            </div>
        </div>
    }
}

export default UserTile;
