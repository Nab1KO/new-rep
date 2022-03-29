import React from "react";
import cl from './DialogsItems.module.css';
import { NavLink } from "react-router-dom";


const DialogItems = (props) => {
    let Path = "/Dialogs/" + props.id;

    return (
        <div className={cl.dialog + ' ' + cl.active}>
            <NavLink to={Path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItems;

