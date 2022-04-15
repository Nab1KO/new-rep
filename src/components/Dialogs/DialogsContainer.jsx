import react from 'react';
import { newMassageChangeCreatore } from '../../Redux/Dialog-reducer';
import { onMassageSendCreator } from '../../Redux/Dialog-reducer';
import Dialogs from './Dialogs';





const DialogsContainer = (props) => {
    
    let state = props.store.getState().dialogsPage;

    let onMassageChange =  (body) => {
        let action = newMassageChangeCreatore(body);
        props.store.dispatch(action);
    }   

    let onMassageSend = () => {
        props.store.dispatch(onMassageSendCreator());    
    }


    return (
        <Dialogs onMassageChange = {onMassageChange}
                    onMassageSend = {onMassageSend}
                    dialogsPage = {state}
                    />
    )
}

export default DialogsContainer;