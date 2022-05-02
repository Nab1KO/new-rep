import axios from "axios";
import React from "react";
import cl from './Users.module.css';
import userPhoto from '../../assats/img/userPhoto.png';

class Users extends React.Component {

 componentDidMount(){
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(Response => {
        this.props.setUsers(Response.data.items);
    });
}
    render() {
        return (
            <div className={cl.usersContainer}>
                {
                    this.props.users.map((u, idx) => <div key={idx}>
                        <span>
                            <div>
                                <img src={ u.photos.small != null ? u.photos.small : userPhoto } alt="profilePhoto" className={cl.avaImg} />
                            </div>
                            <div>
                               { u.folowed ? 
                               <button onClick={ () => {this.props.UNFOLLOW(u.id)} }>UNFOLLOW</button> : 
                               <button onClick={ () => {this.props.FOLLOW(u.id)} }>FOLLOW</button> }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </span>
                        </span>
                    </div>)
                }
            </div>
        )
    }
}

export default Users; 