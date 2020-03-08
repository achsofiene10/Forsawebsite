import React from 'react';

export default class UserTopprofile extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="user-profy">
                              <img src="../images/resources/user2.png" alt="" />
                              <h3>John Doe</h3>
                              <span>2</span>
                              <ul>
                                <li><a href="# "className="followw">Follow</a></li>
                                <li><a href="# "className="envlp"><img src="../images/envelop.png" alt="" /></a></li>
                                <li><a href="# "className="hire">hire</a></li>
                              </ul>
                              <a href="# " >View Profile</a>
            </div>
        )
    }
}