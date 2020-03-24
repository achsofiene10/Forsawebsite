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
       //console.log(res.data)
       this.setState({user:res.data});
    });}
    axios.get(`http://localhost:3000/user/${decode1.user_id}/getFriendlist`).then(res=>{
      //console.log(res.data)
      this.setState({friends:res.data})
    })
  }
  deleteFriend=(friend,index)=>{
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
    axios.post(`http://localhost:3000/friend/deletefriend/${friend._id}/${this.state.user._id}`,obj).then(res=>
    {
      console.log(res.status);
      const {user}=this.state;
      user.ReceivedRequests.splice(index,1)
      this.setState({user:user})
    }).catch(err => console.log(err))
  }
    render(){
      const friends=this.state.friends
        return(
            <section className="companies-info">
                      <div className="container">
                        <div className="company-title">
                          <h3>My friendlist</h3>
                        </div>{/*company-title end*/}
                        <div className="companies-list">
                          <div className="row">
                            { friends ? friends.map((friend,index)=><ProfileBadge deleteFriend={this.deleteFriend} key={index} index={index} myfriends={true} user={friend}></ProfileBadge>):null  }
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