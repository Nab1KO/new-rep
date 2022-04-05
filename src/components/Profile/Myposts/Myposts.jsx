import React from 'react';
import  cl from './Myposts.module.css'
import Post from './Post/Post';

const Myposts = (props) => {
	let PostsElements = 
		props.postsData.map(p => <Post  massage={p.post} likeCount={p.like}/> );

		let newPostElement = React.createRef();

		let addPost = () => {
			let text = newPostElement.current.value; 
				console.log(text);
				props.addPost(text);
		}

	return (
			<div className={cl.posts}>
				<div className='tcenter'>
					my post
				</div>
				<div>
					<textarea placeholder='press and write' ref = {newPostElement}></textarea><br />
					<button type='submit' onClick={addPost}>send</button>
				</div>
				{PostsElements}
			</div>
	)
};

export default Myposts;