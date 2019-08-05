import React from 'react';
import PropTypes from 'prop-types';

class UserTile extends React.Component {
    static propTypes = {
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired,
    };

    render() {
        return <div className={'wls-p-user-tile'}>
            <img src={this.props.imgSrc} alt={"User Image"} />
            <div>
                {`${this.props.firstName} ${this.props.lastName}`}
            </div>
        </div>
    }
}

export default UserTile;
