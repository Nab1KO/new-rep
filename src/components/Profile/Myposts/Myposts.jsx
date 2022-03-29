import React from 'react';
import  cl from './Myposts.module.css'
import Post from './Post/Post';

const Myposts = (props) => {

	let postsData = [
		{id:1, post: 'hi', like: 10},
		{id:2, post: 'how are you', like: 20}
	]
	return (
			<div className={cl.posts}>
				<div className='tcenter'>
					my post
				</div>
				<Post  massage={postsData[0].post} likeCount={postsData[0].like}/>
				<Post  massage={postsData[1].post} likeCount={postsData[1].like}/>
			</div>
	)
};

export default Myposts;