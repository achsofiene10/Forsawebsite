import React from 'react'
import {Link} from 'react-router-dom';
import Post from './Post'
import Infoprofile from './Infoprofile';
import Suggestions from './Suggestions';

export default class Profile extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
                    <div>
                      <section className="cover-sec">
                        <img src="../../images/resources/cover-img.jpg" alt="" />
                        <div className="add-pic-box">
                          <div className="container">
                            <div className="row no-gutters">
                              <div className="col-lg-12 col-sm-12">					
                                <input type="file" id="file" />
                                <label htmlFor="file">Change Image</label>				
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <div className="main-section">
                        <div className="container">
                          <div className="main-section-data">
                            <div className="row">
                              <div className="col-lg-3">
                                <div className="main-left-sidebar">
                                  <div className="user_profile">
                                    <div className="user-pro-img">
                                      <img src="../../images/resources/user-pro-img.png" alt="" />
                                      <div className="add-dp" id="OpenImgUpload">
                                        <input type="file" id="file" />
                                        <label htmlFor="file"><i className="fas fa-camera" /></label>												
                                      </div>
                                    </div>{/*user-pro-img end*/}
                                    <div className="user_pro_status">
                                      <ul className="flw-status">
                                        <li>
                                          <span>Connections</span>
                                          <b>34</b>
                                        </li>
                                        
                                      </ul>
                                    </div>{/*user_pro_status end*/}
                                    
                                  </div>{/*user_profile end*/}
                                  <Suggestions></Suggestions>
                                </div>{/*main-left-sidebar end*/}
                              </div>
                              <div className="col-lg-6">
                                <div className="main-ws-sec">
                                  <div className="user-tab-sec rewivew">
                                    <h3>John Doe</h3>
                                    <div className="star-descp">
                                      <span>Graphic Designer at Self Employed</span>
                                      
                                      
                                    </div>{/*star-descp end*/}
                                    <div className="tab-feed st2 settingjb">
                                      <ul>
                                        <li data-tab="feed-dd" className="active">
                                          <a href="#" >
                                            <img src="../images/ic1.png" alt="" />
                                            <span>Feed</span>
                                          </a>
                                        </li>
                                        <li data-tab="info-dd">
                                          <Link to="#" >
                                            <img src="../images/ic2.png" alt="" />
                                            <span>Info</span>
                                          </Link>
                                        </li>
                                        <li data-tab="saved-jobs">
                                          <a href="#" >
                                            <img src="../images/ic4.png" alt="" />
                                            <span>Jobs</span>
                                          </a>
                                        </li>
                                        
                                        
                                      </ul>
                                    </div>{/* tab-feed end*/}
                                  </div>{/*user-tab-sec end*/}
                                  <h5>Posts</h5>
                                  <br/>
                                  <div className="product-feed-tab current" id="feed-dd">
                                    <div className="posts-section">
                                      
                                      <Post></Post>
                                      
                                      <div className="process-comm">
                                        <div className="spinner">
                                          <div className="bounce1" />
                                          <div className="bounce2" />
                                          <div className="bounce3" />
                                        </div>
                                      </div>{/*process-comm end*/}
                                      
                                    </div>{/*posts-section end*/}
                                  </div>{/*product-feed-tab end*/}
                                  
                                  
                                  <div className="col-lg-3">
                                    <div className="right-sidebar">
                                      <Infoprofile></Infoprofile>
                                    </div>{/*right-sidebar end*/}
                                  </div>
                                </div>
                              </div>{/* main-section-data end*/}
                            </div> 
                          </div>
                        </div>
                        
                        
                        
                        
                      </div>{/*theme-layout end*/}
                    </div>
                 

        )
    }
}