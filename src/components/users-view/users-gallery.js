import React from 'react';
import './users-gallery.scss';

class UsersGallery extends React.Component {
    render() {
        return <div className='wls-p-users-galley'>
            {this.props.children /* eslint-disable-line */ }
        </div>
    }
}

export default UsersGallery;
