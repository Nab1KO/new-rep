const onMassageChange = 'onMassageChange';
const onMassageSend = 'onMassageSend';

const DialogsReducer = (state, action) => {
    switch (action.type) {
        case onMassageChange:
            state.newBodyText = action.body;
            return state;
        case onMassageSend:
            let body = state.newBodyText;
            state.newBodyText = '';
            state.massages.push({ id: 6, massage: body });
            return state;
        default:
            return state;
    }
}
export default DialogsReducer;