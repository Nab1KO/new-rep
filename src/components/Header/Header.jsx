import React from 'react';

import cl from './Header.module.css';



const Header = () => {
	return (
		<header className={cl.header}>
			<img src="./img/logo-geomedi_1.png" alt='logo' />
		</header>	
	)
};

export default Header;