import react from 'react';
import cl from './News.module.css';
import NewsMassage from './newsMassage/newsMassage';
import { newMassageChangeCreatore, onNewsMassageChangeCreator } from '../../Redux/state';
import { onNewsMassageSandCreator } from '../../Redux/state';

const News = (props) => {
    let state = props.store.getState().newsPage;
    let newMassageElement = state.newsMassagesData.map(n =>  <NewsMassage id = {n.id} massage = {n.massage}/>)
    let newsMassageBody = props.store.getState().newsPage.newsMassageBody;

    let onNewsMassageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(onNewsMassageChangeCreator(body));
    }

    let onNewsMassageSend = () => {
        props.store.dispatch(onNewsMassageSandCreator());
    }
    return(
        <div>
           {newMassageElement}
           <div><textarea placeholder='enter some text'
                                value={newsMassageBody}
                                onChange={onNewsMassageChange}></textarea></div>
               <div><button onClick={onNewsMassageSend}>send</button></div>
        </div>
    )
}

export default News;
