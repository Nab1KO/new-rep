import React from 'react';
import cl from'./Navbar.module.css'
import { NavLink, Outlet } from 'react-router-dom';

const Navbar = (props) => {
	return (
		<nav className={cl.nav}>
			<div>
				<NavLink to ="/Home" className={navData => navData.isActive ? cl.active : cl.item}>მთავარი</NavLink>
			</div>
			<div>
				<NavLink to ="/News" className={navData => navData.isActive ? cl.active : cl.item}>მომხმარებელი</NavLink>
			</div>
			<div>
				<NavLink to ="/Profile" className={navData => navData.isActive ? cl.active : cl.item}>კაბინეტი</NavLink>
			</div>
			<div>
				<NavLink to ="/Dialogs" className={navData => navData.isActive ? cl.active : cl.item}>ჩატი</NavLink>
			</div>
		</nav>
	)
};

export default Navbar;