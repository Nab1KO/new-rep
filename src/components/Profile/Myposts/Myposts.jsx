import React from 'react';
import  cl from './Myposts.module.css'
import Post from './Post/Post';

const Myposts = () => {
	return (
			<div className={cl.posts}>
				<div className='tcenter'>
					my post
				</div>
				<Post  massage="hi." likeCount='10'/>
				<Post  massage="how are you?" likeCount='20'/>
			</div>
	)
};

export default Myposts;