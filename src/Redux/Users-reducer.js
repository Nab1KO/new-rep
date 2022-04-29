const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS'; 

let initialState = {
    users: []
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
        default:
            return state;
    }
}


export const FollowAC = (userId) => ({ type: FOLLOW, userId });
export const UnfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SETUSERS, users});

export default UsersReducer;