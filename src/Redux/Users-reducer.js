const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS'; 

let initialState = {
    users: [
        { id: 1, photoUrl: 'https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg', 
                firstName: 'luka', folowed:false, status: 'hello fellas,, wasssup', location: {city: 'Tbilisi', country: 'Georgia'}},
        { id: 2, photoUrl: 'https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg', 
                firstName: 'zaza', folowed:true, status: 'hello fellas im zaza', location: {city: 'Tbilisi', country: 'Georgia'}},
        { id: 3, photoUrl: 'https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg', 
                firstName: 'dato', folowed:true, status: 'wasssup zaza ?', location: {city: 'Tbilisi', country: 'Georgia'}},
        { id: 4, photoUrl: 'https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg', 
                firstName: 'dima', folowed:false, status: 'im actualy doing something', location: {city: 'Tbilisi', country: 'Georgia'}},
        { id: 5, photoUrl: 'https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg', 
                firstName: 'achiko', folowed:true, status: 'i know how to drive a car', location: {city: 'Tbilisi', country: 'Georgia'}}
    ],
}

const UsersReducere = (state = initialState, action) => {
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
        case SETUSERS:
            return {
                ...state,
                users: [ ...state.users , ...action.users ]
            }        
        default:
            return state;
    }
}


export const FollowAC = (userId) => ({ type: FOLLOW, userId });
export const UnfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SETUSERS, users});

export default UsersReducere;