import React from 'react'
import {Link} from 'react-router-dom'
export default class ProfileBadge extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (

      <div className="col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="company_profile_info">
          <div className="company-up-info">
            <img src={`../forsaRESTAPI/${this.props.user.image}`} alt="" />
            <h3>{this.props.user.fullname} </h3>
            <h4>{this.props.user.title}</h4>
            <ul>
              {!this.props.myfriends ? <div><li><Link to="# " onClick={()=>this.props.sendrequest(this.props.user,this.props.index)} className="follow">Connect</Link></li>
              <li><a href="#" className="message-us"><i className="fa fa-envelope" /></a></li> </div> : <div>
              <li><Link to="# " className="message-us" onClick={()=>this.props.deleteFriend(this.props.user,this.props.index)}>Delete </Link></li>
              <li><a href="#" className="message-us"><i className="fa fa-envelope" /></a></li></div> } 
              
            </ul>
          </div>
          <Link to={`/userprofile/${this.props.user._id}`} className="view-more-pro" >View Profile</Link>
        </div>{/*company_profile_info end*/}
      </div>
    )
  }
}