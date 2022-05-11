import { connect } from "react-redux";
import Users from "./Users";
import { FollowAC, setCurrentPageAC, setUsersAC, UnfollowAC , setTotalUsersCountAC} from "../../Redux/Users-reducer";


let mapStateToProps = (state) => {
    return{
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage
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
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setToatalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;