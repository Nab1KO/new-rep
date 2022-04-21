import { connect } from "react-redux";
import Users from "./Users";
import { FollowAC, setUsersAC, UnfollowAC } from "../../Redux/Users-reducer";


let mapStateToProps = (state) => {
    return{
        users: state.UsersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        FOLLOW: (usersId) => {
            dispatch(FollowAC(usersId));
        },
        UNFOLLOW: (usersId) => {
            dispatch(UnfollowAC(usersId));
        },
        SETUSERS: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;