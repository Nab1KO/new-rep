import React from 'react';
import Myposts from './Myposts/Myposts';
import Ava from './Ava/ava';
import UsersNav from '../UsersNav/UsersNav';
import Students from '../UsersNav/Students/Students';
import  cl from './Profile.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const Profile = (props) => {
	return (
		<div className={cl.content}>	
			<UsersNav />
			<Ava />
			<Myposts postsData={props.state.postsData}/>
		</div>
	)
};

export default Profile;