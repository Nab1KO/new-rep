import React from "react";
import cl from './Users.module.css';

const Users = (props) => {
    // if(props.users.length === 0) {
    //         props.SETUSERS( users [
    //             { id: 1, photoUrl: 'https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg', 
    //                     firstName: 'luka', folowed:false, status: 'hello fellas wasssup', location: {city: 'Tbilisi', country: 'Georgia'}},
    //             { id: 2, photoUrl: 'https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg', 
    //                     firstName: 'zaza', folowed:true, status: 'hello fellas im zaza', location: {city: 'Tbilisi', country: 'Georgia'}},
    //             { id: 3, photoUrl: 'https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg', 
    //                     firstName: 'dato', folowed:true, status: 'wasssup zaza ?', location: {city: 'Tbilisi', country: 'Georgia'}},
    //             { id: 4, photoUrl: 'https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg', 
    //                     firstName: 'dima', folowed:false, status: 'im actualy doing something', location: {city: 'Tbilisi', country: 'Georgia'}},
    //             { id: 5, photoUrl: 'https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg', 
    //                     firstName: 'achiko', folowed:true, status: 'i know how to drive a car', location: {city: 'Tbilisi', country: 'Georgia'}}
    //             ]
    //         )
    //  }
     
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} alt="profilePhoto" className={cl.avaImg} />
                        </div>
                        <div>
                           { u.folowed ? 
                           <button onClick={ () => {props.UNFOLLOW(u.id)} }>UNFOLLOW</button> : 
                           <button onClick={ () => {props.FOLLOW(u.id)} }>FOLLOW</button> }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.firstName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;