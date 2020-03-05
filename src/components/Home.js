import React from 'react' ;
import Navbar from './Navbar';

export default class Home extends React.Component{
    render (){
        return (
            <div>
        <main>
          <div className="main-section">
            <div className="container">
              <div className="main-section-data">
                <div className="row">
                  <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                    <div className="main-left-sidebar no-margin">
                      <div className="user-data full-width">
                        <div className="user-profile">
                          <div className="username-dt">
                            <div className="usr-pic">
                              <img src="images/resources/user-pic.png" alt="" />
                            </div>
                          </div>{/*username-dt end*/}
                          <div className="user-specs">
                            <h3>John Doe</h3>
                            <span>Graphic Designer at Self Employed</span>
                          </div>
                        </div>{/*user-profile end*/}
                        <ul className="user-fw-status">
                          <li>
                            <h4>Following</h4>
                            <span>34</span>
                          </li>
                          <li>
                            <h4>Followers</h4>
                            <span>155</span>
                          </li>
                          <li>
                            <a href="http://www.gambolthemes.net/workwise-new/my-profile.html" title>View Profile</a>
                          </li>
                        </ul>
                      </div>{/*user-data end*/}
                      <div className="suggestions full-width">
                        <div className="sd-title">
                          <h3>Suggestions</h3>
                          <i className="la la-ellipsis-v" />
                        </div>{/*sd-title end*/}
                        <div className="suggestions-list">
                          <div className="suggestion-usd">
                            <img src="assets/images/resources/s1.png" alt="" />
                            <div className="sgt-text">
                              <h4>Jessica William</h4>
                              <span>Graphic Designer</span>
                            </div>
                            <span><i className="la la-plus" /></span>
                          </div>
                          <div className="suggestion-usd">
                            <img src="assets/images/resources/s2.png" alt="" />
                            <div className="sgt-text">
                              <h4>John Doe</h4>
                              <span>PHP Developer</span>
                            </div>
                            <span><i className="la la-plus" /></span>
                          </div>
                          <div className="suggestion-usd">
                            <img src="assets/images/resources/s3.png" alt="" />
                            <div className="sgt-text">
                              <h4>Poonam</h4>
                              <span>Wordpress Developer</span>
                            </div>
                            <span><i className="la la-plus" /></span>
                          </div>
                          <div className="view-more">
                            <a href="#" title>View More</a>
                          </div>
                        </div>{/*suggestions-list end*/}
                      </div>{/*suggestions end*/}
                      <div className="tags-sec full-width">
                        <ul>
                          <li><a href="#" title>Help Center</a></li>
                          <li><a routerlink="/about" title>About</a></li>
                          <li><a href="#" title>Privacy Policy</a></li>
                          <li><a href="#" title>Community Guidelines</a></li>
                          <li><a href="#" title>Cookies Policy</a></li>
                          <li><a href="#" title>Career</a></li>
                          <li><a href="#" title>Language</a></li>
                          <li><a href="#" title>Copyright Policy</a></li>
                        </ul>
                        <div className="cp-sec">
                          <img src="assets/images/logo2.png" alt="" />
                          <p><img src="assets/images/cp.png" alt="" />Copyright 2019</p>
                        </div>
                      </div>{/*tags-sec end*/}
                    </div>{/*main-left-sidebar end*/}
                  </div>
                  <div className="col-lg-6 col-md-8 no-pd">
                    <div className="main-ws-sec">
                      <div className="post-topbar">
                        <div className="user-picy">
                          <img src="assets/images/resources/user-pic.png" alt="" />
                        </div>
                        <div className="post-st">
                          <ul>
                            <li><a className="post_project" href="#" title>Post a Project</a></li>
                            <li><a className="post-jb active" href="#" title>Post a Job</a></li>
                          </ul>
                        </div>{/*post-st end*/}
                      </div>{/*post-topbar end*/}
                      <div className="posts-section">
                        <div className="post-bar">
                          <div className="post_topbar">
                            <div className="usy-dt">
                              <img src="assets/images/resources/us-pic.png" alt="" />
                              <div className="usy-name">
                                <h3>John Doe</h3>
                                <span><img src="assets/images/clock.png" alt="" />3 min ago</span>
                              </div>
                            </div>
                            <div className="ed-opts">
                              <a href="#" title className="ed-opts-open"><i className="la la-ellipsis-v" /></a>
                              <ul className="ed-options">
                                <li><a href="#" title>Edit Post</a></li>
                                <li><a href="#" title>Unsaved</a></li>
                                <li><a href="#" title>Unbid</a></li>
                                <li><a href="#" title>Close</a></li>
                                <li><a href="#" title>Hide</a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="epi-sec">
                            <ul className="descp">
                              <li><img src="assets/images/icon8.png" alt="" /><span>Epic Coder</span></li>
                              <li><img src="assets/images/icon9.png" alt="" /><span>India</span></li>
                            </ul>
                            <ul className="bk-links">
                              <li><a href="#" title><i className="la la-envelope" /></a></li>
                            </ul>
                          </div>
                          <div className="job_descp">
                            <h3>Senior Wordpress Developer</h3>
                            <ul className="job-dt">
                              <li><a href="#" title>Full Time</a></li>
                              <li><span>$30 / hr</span></li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title>view more</a></p>
                            <ul className="skill-tags">
                              <li><a href="#" title>HTML</a></li>
                              <li><a href="#" title>PHP</a></li>
                              <li><a href="#" title>CSS</a></li>
                              <li><a href="#" title>Javascript</a></li>
                              <li><a href="#" title>Wordpress</a></li> 	
                            </ul>
                          </div>
                          <div className="job-status-bar">
                            <ul className="like-com">
                              <li>
                                <a href="#"><i className="fas fa-heart" /> Like</a>
                                <img src="assets/images/liked-img.png" alt="" />
                                <span>25</span>
                              </li> 
                              <li><a href="#" className="com"><i className="fas fa-comment-alt" /> Comment 15</a></li>
                            </ul>
                            <a href="#"><i className="fas fa-eye" />Views 50</a>
                          </div>
                        </div>{/*post-bar end*/}
                        <div className="top-profiles">
                          <div className="pf-hd">
                            <h3>Top Profiles</h3>
                            <i className="la la-ellipsis-v" />
                          </div>
                          <div className="profiles-slider">
                            <div className="user-profy">
                              <img src="assets/images/resources/user1.png" alt="" />
                              <h3>John Doe</h3>
                              <span>1</span>
                              <ul>
                                <li><a href="#" title className="followw">Follow</a></li>
                                <li><a href="#" title className="envlp"><img src="assets/images/envelop.png" alt="" /></a></li>
                                <li><a href="#" title className="hire">hire</a></li>
                              </ul>
                              <a href="#" title>View Profile</a>
                            </div>{/*user-profy end*/}
                            <div className="user-profy">
                              <img src="assets/images/resources/user2.png" alt="" />
                              <h3>John Doe</h3>
                              <span>2</span>
                              <ul>
                                <li><a href="#" title className="followw">Follow</a></li>
                                <li><a href="#" title className="envlp"><img src="assets/images/envelop.png" alt="" /></a></li>
                                <li><a href="#" title className="hire">hire</a></li>
                              </ul>
                              <a href="#" title>View Profile</a>
                            </div>{/*user-profy end*/}
                            <div className="user-profy">
                              <img src="assets/images/resources/user3.png" alt="" />
                              <h3>John Doe</h3>
                              <span>3</span>
                              <ul>
                                <li><a href="#" title className="followw">Follow</a></li>
                                <li><a href="#" title className="envlp"><img src="assets/images/envelop.png" alt="" /></a></li>
                                <li><a href="#" title className="hire">hire</a></li>
                              </ul>
                              <a href="#" title>View Profile</a>
                            </div>{/*user-profy end*/}
                            <div className="user-profy">
                              <img src="assets/images/resources/user3.png" alt="" />
                              <h3>Heyy</h3>
                              <span>4</span>
                              <ul>
                                <li><a href="#" title className="followw">Follow</a></li>
                                <li><a href="#" title className="envlp"><img src="assets/images/envelop.png" alt="" /></a></li>
                                <li><a href="#" title className="hire">hire</a></li>
                              </ul>
                              <a href="#" title>View Profile</a>
                            </div>{/*user-profy end*/}
                          </div>{/*profiles-slider end*/}
                        </div>{/*top-profiles end*/}
                        <div className="post-bar">
                          <div className="post_topbar">
                            <div className="usy-dt">
                              <img src="assets/images/resources/us-pic.png" alt="" />
                              <div className="usy-name">
                                <h3>John Doe</h3>
                                <span><img src="assets/images/clock.png" alt="" />3 min ago</span>
                              </div>
                            </div>
                            <div className="ed-opts">
                              <a href="#" title className="ed-opts-open"><i className="la la-ellipsis-v" /></a>
                              <ul className="ed-options">
                                <li><a href="#" title>Edit Post</a></li>
                                <li><a href="#" title>Unsaved</a></li>
                                <li><a href="#" title>Unbid</a></li>
                                <li><a href="#" title>Close</a></li>
                                <li><a href="#" title>Hide</a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="epi-sec">
                            <ul className="descp">
                              <li><img src="assets/images/icon8.png" alt="" /><span>Epic Coder</span></li>
                              <li><img src="assets/images/icon9.png" alt="" /><span>India</span></li>
                            </ul>
                            <ul className="bk-links">
                              <li><a href="#" title><i className="la la-envelope" /></a></li>
                              <li><a href="#" title className="bid_now">Bid Now</a></li>
                            </ul>
                          </div>
                          <div className="job_descp">
                            <h3>Senior Wordpress Developer</h3>
                            <ul className="job-dt">
                              <li><a href="#" title>Full Time</a></li>
                              <li><span>$30 / hr</span></li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title>view more</a></p>
                            <ul className="skill-tags">
                              <li><a href="#" title>HTML</a></li>
                              <li><a href="#" title>PHP</a></li>
                              <li><a href="#" title>CSS</a></li>
                              <li><a href="#" title>Javascript</a></li>
                              <li><a href="#" title>Wordpress</a></li> 	
                            </ul>
                          </div>
                          <div className="job-status-bar">
                            <ul className="like-com">
                              <li>
                                <a href="#"><i className="fas fa-heart" /> Like</a>
                                <img src="assets/images/liked-img.png" alt="" />
                                <span>25</span>
                              </li> 
                              <li><a href="#" className="com"><i className="fas fa-comment-alt" /> Comment 15</a></li>
                            </ul>
                            <a href="#"><i className="fas fa-eye" />Views 50</a>
                          </div>
                        </div>{/*post-bar end*/}
                        <div className="posty">
                          <div className="post-bar no-margin">
                            <div className="post_topbar">
                              <div className="usy-dt">
                                <img src="assets/images/resources/us-pc2.png" alt="" />
                                <div className="usy-name">
                                  <h3>John Doe</h3>
                                  <span><img src="assets/images/clock.png" alt="" />3 min ago</span>
                                </div>
                              </div>
                              <div className="ed-opts">
                                <a href="#" title className="ed-opts-open"><i className="la la-ellipsis-v" /></a>
                                <ul className="ed-options">
                                  <li><a href="#" title>Edit Post</a></li>
                                  <li><a href="#" title>Unsaved</a></li>
                                  <li><a href="#" title>Unbid</a></li>
                                  <li><a href="#" title>Close</a></li>
                                  <li><a href="#" title>Hide</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="epi-sec">
                              <ul className="descp">
                                <li><img src="assets/images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                <li><img src="assets/images/icon9.png" alt="" /><span>India</span></li>
                              </ul>
                              <ul className="bk-links">
                                <li><a href="#" title><i className="la la-envelope" /></a></li>
                              </ul>
                            </div>
                            <div className="job_descp">
                              <h3>Senior Wordpress Developer</h3>
                              <ul className="job-dt">
                                <li><a href="#" title>Full Time</a></li>
                                <li><span>$30 / hr</span></li>
                              </ul>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title>view more</a></p>
                              <ul className="skill-tags">
                                <li><a href="#" title>HTML</a></li>
                                <li><a href="#" title>PHP</a></li>
                                <li><a href="#" title>CSS</a></li>
                                <li><a href="#" title>Javascript</a></li>
                                <li><a href="#" title>Wordpress</a></li> 	
                              </ul>
                            </div>
                            <div className="job-status-bar">
                              <ul className="like-com">
                                <li>
                                  <a href="#"><i className="fas fa-heart" /> Like</a>
                                  <img src="assets/images/liked-img.png" alt="" />
                                  <span>25</span>
                                </li> 
                                <li><a href="#" className="com"><i className="fas fa-comment-alt" /> Comment 15</a></li>
                              </ul>
                              <a href="#"><i className="fas fa-eye" />Views 50</a>
                            </div>
                          </div>{/*post-bar end*/}
                          <div className="comment-section">
                            <a href="#" className="plus-ic">
                              <i className="la la-plus" />
                            </a>
                            <div className="comment-sec">
                              <ul>
                                <li>
                                  <div className="comment-list">
                                    <div className="bg-img">
                                      <img src="assets/images/resources/bg-img1.png" alt="" />
                                    </div>
                                    <div className="comment">
                                      <h3>John Doe</h3>
                                      <span><img src="assets/images/clock.png" alt="" /> 3 min ago</span>
                                      <p>Lorem ipsum dolor sit amet, </p>
                                      <a href="#" title className="active"><i className="fa fa-reply-all" />Reply</a>
                                    </div>
                                  </div>{/*comment-list end*/}
                                  <ul>
                                    <li>
                                      <div className="comment-list">
                                        <div className="bg-img">
                                          <img src="assets/images/resources/bg-img2.png" alt="" />
                                        </div>
                                        <div className="comment">
                                          <h3>John Doe</h3>
                                          <span><img src="assets/images/clock.png" alt="" /> 3 min ago</span>
                                          <p>Hi John </p>
                                          <a href="#" title><i className="fa fa-reply-all" />Reply</a>
                                        </div>
                                      </div>{/*comment-list end*/}
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <div className="comment-list">
                                    <div className="bg-img">
                                      <img src="assets/images/resources/bg-img3.png" alt="" />
                                    </div>
                                    <div className="comment">
                                      <h3>John Doe</h3>
                                      <span><img src="assets/images/clock.png" alt="" /> 3 min ago</span>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at.</p>
                                      <a href="#" title><i className="fa fa-reply-all" />Reply</a>
                                    </div>
                                  </div>{/*comment-list end*/}
                                </li>
                              </ul>
                            </div>{/*comment-sec end*/}
                            <div className="post-comment">
                              <div className="cm_img">
                                <img src="assets/images/resources/bg-img4.png" alt="" />
                              </div>
                              <div className="comment_box">
                                <form>
                                  <input type="text" placeholder="Post a comment" />
                                  <button type="submit">Send</button>
                                </form>
                              </div>
                            </div>{/*post-comment end*/}
                          </div>{/*comment-section end*/}
                        </div>{/*posty end*/}
                        <div className="process-comm">
                          <div className="spinner">
                            <div className="bounce1" />
                            <div className="bounce2" />
                            <div className="bounce3" />
                          </div>
                        </div>{/*process-comm end*/}
                      </div>{/*posts-section end*/}
                    </div>{/*main-ws-sec end*/}
                  </div>
                  <div className="col-lg-3 pd-right-none no-pd">
                    <div className="right-sidebar">
                      <div className="widget widget-about">
                        <img src="assets/images/wd-logo.png" alt="" />
                        <h3>Track Time on Workwise</h3>
                        <span>Pay only for the Hours worked</span>
                        <div className="sign_link">
                          <h3><a href="sign-in.html" title>Sign up</a></h3>
                          <a href="#" title>Learn More</a>
                        </div>
                      </div>{/*widget-about end*/}
                      <div className="widget widget-jobs">
                        <div className="sd-title">
                          <h3>Top Jobs</h3>
                          <i className="la la-ellipsis-v" />
                        </div>
                        <div className="jobs-list">
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Senior Product Designer</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>{/*job-info end*/}
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Senior UI / UX Designer</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>{/*job-info end*/}
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Junior Seo Designer</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>{/*job-info end*/}
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Senior PHP Designer</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>{/*job-info end*/}
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Senior Developer Designer</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>{/*job-info end*/}
                        </div>{/*jobs-list end*/}
                      </div>{/*widget-jobs end*/}
                      <div className="widget widget-jobs">
                        <div className="sd-title">
                          <h3>Most Viewed This Week</h3>
                          <i className="la la-ellipsis-v" />
                        </div>
                        <div className="jobs-list">
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Senior Product Designer</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>{/*job-info end*/}
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Senior UI / UX Designer</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>{/*job-info end*/}
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Junior Seo Designer</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>{/*job-info end*/}
                        </div>{/*jobs-list end*/}
                      </div>{/*widget-jobs end*/}
                      <div className="widget suggestions full-width">
                        <div className="sd-title">
                          <h3>Most Viewed People</h3>
                          <i className="la la-ellipsis-v" />
                        </div>{/*sd-title end*/}
                        <div className="suggestions-list">
                          <div className="suggestion-usd">
                            <img src="assets/images/resources/s1.png" alt="" />
                            <div className="sgt-text">
                              <h4>Jessica William</h4>
                              <span>Graphic Designer</span>
                            </div>
                            <span><i className="la la-plus" /></span>
                          </div>
                          <div className="suggestion-usd">
                            <img src="assets/images/resources/s2.png" alt="" />
                            <div className="sgt-text">
                              <h4>John Doe</h4>
                              <span>PHP Developer</span>
                            </div>
                            <span><i className="la la-plus" /></span>
                          </div>
                          <div className="suggestion-usd">
                            <img src="assets/images/resources/s3.png" alt="" />
                            <div className="sgt-text">
                              <h4>Poonam</h4>
                              <span>Wordpress Developer</span>
                            </div>
                            <span><i className="la la-plus" /></span>
                          </div>
                          <div className="suggestion-usd">
                            <img src="assets/images/resources/s4.png" alt="" />
                            <div className="sgt-text">
                              <h4>Bill Gates</h4>
                              <span>C &amp; C++ Developer</span>
                            </div>
                            <span><i className="la la-plus" /></span>
                          </div>
                          <div className="suggestion-usd">
                            <img src="assets/images/resources/s5.png" alt="" />
                            <div className="sgt-text">
                              <h4>Jessica William</h4>
                              <span>Graphic Designer</span>
                            </div>
                            <span><i className="la la-plus" /></span>
                          </div>
                          <div className="suggestion-usd">
                            <img src="assets/images/resources/s6.png" alt="" />
                            <div className="sgt-text">
                              <h4>John Doe</h4>
                              <span>PHP Developer</span>
                            </div>
                            <span><i className="la la-plus" /></span>
                          </div>
                          <div className="view-more">
                            <a href="#" title>View More</a>
                          </div>
                        </div>{/*suggestions-list end*/}
                      </div>
                    </div>{/*right-sidebar end*/}
                  </div>
                </div>
              </div>{/* main-section-data end*/}
            </div> 
          </div>
        </main>
        <div className="post-popup pst-pj">
          <div className="post-project">
            <h3>Post a project</h3>
            <div className="post-project-fields">
              <form>
                <div className="row">
                  <div className="col-lg-12">
                    <input type="text" name="title" placeholder="Title" />
                  </div>
                  <div className="col-lg-12">
                    <div className="inp-field">
                      <select>
                        <option>Category</option>
                        <option>Category 1</option>
                        <option>Category 2</option>
                        <option>Category 3</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <input type="text" name="skills" placeholder="Skills" />
                  </div>
                  <div className="col-lg-12">
                    <div className="price-sec">
                      <div className="price-br">
                        <input type="text" name="price1" placeholder="Price" />
                        <i className="la la-dollar" />
                      </div>
                      <span>To</span>
                      <div className="price-br">
                        <input type="text" name="price1" placeholder="Price" />
                        <i className="la la-dollar" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <textarea name="description" placeholder="Description" defaultValue={""} />
                  </div>
                  <div className="col-lg-12">
                    <ul>
                      <li><button className="active" type="submit" value="post">Post</button></li>
                      <li><a href="#" title>Cancel</a></li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>{/*post-project-fields end*/}
            <a href="#" title><i className="la la-times-circle-o" /></a>
          </div>{/*post-project end*/}
        </div>{/*post-project-popup end*/}
        <div className="post-popup job_post">
          <div className="post-project">
            <h3>Post a job</h3>
            <div className="post-project-fields">
              <form>
                <div className="row">
                  <div className="col-lg-12">
                    <input type="text" name="title" placeholder="Title" />
                  </div>
                  <div className="col-lg-12">
                    <div className="inp-field">
                      <select>
                        <option>Category</option>
                        <option>Category 1</option>
                        <option>Category 2</option>
                        <option>Category 3</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <input type="text" name="skills" placeholder="Skills" />
                  </div>
                  <div className="col-lg-6">
                    <div className="price-br">
                      <input type="text" name="price1" placeholder="Price" />
                      <i className="la la-dollar" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="inp-field">
                      <select>
                        <option>Full Time</option>
                        <option>Half time</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <textarea name="description" placeholder="Description" defaultValue={""} />
                  </div>
                  <div className="col-lg-12">
                    <ul>
                      <li><button className="active" type="submit" value="post">Post</button></li>
                      <li><a href="#" title>Cancel</a></li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>{/*post-project-fields end*/}
            <a href="#" title><i className="la la-times-circle-o" /></a>
          </div>{/*post-project end*/}
        </div>{/*post-project-popup end*/}
      </div>
        )
    }
}