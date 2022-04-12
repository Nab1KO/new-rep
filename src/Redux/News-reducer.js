const ON_NEWS_MASSAGE_CHANGE = 'ON_NEWS_MASSAGE_CHANGE';
const ON_NEWS_MASSAGE_SAND = 'ON_NEWS_MASSAGE_SAND';

const NewsReducer = (state, action) => {
    switch(action.type){
        case ON_NEWS_MASSAGE_CHANGE: 
            state.newsMassageBody = action.body;
            return state;
        case ON_NEWS_MASSAGE_SAND:
            let body = state.newsMassageBody;
            state.newsMassageBody = '';
            state.newsMassagesData.push({id: 5, massage: body});
            return state;
        default:
            return state        
    }
}
export default NewsReducer;