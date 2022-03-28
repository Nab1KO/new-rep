import React from 'react';
import  cl from './ava.module.css'


const Ava = (props) => {
	return (
		<div className={cl.ava_desk}>
			<div className={cl.avatar}>
				<img src='https://eserve.fidelitybank.ng/OAP/imgs/avatar.jpg' alt='ava_img' />
			</div>
			<div className={cl.descript}>
				<span>description</span>
			</div>
		</div>
	)
};

export default Ava;