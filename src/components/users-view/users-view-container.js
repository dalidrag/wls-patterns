import {connect} from 'react-redux'
import {fetchUsers} from '../../redux/actionCreators';
import UsersView from './users-view';

const mapStateToProps = (state) => {
    return {users: state.users};
};

const mapDispatchToProps = (dispatch) => {
  return { fetchUsers: () => dispatch(fetchUsers())};
};

const UsersViewRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersView);

export default UsersViewRedux;
