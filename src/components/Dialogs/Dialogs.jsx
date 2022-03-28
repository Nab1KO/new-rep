import react from 'react';
import { NavLink, outlet } from 'react-router-dom';
import cl from './Dialogs.module.css';


const DialogItems =(props)=> {
    let Path = "/Dialogs/" + props.id;

    return (
        <div className={cl.dialog + ' ' + cl.active}>
            <NavLink to={Path}>{props.name}</NavLink>
        </div>
    )
}

const Massage = (props) => {
    return  <div className={cl.massage}>{props.massage}</div>
}

const Dialogs = (props) => {
    return(
        <div className={cl.dialogs}>
            <div className={cl.dialogs_items}>
                <DialogItems name="luka" id="luka" />
                <DialogItems name="zaza" id="zaza" />
                <DialogItems name="dato" id="dato" />
                <DialogItems name="dima" id="dima" />
                <DialogItems name="achiko" id="achiko" />
            </div>
            <div className={cl.massages}>
                <Massage massage = "how are you" />
                <Massage massage = "im ok" />
                <Massage massage = "great" />
            </div>
        </div>
    )
}

export default Dialogs;