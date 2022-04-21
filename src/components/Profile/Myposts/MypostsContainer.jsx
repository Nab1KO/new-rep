import Myposts from "./Myposts";
import { addPostActionCreatore, ChangeTextActionCreatore } from "../../../Redux/Profile-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => ({
    postsData: state.ProfilePage.postsData,
    newPostText: state.ProfilePage.newPostText
});
let mapDispatchToProps = (dispatch) => {
    return{
        addPost: () => {
            dispatch(addPostActionCreatore())
        },
        updateNewPostText: (text) => {
            dispatch(ChangeTextActionCreatore(text));
        }
    }
}

const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);



export default MypostsContainer;