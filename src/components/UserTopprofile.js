import React from 'react';
import { Link } from 'react-router-dom';

export default class UserTopprofile extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="user-profy">
                              <img src={`../forsaRESTAPI/${this.props.user.image}`} style={{ width: '57px', height: '57px', borderRadius: '50%' }} alt="" />
                              <h3>{this.props.user.fullname}</h3>
        <span>{this.props.user.title}</span>
                              <ul>
                                <li><a href="# "className="envlp"><img src="../images/envelop.png" alt="" /></a></li>
                              </ul>
                              <Link to={`/userprofile/${this.props.user._id}`} >View Profile</Link>
            </div>
        )
    }
}