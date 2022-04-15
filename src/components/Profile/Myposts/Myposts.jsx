import React from 'react';
import  cl from './Myposts.module.css'
import Post from './Post/Post';

const Myposts = (props) => {
	let PostsElements = 
		props.postsData.map(p => <Post  massage={p.post} likeCount={p.like}/> );

		let newPostElement = React.createRef();

		let onAddPost = () => {
			props.addPost();
		}

		let onPostChange = () => {
			let text = newPostElement.current.value;
			props.updateNewPostText(text);
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


					<button type='submit' onClick={onAddPost}>send</button>
				</div>
				{PostsElements}
			</div>
	)
};

export default Myposts;