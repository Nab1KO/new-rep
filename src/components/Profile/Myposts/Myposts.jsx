import React from 'react';
import  cl from './Myposts.module.css'
import Post from './Post/Post';

const Myposts = (props) => {
	let PostsElements = 
		props.postsData.map(p => <Post  massage={p.post} likeCount={p.like}/> );

	return (
			<div className={cl.posts}>
				<div className='tcenter'>
					my post
				</div>
				<div>
					<textarea placeholder='press and write'></textarea><br />
					<button type='submit'>send</button>
				</div>
				{PostsElements}
			</div>
	)
};

export default Myposts;