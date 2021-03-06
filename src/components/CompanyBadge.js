import React from 'react';
import {Link } from 'react-router-dom';


export default class CompanyBadge extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="company_profile_info">
                  <div className="company-up-info">
                    <img src={`../forsaRESTAPI/${this.props.company.image}`} style={{width: '91px', height: '91px',borderRadius:'50%'}} alt="" />
                     <h3>{this.props.company.fullname}</h3> 
                    <h4>Establish {this.props.company.foundationDate}</h4>
                    <ul>
                      <li><a href="# " className="follow">Follow</a></li>
                      <li><a href="# " className="message-us"><i className="fa fa-envelope" /></a></li>
                    </ul>
                  </div>
                  <Link  to={`/profile/${this.props.company._id}`} className="view-more-pro">View Profile</Link>
                </div>{/*company_profile_info end*/}
              </div>
        )
    }
}