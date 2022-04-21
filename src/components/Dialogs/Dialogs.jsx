import cl from './Dialogs.module.css';
import DialogItems from './DialogsItems/DialogsItems';
import Massage from './Massge/Massage';





const Dialogs = (props) => {

    let DialogElements = props.dialogsPage.dialogsData
        .map(d => <DialogItems name={d.name} id={d.id} />);

    let MassageElements = props.dialogsPage.massages
        .map(m => <Massage massage={m.massage} />);

    let onMassageChange =  (e) => {
        let body = e.target.value;
        props.onMassageChange(body);
    }   

    let onMassageSend = () => {
        props.onMassageSend()
    }


    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogs_items}>
                {DialogElements}
            </div>
            <div className={cl.massages}>
                {MassageElements}
                <div><textarea  placeholder='enter your massage'
                                value={props.newBodyText}
                                onChange = {onMassageChange}></textarea></div>
                <div><button onClick={onMassageSend}>send</button></div>
            </div>
        </div>
    )
}

export default Dialogs;