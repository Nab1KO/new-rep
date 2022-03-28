import React from 'react';
import  cl from './Post.module.css'

const Post = (props) => {
	return (
		<div className={cl.new_post}>
			<div>
				{props.massage}
			</div>
			<div>
				<span>like</span> {props.likeCount}
			</div>
		</div>
	)
};

export default Post;