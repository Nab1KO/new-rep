import React from "react";
import cl from './Massage.module.css';
import { NavLink } from "react-router-dom";

const Massage = (props) => {

    let TextElement = React.createRef();

    let sendBut = () => {
        let txt =  TextElement.current.value;
        alert(txt);
    }
    return (
        <div className={cl.massage}>
            <textarea ref = {TextElement}></textarea><br />
            <button onClick={sendBut}>send</button>
        </div>
    )
}

export default Massage;