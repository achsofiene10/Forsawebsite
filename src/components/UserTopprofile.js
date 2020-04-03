import React from 'react';
import { Link } from 'react-router-dom';
import Messagebox from './Messagebox';

export default class UserTopprofile extends React.Component{
    constructor(props){
        super(props);
        this.state={openMsg:false}
    }
    
  openDialogMsg=(e)=>{
    this.setState({openMsg:true})
  }
  closeDialog=()=>{
    this.setState({openMsg:false})
  }

    render(){
        return(
            <div className="user-profy">
                              <img src={`../forsaRESTAPI/${this.props.user.image}`} style={{ width: '57px', height: '57px', borderRadius: '50%' }} alt="" />
                              <h3>{this.props.user.fullname}</h3>
                                <span>{this.props.user.title}</span>
                              <ul>
                                <li><Link to='#' onClick={this.openDialogMsg} className="envlp"><img src="../images/envelop.png" alt="" /></Link></li>
                              </ul>
                              <Link to={`/userprofile/${this.props.user._id}`} >View Profile</Link>
                              {this.state.openMsg ? <Messagebox close={this.closeDialog} userConnected={this.props.userConnected._id} userid={this.props.user._id} username={this.props.user.fullname}></Messagebox> : null }
            </div>  
        )
    }
}