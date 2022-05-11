const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SETCURRENTPAGE = 'SETCURRENTPAGE';
const SETTOTALUSERSCOUNT = 'SETTOTALUSERSCOUNT';


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 54,
    currentPage: 1
}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
                return {
                    ...state, 
                    users: state.users.map(u => {
                        if (u.id === action.userId){
                            return {...u, folowed: true}
                        }
                        return u;
                    })
                }
        case UNFOLLOW:
                return {
                    ...state,
                    users: state.users.map(u => {
                        if(u.id === action.userId){
                            return {...u, folowed: false}
                        }
                        return u;
                    })
                }
        case SETUSERS:{
            return { ...state, users: [...action.users ] } 
               }
        case SETCURRENTPAGE:{
            return { ...state, currentPage: action.currentPage}
        }
        case SETTOTALUSERSCOUNT:{
            return { ...state, totalUsersCount: action.count}
        }            
        default:
            return state;
    }
}


export const FollowAC = (userId) => ({ type: FOLLOW, userId });
export const UnfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SETUSERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SETCURRENTPAGE, currentPage});
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SETTOTALUSERSCOUNT, count:totalUsersCount});

export default UsersReducer;