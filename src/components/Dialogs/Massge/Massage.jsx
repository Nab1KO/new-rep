import React from "react";
import cl from './Massage.module.css';
import { NavLink } from "react-router-dom";

const Massage = (props) => {
    return (
        <div className={cl.massage}>
            <span>{props.massage}</span>
        </div>
    )
}

export default Massage;