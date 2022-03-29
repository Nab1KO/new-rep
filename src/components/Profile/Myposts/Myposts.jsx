import React from 'react';
import  cl from './Myposts.module.css'
import Post from './Post/Post';

const Myposts = (props) => {

	let postsData = [
		{id:1, post: 'hi', like: 10},
		{id:2, post: 'how are you', like: 20}
	]

	let PostsElements = postsData
		.map(p => <Post  massage={p.post} likeCount={p.like}/> );

	return (
			<div className={cl.posts}>
				<div className='tcenter'>
					my post
				</div>
				{PostsElements}
			</div>
	)
};

export default Myposts;