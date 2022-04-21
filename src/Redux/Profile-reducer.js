const ADD_POST = 'ADD-POST';
const CHANGETEXT = 'CHANGETEXT';


let initialState = {
    postsData: [
        { id: 1, post: 'hi', like: 10 },
        { id: 2, post: 'how are you', like: 20 }
      ],
      newPostText: "luka"
}

const ProfileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
            let newPost = {
                id: 5,
                post: state.newPostText,
                like: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, (newPost)],
                newPostText: ''
            };
        case CHANGETEXT: 
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;    
    };
}

export const addPostActionCreatore = () => ({type: ADD_POST});
export const ChangeTextActionCreatore = (text) =>({type: CHANGETEXT, newText: text});

export default ProfileReducer;

