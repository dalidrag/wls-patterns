import React from 'react';
import PropTypes from 'prop-types'
import UsersGallery from './users-gallery';
import UserTile from './user-tile';
import './user-tile.scss';

class UsersView extends React.Component {
    static propTypes = {
        fetchUsers: PropTypes.func.isRequired,
        users: PropTypes.object
    };

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        let users = this.props.users && this.props.users.data;

        return <UsersGallery>
            {users && users.map(user => {
                return <UserTile
                    key={user.id}
                    imgSrc={user.avatar}
                    firstName={user.first_name}
                    lastName={user.last_name}
                />;
            })
            }
        </UsersGallery>
    }
}

export default UsersView;
