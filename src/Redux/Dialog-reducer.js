const onMassageChange = 'onMassageChange';
const onMassageSend = 'onMassageSend';

let initialState = {
    dialogsData: [
        { id: 'luka', name: 'luka' },
        { id: 'zaza', name: 'zaza' },
        { id: 'dato', name: 'dato' },
        { id: 'dima', name: 'dima' },
        { id: 'achiko', name: 'achiko' }
      ],
      massages: [
        { id: '1', massage: 'you' },
        { id: '2', massage: 'im good' },
        { id: '3', massage: 'and you' },
        { id: '4', massage: 'im fine' }
      ],
      newBodyText: ''
}

const DialogsReducer = (state = initialState, action) => {
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


export const newMassageChangeCreatore = (body) => ({type: onMassageChange, body: body});
export const onMassageSendCreator = () => ({type: onMassageSend});

export default DialogsReducer;