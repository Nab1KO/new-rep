import { connect } from 'react-redux';
import { onNewsMassageChangeCreator } from '../../Redux/News-reducer';
import { onNewsMassageSandCreator } from '../../Redux/News-reducer';
import News from './News';

// const NewsContainer = (props) => {
//     let state = props.store.getState().newsPage;

//     let onNewsMassageChange = (body) => {
//         let action = onNewsMassageChangeCreator(body);
//         props.store.dispatch(action);
//     }

//     let onNewsMassageSend = () => {
//         props.store.dispatch(onNewsMassageSandCreator());
//     }
//     return(
//         <News onNewsMassageSend = {onNewsMassageSend}
//                 onNewsMassageChange = {onNewsMassageChange}
//                 newsPage = {state} />
//     )
// }



let mapStateToProps = (state) => ({
    newsMassagesData: state.newsPage.newsMassagesData,
    newsMassageBody: state.newsPage.newsMassageBody
});

let mapDispatchToProps = (dispatch) => {
    return {
        onNewsMassageChange: (body) => {
            let action = onNewsMassageChangeCreator(body);
            dispatch(action);
        },
        onNewsMassageSend: () => {
            dispatch(onNewsMassageSandCreator())
        }
    }
}


    

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;
