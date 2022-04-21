const ON_NEWS_MASSAGE_CHANGE = 'ON_NEWS_MASSAGE_CHANGE';
const ON_NEWS_MASSAGE_SAND = 'ON_NEWS_MASSAGE_SAND';

let initialState = {
    newsMassagesData: [
        { id: '1', massage: 'sup brooo' },
        { id: '2', massage: 'sup brooo' },
        { id: '3', massage: 'sup brooo' },
        { id: '4', massage: 'sup brooo' },
    ],
    newsMassageBody: ''
}

const NewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_NEWS_MASSAGE_CHANGE:
            return  {
                ...state,
                newsMassageBody: action.body
            }
        case ON_NEWS_MASSAGE_SAND:
            let body = state.newsMassageBody;
            return {
                ...state,
                newsMassageBody: '',
                newsMassagesData: [...state.newsMassagesData, { id: 5, massage: body }],
            }
        default:
            return state
    }
}


export const onNewsMassageSandCreator = () => ({ type: ON_NEWS_MASSAGE_SAND });
export const onNewsMassageChangeCreator = (body) => ({ type: ON_NEWS_MASSAGE_CHANGE, body: body });

export default NewsReducer;