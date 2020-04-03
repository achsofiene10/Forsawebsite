import React from 'react'
import jwt from 'jsonwebtoken'
import axios from 'axios'

const URL = 'ws://localhost:3030'

export default class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: {}, Activeconversation: [],Activeuser:{} }
    }
    ws = new WebSocket(URL)


    componentDidMount() {

        var decode1;
        if (localStorage.getItem('token')) { decode1 = jwt.decode(localStorage.getItem('token')); }
        else { decode1 = jwt.decode(sessionStorage.getItem('token')); }
        if (decode1) {
            axios.get(`http://localhost:3000/user/${decode1.user_id}/getProfile`).then(res => {
                this.setState({ user: res.data }, function () {
                    if (this.state.status == '') {
                        this.setState({ status: res.data.status })
                    }
                });
            })
            axios.get(`http://localhost:3000/message/getOthersMessages/${decode1.user_id}/7`).then(res => {
                this.setState({ messages: res.data })
                axios.get(`http://localhost:3000/message/getConversation/${decode1.user_id}/${res.data[0].user._id}/20`).then(res => {
                    this.setState({ Activeconversation: res.data })
                    //console.log(res.data)
                })
                axios.get(`http://localhost:3000/user/${res.data[0].user._id}/getProfile`).then(res => {
                    this.setState({ Activeuser: res.data })                 
                })
            });

        }
        this.ws.onmessage = evt => {
           
            const message = JSON.parse(evt.data)
            if((message.idreceiver===this.state.user._id) &&(message.idsender==this.state.Activeuser._id)){
                this.setState(state => ({ Activeconversation: [...state.Activeconversation, message] }))
            }
        }
    }

    componentDidUpdate() {

        const objDiv = document.getElementById('div1');
        objDiv.scrollTop = objDiv.scrollHeight;

    }


    openConversation=(user)=>{
        axios.get(`http://localhost:3000/message/getConversation/${this.state.user._id}/${user._id}/20`).then(res => {
                this.setState({ Activeconversation: res.data })
                this.setState({Activeuser:user})
        })
    }
    sendMsg=(e)=>{
        e.preventDefault()
        const msg=this.refs.msg.value;
        const message = { message: msg, idsender: this.state.user._id,idreceiver:this.state.Activeuser._id,date: new Date().toDateString() }
        this.setState(state => ({ Activeconversation: [...state.Activeconversation, message] }))
        this.ws.send(JSON.stringify(message))
        this.refs.msg.value="";
    }

    render() {
        const {Activeconversation}=this.state;
        console.log(Activeconversation)
        return (

            <section className="messages-page">
                <div className="container">
                    <div className="messages-sec">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 no-pdd">
                                <div className="msgs-list">
                                    <div className="msg-title">
                                        <h3>Messages</h3>
                                        <ul>
                                            <li><a href="#" ><i className="fa fa-cog" /></a></li>
                                            <li><a href="#" ><i className="fa fa-ellipsis-v" /></a></li>
                                        </ul>
                                    </div>{/*msg- end*/}
                                    <div className="messages-list" >
                                        <ul>
                                            {this.state.messages ? this.state.messages.map((message, index) =>
                                                <li key={index} onClick={()=>this.openConversation(message.user)} >
                                                    <div className="usr-msg-details">
                                                        <div className="usr-ms-img">
                                                            <img src={`../forsaRESTAPI/${message.user.image}`} style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt="" />
                                                            <span className="msg-status" />
                                                        </div>
                                                        <div className="usr-mg-info">
                                                            <h3>{message.user.fullname}</h3>
                                                            <p>{message.message.message.message} </p>
                                                        </div>{/*usr-mg-info end*/}
                                                        <span className="posted_time">{message.message.message.date}</span>
                                                        {/*<span className="msg-notifc">1</span>*/}
                                                    </div>{/*usr-msg-details end*/}
                                                </li>) : null}

                                        </ul>
                                    </div>{/*messages-list end*/}
                                </div>{/*msgs-list end*/}
                            </div>
                            
                            <div className="col-lg-8 col-md-12 pd-right-none pd-left-none">
                            {this.state.Activeconversation ? 
                                <div className="main-conversation-box">
                                    <div className="message-bar-head">
                                        <div className="usr-msg-details">
                                            <div className="usr-ms-img">
                                                <img src={`../forsaRESTAPI/${this.state.Activeuser.image}`} style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt="" />
                                            </div>
                                            <div className="usr-mg-info">
                                                <h3></h3>
                                                {this.state.Activeuser.status==0 ?<p>Offline</p> :<p>Online</p> }
                                            </div>{/*usr-mg-info end*/}
                                        </div>
                                        <a href="#" ><i className="fa fa-ellipsis-v" /></a>
                                    </div>{/*message-bar-head end*/}
                                    <div className="messages-line" style={{overflowY:'scroll'}} id="div1">
                                    {Activeconversation.length>0 ? Activeconversation.map((message, index) =>  { if (message.idsender==this.state.user._id)
                                        return (<div key={index} className="main-message-box ta-right">
                                             <div className="message-dt">
                                               <div className="message-inner-dt">
                                                 <p>{message.message}</p>
                                                </div>
                                                <span>{message.date}</span>
                                            </div>
                                            <div className="messg-usr-img">
                                                <img src={`../forsaRESTAPI/${this.state.user.image}`} style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt="" />
                                            </div>
                                        </div>)
                                        return (<div key={index} className="main-message-box st3">
                                            <div className="message-dt st3">
                                                <div className="message-inner-dt">
                                                    <p>{message.message}</p>
                                                </div>
                                                <span>{message.date}</span>
                                            </div>
                                            <div className="messg-usr-img">
                                                <img src={`../forsaRESTAPI/${this.state.Activeuser.image}`}  style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt="" />
                                            </div>
                                    </div>)}):null}
                                    </div>{/*messages-line end*/}
                                    <div className="message-send-area">
                                        <form>
                                            <div className="mf-field">
                                                <input ref="msg" type="text" name="message" placeholder="Type a message here" />
                                                <button onClick={this.sendMsg} type="submit">Send</button>
                                            </div>
                                            <ul>
                                                <li><a href="#" ><i className="fa fa-smile-o"></i></a></li>
                                                <li><a href="#" ><i className="fa fa-camera"></i></a></li>
                                                <li><a href="#" ><i className="fa fa-paperclip"></i></a></li>
                                            </ul>
                                        </form>
                                    </div>{/*message-send-area end*/}
                                </div>:null}
                            </div>
                        </div>
                    </div>{/*messages-sec end*/}
                </div>
            </section>
        )
    }
}