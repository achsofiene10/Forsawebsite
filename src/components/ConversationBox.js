import React from 'react';
import $ from 'jquery'
import axis from 'jquery'

const URL = 'ws://localhost:3030'


export default class ConversatioBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '', messages: [],active:''
        }
    }

    ws = new WebSocket(URL)

    componentDidMount() {
        
        this.ws.onopen = () => {
            // on connecting, do nothing but log it to the console
            console.log('connected')
        }

        this.ws.onmessage = evt => {
           
            //console.log("message received", evt.data)
            // on receiving a message, add it to the list of messages
            const message = JSON.parse(evt.data)
            if(message.idreceiver===this.props.userConnected._id){
            this.addMessage(message)}
        }
        this.ws.onclose = () => {
            console.log('disconnected')
            // automatically try to reconnect on connection loss
            this.setState({
                ws: new WebSocket(URL),
            })
        }
    }

    addMessage = message =>
        this.setState(state => ({ messages: [...state.messages, message] }))

    onSubmitMessage = messageString => {
        // on submitting the ChatInput form, send the message, add it to the list and reset the input
        const message = { message: messageString, idsender: this.props.userConnected._id,idreceiver:this.props.friend.iduser,date: new Date().toDateString() }
        this.ws.send(JSON.stringify(message))
        this.addMessage(message)
        console.log(this.state.messages)
    }
    onKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            if (this.state.message != '') {
                this.onSubmitMessage(this.state.message); this.setState({ message: '' })
            }
        }
    }

    openball=(e)=>{
        e.preventDefault();
        const active=this.state.active
        if(active){
            this.setState({active:''})
        }
        else{
            this.setState({active:'active'})
        }
    }


    render() {
        return (
            <div className="chatbox">
                <div className="chat-mg" onClick={this.openball}>
                    <a href="# " ><img src={`../forsaRESTAPI/${this.props.friend.imageFriend}`} alt="" /></a>
                    <span>25</span>
                </div>

                <div className={`conversation-box ${this.state.active}`}>
                    <div className="con-title mg-3">
                        <div className="chat-user-info">
                            <img src={`../forsaRESTAPI/${this.props.friend.imageFriend}`} style={{width: '30px', height: '30px',borderRadius:'50%'}} alt="" />
                            <h3>{this.props.friend.name} <span className="status-info" /></h3>
                        </div>
                        <div className="st-icons">
                            <a href="# " onClick={this.openball}><i className="la la-minus-square" /></a>
                            <a href="# " onClick={()=>this.props.Close(this.props.index)}><i className="la la-close" /></a>
                        </div>
                    </div>
                    <div className="chat-hist" style={{overflowY:'scroll'}} data-mcs-theme="dark">
                        <ul>
                            {/*<li className="chat-msg">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.</p>
                    <span>Sat, Aug 23, 1:10 PM</span>
                  </li>
                  
                  <li className="chat-msg st2">
                    <p>Cras ultricies ligula.</p>
                    <span>5 minutes ago</span>
                              </li>*/}
                            {this.props.newmsg ?<li className="chat-msg st2">
                                 <p>{this.props.newmsg.message}</p>
                                 <span>{this.props.newmsg.date}</span>
                            </li> :null}
                            {this.state.messages.map((message, index) =>  { if (message.idsender==this.props.userConnected._id)
                                return <li key={index} className="chat-msg">
                                <p>{message.message}</p>
                                <span>{message.date}</span>
                                 </li> 
                                 return <li key={index} className="chat-msg st2">
                                 <p>{message.message}</p>
                                 <span>{message.date}</span>
                            </li> } )}

                        </ul>
                    </div>{/*chat-list end*/}
                    <div className="typing-msg">
                        <form onSubmit={e => { e.preventDefault(); this.onSubmitMessage(this.state.message); this.setState({ message: '' }) }}>
                            <textarea onKeyDown={this.onKeyDown} type="text" placeholder={'Enter message...'} value={this.state.message} onChange={e => this.setState({ message: e.target.value })} />
                            <button type="submit" ><i className="fa fa-send" /></button>
                        </form>

                        <ul className="ft-options">
                        </ul>
                    </div>{/*typing-msg end*/}
                </div>
            </div>
        )
    }
}