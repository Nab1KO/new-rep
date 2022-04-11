import React from 'react';
import { addPostActionCreatore, ChangeTextActionCreatore } from '../../../Redux/state';
import  cl from './Myposts.module.css'
import Post from './Post/Post';

const Myposts = (props) => {
	let PostsElements = 
		props.postsData.map(p => <Post  massage={p.post} likeCount={p.like}/> );

		let newPostElement = React.createRef();

		let addPost = () => {
				props.dispatch(addPostActionCreatore());
		}

		let onPostChange = () => {
			let text = newPostElement.current.value;
				props.dispatch(ChangeTextActionCreatore(text));
		}
	return (
			<div className={cl.posts}>
				<div className='tcenter'>
					my post
				</div>
				<div>
					<textarea placeholder='press and write'
						 onChange={onPostChange} 
						 	ref = {newPostElement} 
							 value={props.newPostText} /><br />


					<button type='submit' onClick={addPost}>send</button>
				</div>
				{PostsElements}
			</div>
	)
};

export default Myposts;