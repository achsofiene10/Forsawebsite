import React from 'react';
import {Link} from 'react-router-dom';
import jwt from 'jsonwebtoken';
import axios from 'axios'

export default class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.state={user:{}}
  }

  componentDidMount(){
    if (localStorage.getItem('token'))
    {var decode1 = jwt.decode(localStorage.getItem('token'));}
    else
    {var decode1 = jwt.decode(sessionStorage.getItem('token'));}
    if(decode1){
     axios.get(`http://localhost:3000/user/${decode1.user_id}/getProfile`).
    then(res=>{
       this.setState({user:res.data}, function () {
        //console.log(this.state.user);
    });})}
  }
    render(){
        return (
            <div>
                <header>
        <div className="container">
          <div className="header-data">
            <div className="logo">
              <a  ><img src="images/logo.png" alt="" /></a>
            </div>{/*logo end*/}
            <div className="search-bar">
              <form>
                <input type="text" name="search" placeholder="Search..." />
                <button type="submit"><i className="la la-search" /></button>
              </form>
            </div>{/*search-bar end*/}
            <nav>
              <ul>
                <li>
                  <Link to="/acceuil">
                  
                    <span><img src="images/icon1.png" alt="" /></span>
                    Home
                  </Link>
                </li>
                <li>
                    <Link to='/compagnies'>
                  
                    <span><img src="images/icon2.png" alt="" /></span>
                    Companies
                  </Link>
                  <ul>
                  <Link to='/compagnies'> <li> Companies</li></Link>
                  <Link to='/compagnies:id'> <li>Company Profile</li></Link>
                  </ul>
                </li>
                <li>
                <Link to='/projects'> 
                  
                    <span><img src="images/icon3.png" alt="" /></span>
                    Projects
                  </Link>
                </li>
                <li>
                  
                  <Link to='/profile'> 
                    <span><img src="images/icon4.png" alt="" /></span>
                    Profiles</Link>
                  
                  <ul>
                  
                    <li><Link to='/profile'> User Profile</Link></li>
                    <Link to='/profile'>   <li>my-profile-feed</li></Link>
                  </ul>
                </li>
                <li>
                <Link to='/jobs'>
                    <span><img src="images/icon5.png" alt="" /></span>
                    Jobs
                  </Link>
                </li>
                <li>
                  
                  <Link  to='#' className="not-box-openm">
                    <span><img src="images/icon6.png" alt="" /></span>
                    Messages
                  </Link>
                  <div className="notification-box msg" id="message">
                    <div className="nt-">
                      <h4 />
                      
                    </div>
                    <div className="nott-list">
                      <div className="notfication-details">
                        <div className="noty-user-img">
                          <img src="images/resources/ny-img1.png" alt="" />
                        </div>
                        <div className="notification-info">
                          <h3><a  >Jassica William</a> </h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</p>
                          <span>2 min ago</span>
                        </div>{/*notification-info */}
                      </div>
                      <div className="notfication-details">
                        <div className="noty-user-img">
                          <img src="images/resources/ny-img2.png" alt="" />
                        </div>
                        <div className="notification-info">
                          <h3><a  >Jassica William</a></h3>
                          <p>Lorem ipsum dolor sit amet.</p>
                          <span>2 min ago</span>
                        </div>{/*notification-info */}
                      </div>
                      <div className="notfication-details">
                        <div className="noty-user-img">
                          <img src="images/resources/ny-img3.png" alt="" />
                        </div>
                        <div className="notification-info">
                          <h3><a  >Jassica William</a></h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua.</p>
                          <span>2 min ago</span>
                        </div>{/*notification-info */}
                      </div>
                      <div className="view-all-nots">
                        <a  >View All Messsages</a>
                      </div>
                    </div>{/*nott-list end*/}
                  </div>{/*notification-box end*/}
                </li>
                <li>
                  <Link to='#'   className="not-box-open">
                    <span><img src="images/icon7.png" alt="" /></span>
                    Notification
                  </Link>
                  <div className="notification-box noti" id="notification">
                    <div className="nt-">
                      <h4 />
                    </div>
                    <div className="nott-list">
                      <div className="notfication-details">
                        <div className="noty-user-img">
                          <img src="images/resources/ny-img1.png" alt="" />
                        </div>
                        <div className="notification-info">
                          <h3><a  >Jassica William</a> Comment on your project.</h3>
                          <span>2 min ago</span>
                        </div>{/*notification-info */}
                      </div>
                      <div className="notfication-details">
                        <div className="noty-user-img">
                          <img src="images/resources/ny-img2.png" alt="" />
                        </div>
                        <div className="notification-info">
                          <h3><a  >Jassica William</a> Comment on your project.</h3>
                          <span>2 min ago</span>
                        </div>{/*notification-info */}
                      </div>
                      <div className="notfication-details">
                        <div className="noty-user-img">
                          <img src="images/resources/ny-img3.png" alt="" />
                        </div>
                        <div className="notification-info">
                          <h3><a  >Jassica William</a> Comment on your project.</h3>
                          <span>2 min ago</span>
                        </div>{/*notification-info */}
                      </div>
                      <div className="notfication-details">
                        <div className="noty-user-img">
                          <img src="images/resources/ny-img3.png" alt="" />
                        </div>
                        <div className="notification-info">
                          <h3><a  >Jassica William</a> Comment on your project.</h3>
                          <span>2 min ago</span>
                        </div>{/*notification-info */}
                      </div><div className="notfication-details">
                        <div className="noty-user-img">
                          <img src="images/resources/ny-img3.png" alt="" />
                        </div>
                        <div className="notification-info">
                          <h3><a  >Jassica William</a> Comment on your project.</h3>
                          <span>2 min ago</span>
                        </div>{/*notification-info */}
                      </div>
                      <div className="notfication-details">
                        <div className="noty-user-img">
                          <img src="images/resources/ny-img2.png" alt="" />
                        </div>
                        <div className="notification-info">
                          <h3><a  >Jassica William</a> Comment on your project.</h3>
                          <span>2 min ago</span>
                        </div>{/*notification-info */}
                      </div>
                      <div className="view-all-nots">
                        <a  >View All Notification</a>
                      </div>
                    </div>{/*nott-list end*/}
                  </div>{/*notification-box end*/}
                </li>
              </ul>
            </nav>{/*nav end*/}
            <div className="menu-btn">
              <a  ><i className="fa fa-bars" /></a>
            </div>{/*menu-btn end*/}
            <div className="user-account">
              <div className="user-info">
                <img src={this.state.user.image} alt="" />
                <Link to="#" >{this.state.user.fullname}</Link>
                <i className="la la-sort-down" />
              </div>
              <div className="user-account-settingss" id="users">
                <h3>Online Status</h3>
                <ul className="on-off-status">
                  <li>
                    <div className="fgt-sec">
                      <input type="radio" name="cc" id="c5" />
                      <label htmlFor="c5">
                        <span />
                      </label>
                      <small>Online</small>
                    </div>
                  </li>
                  <li>
                    <div className="fgt-sec">
                      <input type="radio" name="cc" id="c6" />
                      <label htmlFor="c6">
                        <span />
                      </label>
                      <small>Offline</small>
                    </div>
                  </li>
                </ul>
                <h3>Custom Status</h3>
                <div className="search_form">
                  <form>
                    <input type="text" name="search" />
                    <button type="submit">Ok</button>
                  </form>
                </div>{/*search_form end*/}
                <h3>Setting</h3>
                <ul className="us-links">
                  <li><Link to='#' >Account Setting</Link></li>
                </ul>
                <h3 className="tc" onClick={this.props.Logout}><Link to="/" >Logout</Link></h3>
              </div>{/*user-account-settingss end*/}
            </div>
          </div>{/*header-data end*/}
        </div>
      </header>{/*header end*/}
            </div>
      
      
    
        )
    }
}