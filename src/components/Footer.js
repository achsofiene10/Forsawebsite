import React from 'react';

export default class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <footer>
        <div className="footy-sec mn no-margin">
          <div className="container">
            <ul>
              <li><a href="help-center.html" >Help Center</a></li>
              <li><a href="about.html" >About</a></li>
              <li><a href="# " >Privacy Policy</a></li>
              <li><a href="# " >Community Guidelines</a></li>
              <li><a href="# " >Cookies Policy</a></li>
              <li><a href="# " >Career</a></li>
              <li><a href="forum.html" >Forum</a></li>
              <li><a href="# " >Language</a></li>
              <li><a href="# " >Copyright Policy</a></li>
            </ul>
            <img className="fl-rgt" src="../images/logo2.png" alt="" />
            <p><img src="images/copy-icon2.png" alt="" />Copyright 2019</p>

          </div>
        </div>
      </footer>
        )
    }
}