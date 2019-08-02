import React from 'react';
import PropTypes from 'prop-types'

class UsersView extends React.Component {
    static propTypes = {
        fetchUsers: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        return <div />
    }
}

export default UsersView;