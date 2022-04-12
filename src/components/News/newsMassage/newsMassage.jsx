import react from 'react';
import store from '../../../Redux/state';
import cl from './NewsMassage.module.css';

const NewsMassage = (props) => {
    return(
        <div>
            <div className={cl.newsMassage}>
               {props.massage}
            </div>
        </div>
    )
}

export default NewsMassage;
