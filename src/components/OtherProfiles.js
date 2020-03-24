import React from 'react'
import ProfileBadge from './ProfileBadge';
import axios from 'axios'
import jwt from 'jsonwebtoken'

export default class OtherProfiles extends React.Component{
    constructor(props){
        super(props);
        this.state={users:[],user:{}}
    }
    componentDidMount(){
      var decode1;
      if (localStorage.getItem('token'))
      { decode1 = jwt.decode(localStorage.getItem('token'));}
      else
      {decode1 = jwt.decode(sessionStorage.getItem('token'));}
      //console.log(decode1)
      if(decode1){
        axios.get(`http://localhost:3000/user/${decode1.user_id}/getProfile`).then(res => {
        this.setState({ user: res.data }
        )
      });
    axios.get(`http://localhost:3000/user/getOtherProfiles/${decode1.user_id}`).then(res=>{
        this.setState({users:res.data}
          )
    });
  }}

  sendrequest=(friend,index)=>{
    //e.preventDefault()
    const obj={
      friendname:friend.fullname,
      FriendImage:friend.image,
      MyImage:this.state.user.image,
      myname:this.state.user.fullname,
      mytitle:this.state.user.title,
      friendtitle:friend.title
    }
    console.log(obj,index)
    axios.post(`http://localhost:3000/friend/sendrequest/${friend._id}/${this.state.user._id}`,obj).then(res=>
    {
      console.log(res.status);
    }).catch(err => console.log(err))
  }

    render(){
      //console.log(this.state.users)
        return(
                    <section className="companies-info">
                      <div className="container">
                        <div className="company-title">
                          <h3>Other profiles</h3>
                        </div>{/*company-title end*/}
                        <div className="companies-list">
                          <div className="row">
                           {this.state.users ? this.state.users.map((user,index)=> <ProfileBadge sendrequest={this.sendrequest}user={user} key={index}></ProfileBadge> ):null}
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