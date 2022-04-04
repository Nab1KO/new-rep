import react from 'react';
import { NavLink, outlet } from 'react-router-dom';
import cl from './Dialogs.module.css';
import DialogItems from './DialogsItems/DialogsItems';
import Massage from './Massge/Massage';




const Dialogs = (props) => {
    let DialogElements = props.state.dialogsData
        .map(d => <DialogItems name={d.name} id={d.id} />);

    let MassageElements = props.state.massages
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