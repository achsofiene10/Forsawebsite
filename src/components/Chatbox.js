import React from 'react';
import axios from 'axios'
import jwt from 'jsonwebtoken'
import ConversatioBox from './ConversationBox';
import $ from 'jquery'
import { Link } from 'react-router-dom';
const URL = 'ws://localhost:3030'


export default class Chatbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: {},openedBalls:[],newmessage:'' }
  }
  ws = new WebSocket(URL)

  componentDidMount() {
    //  ============== ChatBox ============== 

    var gap = $(".container").offset().left;
    $(".cover-sec > a, .chatbox-list").css({
      "right": gap
    });

    $(".chat-mg").on("click", function () {
      $(this).next(".conversation-box").toggleClass("active");
      return false;
    });
    
    $(".close-chat").on("click", function () {
      $(".conversation-box").removeClass("active");
      return false;
    });
    var decode1;
    if (localStorage.getItem('token')) { decode1 = jwt.decode(localStorage.getItem('token')); }
    else { decode1 = jwt.decode(sessionStorage.getItem('token')); }
    //console.log(decode1)
    if (decode1) {
      axios.get(`http://localhost:3000/user/${decode1.user_id}/getProfile`).then(res => {
        this.setState({ user: res.data }
        )
      });
      axios.get(`http://localhost:3000/user/${decode1.user_id}/getOnlinefriends`).then(res => {
        this.setState({ Onlinefriends: res.data }
        )
      });
    } 
    this.ws.onmessage = evt => {  
      //console.log("message received", evt.data)
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(evt.data)
      if(message.idreceiver===this.state.user._id){
      this.Newmsg(message)}
  }
  }

  Newmsg=(friend)=>{
    const indexFriend=this.state.Onlinefriends.findIndex(_friend=> _friend.iduser===friend.idsender)
    const indexOpened=this.state.openedBalls.findIndex(_friend=> _friend.iduser===this.state.Onlinefriends[indexFriend].iduser)
    if(indexOpened==-1){
    this.setState({newmessage:friend})
    this.setState(state => ({ openedBalls: [...state.openedBalls,this.state.Onlinefriends[indexFriend]] })) }
  }

  addChat=(friend)=>{
    const index=this.state.openedBalls.findIndex(_friend=> _friend.iduser===friend.iduser)
    if(index==-1){
    this.setState(state => ({ openedBalls: [...state.openedBalls, friend] }))
    this.setState({newmessage:''}) } 
  }

  closeChat=(index)=>{
    const {openedBalls}=this.state;
    openedBalls.splice(index,1)
    this.setState({openedBalls:openedBalls})
  }

  render() {
    return (
      <div className="chatbox-list">
        { this.state.openedBalls ? this.state.openedBalls.map((ball,index)=> <ConversatioBox userConnected={this.state.user} key={index} index={index} newmsg={this.state.newmessage} Close={this.closeChat} friend={ball}></ConversatioBox> ):null }
        <div className="chatbox">
          <div className="chat-mg bx">
            <a href="# " ><img src="../images/chat.png" alt="" /></a>
         <span>{this.state.Onlinefriends ? this.state.Onlinefriends.length : 0}</span>
          </div>
          <div className="conversation-box">
            <div className="con-title">
              <h3>Discussion instantannée</h3>
              <a href="# " className="close-chat"><i className="la la-minus-square" /></a>
            </div>
            <div className="chat-list" style={{overflowY:'scroll'}}>
             {this.state.Onlinefriends ? this.state.Onlinefriends.map((friend,index)=><Link to='#' key={index} onClick={()=>this.addChat(friend)}><div  className="conv-list">
                <div className="cm_img">
                  <img src={`../forsaRESTAPI/${friend.imageFriend}`} alt="" />
                  <span className="active-status activee" />

                </div>
                <div className="usy-info">
              <h3>{friend.name}</h3>
                </div>
               
              </div></Link>):null }
              

            </div>{/*chat-list end*/}
          </div>{/*conversation-box end*/}
        </div>
      </div>
    )
  }
}