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
            {
                return {
                    ...state,
                    newBodyText: action.body
                }
            }
        case onMassageSend:
            {
                let body = state.newBodyText;
                return {
                    ...state,
                    newBodyText: '',
                    massages: [...state.massages, { id: 6, massage: body }]
                }
            }
        default:
            return state;
    }
}


export const newMassageChangeCreatore = (body) => ({ type: onMassageChange, body: body });
export const onMassageSendCreator = () => ({ type: onMassageSend });

export default DialogsReducer;