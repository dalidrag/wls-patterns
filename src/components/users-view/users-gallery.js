import React from 'react';
import './users-gallery.scss';

const UsersGallery = props => {
    return <div className='wls-p-users-galley'>
        {props.children /* eslint-disable-line */ }
    </div>
};

export default UsersGallery;
