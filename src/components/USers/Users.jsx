import axios from "axios";
import React from "react";
import cl from './Users.module.css';
import userPhoto from '../../assats/img/userPhoto.png';

class Users extends React.Component {

 componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(Response => {
        this.props.setUsers(Response.data.items);
        // this.props.setToatalUsersCount(Response.data.totalCount);
    });
}

onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(Response => {
        this.props.setUsers(Response.data.items);
    });
}
    render() {

        let PagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for(let i = 1; i <= PagesCount; i++){
            pages.push(i);
        }


        return (
            <div className={cl.usersContainer}>
                <div>
                    {pages.map(p => {
                    return(

                        <span className={this.props.currentPage === p && cl.activePage} onClick={() => { this.onPageChanged(p) }}>{p}</span>
                    
                    )})}
                    
                </div>
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