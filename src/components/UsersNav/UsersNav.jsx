import react from 'react';
import cl from './UsersNav.module.css';
import { NavLink } from 'react-router-dom';

const UsersNav =(props)=> {
    return(
        <div className={cl.usersDiv}>
            <ul className={cl.prof_nav}>
                <li><NavLink to="/Profile/Students" className={navData => navData.isActive ? cl.active : ""}>სტუდენტები</NavLink></li>
                <li><NavLink to="/Profile/Administ" className={navData => navData.isActive ? cl.active : ""}>ადმინისტრაცია</NavLink></li>
                <li><NavLink to="/Profile/Profesors" className={navData => navData.isActive ? cl.active : ""}>პროფესორები</NavLink></li>
            </ul>
        </div>
    )
}
export default UsersNav;