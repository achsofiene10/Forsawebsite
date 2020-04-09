import React from 'react'
import {Link} from 'react-router-dom'
import Messagebox from './Messagebox'
export default class ProfileBadge extends React.Component {
  constructor(props) {
    super(props)
    this.state={sent:false,openMsg:false}
  }
  

  sentButton=(user,index)=>{
    const clicked=this.state.sent
    if(!clicked){
    this.setState({sent:true})
    this.props.sendrequest(user,index)
    }
  }
  
  openDialogMsg=(e)=>{
    this.setState({openMsg:true})
  }
  closeDialog=()=>{
    this.setState({openMsg:false})
  }
  render() {
    let sent=false;
    if(this.props.userConnected){
      if(this.props.userConnected.SentRequests) {
     let index2=this.props.userConnected.SentRequests.findIndex(friend=> friend.iduser===this.props.user._id)
      if(index2>-1){
          sent=true
      }
    }}
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="company_profile_info">
          <div className="company-up-info">
            <img src={`../forsaRESTAPI/${this.props.user.image}`} style={{ width: '90px', height: '90px', borderRadius: '50%' }} alt="" />
            <h3>{this.props.user.fullname} </h3>
            <h4 style={{height:'14px'}}>{this.props.user.title}</h4>
            <ul>
    {!this.props.myfriends ? <div><li><Link to="# "  onClick={()=>this.sentButton(this.props.user,this.props.index)} className="follow">{this.state.sent || sent ? <h1>✅Sent</h1>:<h1>Connect</h1>}</Link></li>
              <li><Link to='#' onClick={this.openDialogMsg} className="message-us"><i className="fa fa-envelope" /></Link></li> </div> : <div>
              <li><Link to="# " className="message-us" onClick={()=>this.props.deleteFriend(this.props.user,this.props.index)}>Delete </Link></li>
              <li><Link to='#' onClick={this.openDialogMsg} className="message-us"><i className="fa fa-envelope" /></Link></li> </div> } 
              
            </ul>
          </div>
          <Link to={`/userprofile/${this.props.user._id}`} className="view-more-pro" >View Profile</Link>
        </div>{/*company_profile_info end*/}
        {this.state.openMsg ? <Messagebox close={this.closeDialog} userConnected={this.props.userConnected._id} userid={this.props.user._id} username={this.props.user.fullname}></Messagebox> : null }

      </div>
    )
  }
}