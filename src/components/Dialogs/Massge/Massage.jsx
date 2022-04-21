import React from "react";
import cl from './Massage.module.css';

const Massage = (props) => {
    return (
        <div className={cl.massage}>
            <span>{props.massage}</span>
        </div>
    )
}

export default Massage;