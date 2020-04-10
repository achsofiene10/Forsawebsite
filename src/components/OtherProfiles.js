import React from 'react'
import ProfileBadge from './ProfileBadge';
import axios from 'axios'
import jwt from 'jsonwebtoken'
const URL = 'ws://localhost:3030'

export default class OtherProfiles extends React.Component{
    constructor(props){
        super(props);
        this.state={users:[],user:{}}
    }
     ws = new WebSocket(URL)

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
  } 

}

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
    const message = { message: `${this.state.user.fullname} sent you a connection request`, idsender: this.state.user._id,idreceiver:friend._id,date: new Date().toDateString(),idpost:'',idrequest:"x" }
    this.ws.send(JSON.stringify(message))
    axios.post(`http://localhost:3000/friend/sendrequest/${friend._id}/${this.state.user._id}`,obj).then(res=>
    {
      console.log(res.status);
    }).catch(err => console.log(err))
  }

    render(){
      
        return(
                    <section className="companies-info">
                      <div className="container">
                        <div className="company-title">
                          <h3>Other profiles</h3>
                        </div>{/*company-title end*/}
                        <div className="companies-list">
                          <div className="row">
                           {this.state.users ? this.state.users.map((user,index)=> <ProfileBadge sendrequest={this.sendrequest} userConnected={this.state.user} user={user} key={index}></ProfileBadge> ):null}
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