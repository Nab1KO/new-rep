import React from 'react';
import Ava from './Ava/ava';
import UsersNav from '../UsersNav/UsersNav';
import  cl from './Profile.module.css';
import MypostsContainer from './Myposts/MypostsContainer';



const Profile = (props) => {
	return (
		<div className={cl.content}>	
			<UsersNav />
			<Ava />
			<MypostsContainer store = {props.store} />
		</div>
	)
};

export default Profile;