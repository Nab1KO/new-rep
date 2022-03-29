import react from 'react';
import { NavLink, outlet } from 'react-router-dom';
import cl from './Dialogs.module.css';


const DialogItems = (props) => {
    let Path = "/Dialogs/" + props.id;

    return (
        <div className={cl.dialog + ' ' + cl.active}>
            <NavLink to={Path}>{props.name}</NavLink>
        </div>
    )
}

const Massage = (props) => {
    return <div className={cl.massage}>{props.massage}</div>
}

const Dialogs = (props) => {

    let dialogsData = [
        { id: 'luka', name: 'luka' },
        { id: 'zaza', name: 'zaza' },
        { id: 'dato', name: 'dato' },
        { id: 'dima', name: 'dima' },
        { id: 'achiko', name: 'achiko' }
    ]

    let DialogElements = dialogsData
        .map(d => <DialogItems name={d.name} id={d.id} />);



    let massages = [
        { id: '1', massage: 'how are you' },
        { id: '2', massage: 'im good' },
        { id: '3', massage: 'and you' },
        { id: '4', massage: 'im fine' }
    ]

    let MassageElements = massages
        .map(m => <Massage massage={m.massage} />);


    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogs_items}>
                {DialogElements}
            </div>
            <div className={cl.massages}>
                {MassageElements}
            </div>
        </div>
    )
}

export default Dialogs;