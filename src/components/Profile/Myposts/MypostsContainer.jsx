import React from "react";
import Myposts from "./Myposts";
import { addPostActionCreatore, ChangeTextActionCreatore } from "../../../Redux/Profile-reducer";

const MypostsContainer = (props) => {
        let state = props.store.getState();

		let addPost = () => {
			props.store.dispatch(addPostActionCreatore());
		}

		let onPostChange = (text) => {
		    let action = ChangeTextActionCreatore(text);
            props.store.dispatch(action);
		}


    return (
        <Myposts updateNewPostText = {onPostChange}  
                    addPost = {addPost}
                        postsData = {state.ProfilePage.postsData}
                        newPostText = {state.ProfilePage.newPostText} />
    )
};

export default MypostsContainer;