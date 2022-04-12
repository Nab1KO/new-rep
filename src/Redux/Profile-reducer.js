const ADD_POST = 'ADD-POST';
const CHANGETEXT = 'CHANGETEXT';

const ProfileReducer = (state, action) => {
    switch(action.type) {
        case ADD_POST: 
            let newPost = {
            id: 5,
            post: state.newPostText,
            like: 0
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case CHANGETEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;    
    };
}    
export default ProfileReducer;

