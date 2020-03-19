import React from 'react'

export default class ProfileBadge extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                              <div className="company_profile_info">
                                <div className="company-up-info">
                                  <img src="../images/resources/pf-icon2.png" alt="" />
                                  <h3>Mootaz </h3>
                                  <h4>Graphic Designer</h4>
                                  <ul>
                                    <li><a href="#" className="follow">Follow</a></li>
                                    <li><a href="#" className="message-us"><i className="fa fa-envelope" /></a></li>
                                    <li><a href="#" className="hire-us">Hire</a></li>
                                  </ul>
                                </div>
                                <a href="user-profile.html" className="view-more-pro">View Profile</a>
                               </div>{/*company_profile_info end*/}
             </div>
        )
    }
}