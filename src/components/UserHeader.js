import React from 'react';
import { fetchPostsWithUser } from '../action';
import { connect } from 'react-redux';


class UserHeader extends React.Component {

    render() {
        const user = this.props.users;
        if(!user) {
            return null;
        }
    return <div className="header">{user.name}</div>;
    }

} 
const mapStateToProps = (state,ownProps) => {
   return {users: state.users.find(user => user.id===ownProps.userId)}
}

export default connect(mapStateToProps, {fetchPostsWithUser})(UserHeader);