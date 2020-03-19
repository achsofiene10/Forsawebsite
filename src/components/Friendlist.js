import React from 'react'
import ProfileBadge from './ProfileBadge';
import jwt from 'jsonwebtoken'
import axios from 'axios'

export default class Friendlist extends React.Component{
    constructor(props){
        super(props);
        this.state={user:{}}
    }
    componentDidMount(){
      var decode1;
    if (localStorage.getItem('token'))
    { decode1 = jwt.decode(localStorage.getItem('token'));}
    else
    { decode1 = jwt.decode(sessionStorage.getItem('token'));}
    if(decode1){
     axios.get(`http://localhost:3000/user/${decode1.user_id}/getProfile`).then(res=>{
       this.setState({user:res.data});
    });}

  }
    render(){
      console.log(this.state.user.friendlist)
        return(
            <section className="companies-info">
                      <div className="container">
                        <div className="company-title">
                          <h3>My friendlist</h3>
                        </div>{/*company-title end*/}
                        <div className="companies-list">
                          <div className="row">
                            <ProfileBadge></ProfileBadge>
                          </div>
                        </div>{/*companies-list end*/}
                        <div className="process-comm">
                          <div className="spinner">
                            <div className="bounce1" />
                            <div className="bounce2" />
                            <div className="bounce3" />
                          </div>
                        </div>{/*process-comm end*/}
                      </div>
             </section>
        )
    }
}