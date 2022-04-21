import NewsMassage from './newsMassage/newsMassage';

const News = (props) => {
    let newMassageElement = props.newsMassagesData.map(n =>  <NewsMassage id = {n.id} massage = {n.massage}/>)
    let newsMassageBody = props.newsMassageBody;

    let onNewsMassageChange = (e) => {
        let body = e.target.value;
        props.onNewsMassageChange(body);
    }

    let onNewsMassageSend = () => {
        props.onNewsMassageSend();
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
