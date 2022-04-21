import { connect } from 'react-redux';
import { newMassageChangeCreatore } from '../../Redux/Dialog-reducer';
import { onMassageSendCreator } from '../../Redux/Dialog-reducer';
import Dialogs from './Dialogs';



let mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage
});

let mapDispatchToProps = (dispatch) => {
    return{
        onMassageChange: (body) => {
            dispatch(newMassageChangeCreatore(body))
        },
        onMassageSend: () => {
            dispatch(onMassageSendCreator())
        }
    }
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;