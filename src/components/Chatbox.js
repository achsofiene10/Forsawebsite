import React from 'react';
import axios from 'axios'
import jwt from 'jsonwebtoken'

export default class Chatbox extends React.Component{
    constructor(props){
        super(props);
        this.state={user:{}}
    }

    componentDidMount(){
      var decode1;
    if (localStorage.getItem('token'))
    { decode1 = jwt.decode(localStorage.getItem('token'));}
    else
    {decode1 = jwt.decode(sessionStorage.getItem('token'));}
    //console.log(decode1)
    if(decode1){
      axios.get(`http://localhost:3000/user/${decode1.user_id}/getProfile`).then(res=>{
        this.setState({user:res.data}
          )
    });
      axios.get(`http://localhost:3000/user/${decode1.user_id}/getOnlinefriends`).then(res=>{
        this.setState({Onlinefriends:res.data}
          )
    });
    }
  }
    render(){
      console.log(this.state.Onlinefriends)
        return(
            <div className="chatbox-list">
            <div className="chatbox">
              <div className="chat-mg">
                <a href="# " ><img src="../images/resources/usr-img1.png" alt="" /></a>
                <span>2</span>
              </div>
              <div className="conversation-box">
                <div className="con-title mg-3">
                  <div className="chat-user-info">
                    <img src="../images/resources/us-img1.png" alt="" />
                    <h3>John Doe <span className="status-info" /></h3>
                  </div>
                  <div className="st-icons">
                    <a href="# " ><i className="la la-cog" /></a>
                    <a href="# " className="close-chat"><i className="la la-minus-square" /></a>
                    <a href="# " className="close-chat"><i className="la la-close" /></a>
                  </div>
                </div>
                <div className="chat-hist mCustomScrollbar" data-mcs-theme="dark">
                  <div className="chat-msg">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.</p>
                    <span>Sat, Aug 23, 1:10 PM</span>
                  </div>
                  <div className="date-nd">
                    <span>Sunday, August 24</span>
                  </div>
                  <div className="chat-msg st2">
                    <p>Cras ultricies ligula.</p>
                    <span>5 minutes ago</span>
                  </div>
                  <div className="chat-msg">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.</p>
                    <span>Sat, Aug 23, 1:10 PM</span>
                  </div>
                </div>{/*chat-list end*/}
                <div className="typing-msg">
                  <form>
                    <textarea placeholder="Type a message here" defaultValue={""} />
                    <button type="submit"><i className="fa fa-send" /></button>
                  </form>
                  <ul className="ft-options">
                    <li><a href="# " ><i className="la la-smile-o" /></a></li>
                    <li><a href="# " ><i className="la la-camera" /></a></li>
                    <li><a href="# " ><i className="fa fa-paperclip" /></a></li>
                  </ul>
                </div>{/*typing-msg end*/}
              </div>{/*chat-history end*/}
            </div>
            <div className="chatbox">
              <div className="chat-mg">
                <a href="# " ><img src="../images/resources/usr-img2.png" alt="" /></a>
              </div>
              <div className="conversation-box">
                <div className="con-title mg-3">
                  <div className="chat-user-info">
                    <img src="../images/resources/us-img1.png" alt="" />
                    <h3>John Doe <span className="status-info" /></h3>
                  </div>
                  <div className="st-icons">
                    <a href="# " ><i className="la la-cog" /></a>
                    <a href="# " className="close-chat"><i className="la la-minus-square" /></a>
                    <a href="# " className="close-chat"><i className="la la-close" /></a>
                  </div>
                </div>
                <div className="chat-hist mCustomScrollbar" data-mcs-theme="dark">
                  <div className="chat-msg">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.</p>
                    <span>Sat, Aug 23, 1:10 PM</span>
                  </div>
                  <div className="date-nd">
                    <span>Sunday, August 24</span>
                  </div>
                  <div className="chat-msg st2">
                    <p>Cras ultricies ligula.</p>
                    <span>5 minutes ago</span>
                  </div>
                  <div className="chat-msg">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.</p>
                    <span>Sat, Aug 23, 1:10 PM</span>
                  </div>
                </div>{/*chat-list end*/}
                <div className="typing-msg">
                  <form>
                    <textarea placeholder="Type a message here" defaultValue={""} />
                    <button type="submit"><i className="fa fa-send" /></button>
                  </form>
                  <ul className="ft-options">
                    <li><a href="# " ><i className="la la-smile-o" /></a></li>
                    <li><a href="# " ><i className="la la-camera" /></a></li>
                    <li><a href="# " ><i className="fa fa-paperclip" /></a></li>
                  </ul>
                </div>{/*typing-msg end*/}
              </div>{/*chat-history end*/}
            </div>
            <div className="chatbox">
              <div className="chat-mg bx">
                <a href="# " ><img src="../images/chat.png" alt="" /></a>
                <span>2</span>
              </div>
              <div className="conversation-box">
                <div className="con-title">
                  <h3>Messages</h3>
                  <a href="# " className="close-chat"><i className="la la-minus-square" /></a>
                </div>
                <div className="chat-list">
                  <div className="conv-list active">
                      <div className="cm_img">
                      <img src="../images/resources/usy1.png" alt="" />
                      <span className="active-status activee" />
                    </div>
                    <div className="usy-info">
                      <h3>John Doe</h3>
                      <span>Lorem ipsum dolor <img src="../images/smley.png" alt="" /></span>
                    </div>
                    <div className="ct-time">
                      <span>1:55 PM</span>
                    </div>
                    <span className="msg-numbers">2</span>
                  </div>
                  <div className="conv-list">
                    <div className="cm_img">  
                      <img src="../images/resources/usy2.png" alt="" />
                    </div>
                    <div className="usy-info">
                      <h3>John Doe</h3>
                      <span>Lorem ipsum dolor <img src="../images/smley.png" alt="" /></span>
                    </div>
                    <div className="ct-time">
                      <span>11:39 PM</span>
                    </div>
                  </div>
                  
                </div>{/*chat-list end*/}
              </div>{/*conversation-box end*/}
            </div>
          </div>
        )
    }
}