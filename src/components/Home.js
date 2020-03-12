import React from 'react' ;
import jwt from 'jsonwebtoken';
import axios from 'axios';
import {Link } from 'react-router-dom';
import UserTopprofile from './UserTopprofile';
import Post from './Post';
import Suggestions from './Suggestions';
import Topjobs from './Topjobs';
import Mostviewedpoeple from './Mostviewedpoeple';
import $ from 'jquery';
import e from 'jquery';


export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={user:{}}
  }
  async componentDidMount(){
    $(".post_project").on("click", function(){
      $(".post-popup.pst-pj").addClass("active");
      $(".wrapper").addClass("overlay");
      return false;
  });
  $(".post-project > a").on("click", function(){
      $(".post-popup.pst-pj").removeClass("active");
      $(".wrapper").removeClass("overlay");
      return false;
  });

  //  ============= POST JOB POPUP FUNCTION =========

  $(".post-jb").on("click", function(){
      $(".post-popup.job_post").addClass("active");
      $(".wrapper").addClass("overlay");
      return false;
  });
  $(".post-project > a").on("click", function(){
      $(".post-popup.job_post").removeClass("active");
      $(".wrapper").removeClass("overlay");
      return false;
  });

  //  ============= SIGNIN CONTROL FUNCTION =========

  $('.sign-control li').on("click", function(){
      var tab_id = $(this).attr('data-tab');
      $('.sign-control li').removeClass('current');
      $('.sign_in_sec').removeClass('current');
      $(this).addClass('current animated fadeIn');
      $("#"+tab_id).addClass('current animated fadeIn');
      return false;
  });

  //  ============= SIGNIN TAB FUNCTIONALITY =========

  $('.signup-tab ul li').on("click", function(){
      var tab_id = $(this).attr('data-tab');
      $('.signup-tab ul li').removeClass('current');
      $('.dff-tab').removeClass('current');
      $(this).addClass('current animated fadeIn');
      $("#"+tab_id).addClass('current animated fadeIn');
      return false;
  });

  //  ============= SIGNIN SWITCH TAB FUNCTIONALITY =========

  $('.tab-feed ul li').on("click", function(){
      var tab_id = $(this).attr('data-tab');
      $('.tab-feed ul li').removeClass('active');
      $('.product-feed-tab').removeClass('current');
      $(this).addClass('active animated fadeIn');
      $("#"+tab_id).addClass('current animated fadeIn');
      return false;
  });

  //  ============= COVER GAP FUNCTION =========

  var gap = $(".container").offset().left;
  $(".cover-sec > a, .chatbox-list").css({
      "right": gap
  });

  //  ============= OVERVIEW EDIT FUNCTION =========

  $(".overview-open").on("click", function(){
      $("#overview-box").addClass("open");
      $(".wrapper").addClass("overlay");
      return false;
  });
  $(".close-box").on("click", function(){
      $("#overview-box").removeClass("open");
      $(".wrapper").removeClass("overlay");
      return false;
  });

  //  ============= EXPERIENCE EDIT FUNCTION =========

  $(".exp-bx-open").on("click", function(){
      $("#experience-box").addClass("open");
      $(".wrapper").addClass("overlay");
      return false;
  });
  $(".close-box").on("click", function(){
      $("#experience-box").removeClass("open");
      $(".wrapper").removeClass("overlay");
      return false;
  });

  //  ============= EDUCATION EDIT FUNCTION =========

  $(".ed-box-open").on("click", function(){
      $("#education-box").addClass("open");
      $(".wrapper").addClass("overlay");
      return false;
  });
  $(".close-box").on("click", function(){
      $("#education-box").removeClass("open");
      $(".wrapper").removeClass("overlay");
      return false;
  });

  //  ============= LOCATION EDIT FUNCTION =========

  $(".lct-box-open").on("click", function(){
      $("#location-box").addClass("open");
      $(".wrapper").addClass("overlay");
      return false;
  });
  $(".close-box").on("click", function(){
      $("#location-box").removeClass("open");
      $(".wrapper").removeClass("overlay");
      return false;
  });

  //  ============= SKILLS EDIT FUNCTION =========

  $(".skills-open").on("click", function(){
      $("#skills-box").addClass("open");
      $(".wrapper").addClass("overlay");
      return false;
  });
  $(".close-box").on("click", function(){
      $("#skills-box").removeClass("open");
      $(".wrapper").removeClass("overlay");
      return false;
  });

  //  ============= ESTABLISH EDIT FUNCTION =========

  $(".esp-bx-open").on("click", function(){
      $("#establish-box").addClass("open");
      $(".wrapper").addClass("overlay");
      return false;
  });
  $(".close-box").on("click", function(){
      $("#establish-box").removeClass("open");
      $(".wrapper").removeClass("overlay");
      return false;
  });

  //  ============= CREATE PORTFOLIO FUNCTION =========

  $(".portfolio-btn > a").on("click", function(){
      $("#create-portfolio").addClass("open");
      $(".wrapper").addClass("overlay");
      return false;
  });
  $(".close-box").on("click", function(){
      $("#create-portfolio").removeClass("open");
      $(".wrapper").removeClass("overlay");
      return false;
  });

  //  ============= EMPLOYEE EDIT FUNCTION =========

  $(".emp-open").on("click", function(){
      $("#total-employes").addClass("open");
      $(".wrapper").addClass("overlay");
      return false;
  });
  $(".close-box").on("click", function(){
      $("#total-employes").removeClass("open");
      $(".wrapper").removeClass("overlay");
      return false;
  });

  //  =============== Ask a Question Popup ============

  $(".ask-question").on("click", function(){
      $("#question-box").addClass("open");
      $(".wrapper").addClass("overlay");
      return false;
  });
  $(".close-box").on("click", function(){
      $("#question-box").removeClass("open");
      $(".wrapper").removeClass("overlay");
      return false;
  });


  //  ============== ChatBox ============== 


  $(".chat-mg").on("click", function(){
      $(this).next(".conversation-box").toggleClass("active");
      return false;
  });
  $(".close-chat").on("click", function(){
      $(".conversation-box").removeClass("active");
      return false;
  });

  //  ================== Edit Options Function =================


  $(".ed-opts-open").on("click", function(){
      $(this).next(".ed-options").toggleClass("active");
      return false;
  });


  // ============== Menu Script =============

  $(".menu-btn > a").on("click", function(){
      $("nav").toggleClass("active");
      return false;
  });


  //  ============ Notifications Open =============

  $(".not-box-open").on("click", function(){$("#message").hide();
      $(".user-account-settingss").hide();
      $(this).next("#notification").toggle();
  });

   //  ============ Messages Open =============

  $(".not-box-openm").on("click", function(){$("#notification").hide();
      $(".user-account-settingss").hide();
      $(this).next("#message").toggle();
  });


  // ============= User Account Setting Open ===========
/*
$(".user-info").on("click", function(){$("#users").hide();
      $(".user-account-settingss").hide();
      $(this).next("#notification").toggle();
  });
  
*/
$( ".user-info" ).click(function() {
$( ".user-account-settingss" ).slideToggle( "fast");
  $("#message").not($(this).next("#message")).slideUp();
  $("#notification").not($(this).next("#notification")).slideUp();
  // Animation complete.
});


  //  ============= FORUM LINKS MOBILE MENU FUNCTION =========

  $(".forum-links-btn > a").on("click", function(){
      $(".forum-links").toggleClass("active");
      return false;
  });
  $("html").on("click", function(){
      $(".forum-links").removeClass("active");
  });
  $(".forum-links-btn > a, .forum-links").on("click", function(){
      e.stopPropagation();
  });

 



    var decode1;
    if (localStorage.getItem('token'))
    { decode1 = jwt.decode(localStorage.getItem('token'));}
    else
    {decode1 = jwt.decode(sessionStorage.getItem('token'));}
    console.log(decode1)
    if(decode1){
     await axios.get(`http://localhost:3000/user/${decode1.user_id}/getProfile`).then(res=>{
       this.setState({user:res.data}, function () {
    });})
    }
  }
  


    render (){
      //console.log(`forsaRESTAPI/${this.state.user.image}`)
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
                              { this.state.user.image ? <img src={`../forsaRESTAPI/${this.state.user.image}`} style={{width: '100px', height: '100px'}} alt="" /> : null }
                            </div>
                          </div>{/*username-dt end*/}
                          <div className="user-specs">
                            <h3>{this.state.user.fullname}</h3>
        <span>{this.state.user.title}</span>
                          </div>
                        </div>{/*user-profile end*/}
                        <ul className="user-fw-status">
                          <li>
                            <h4>Connections</h4>
                              <span>{this.state.user.friendlist ? this.state.user.friendlist.length : 0}</span>
                          </li>
                          <li>
                            <Link to={`/profile/${this.state.user._id}`} >View Profile</Link>
                          </li>
                        </ul>
                      </div>{/*user-data end*/}
                      
                      <Suggestions></Suggestions>
                      <div className="tags-sec full-width">
                        <ul>
                          <li><a href="# " >Help Center</a></li>
                          <li><a href="/about" >About</a></li>
                          <li><a href="# " >Privacy Policy</a></li>
                          <li><a href="# " >Community Guidelines</a></li>
                          <li><a href="# " >Cookies Policy</a></li>
                          <li><a href="# " >Career</a></li>
                          <li><a href="# " >Language</a></li>
                          <li><a href="# " >Copyright Policy</a></li>
                        </ul>
                        <div className="cp-sec">
                          <img src="../images/logo2.png" alt="" />
                          <p><img src="../images/cp.png" alt="" />Copyright 2019</p>
                        </div>
                      </div>{/*tags-sec end*/}
                    </div>{/*main-left-sidebar end*/}
                  </div>
                  <div className="col-lg-6 col-md-8 no-pd">
                    <div className="main-ws-sec">
                      <div className="post-topbar">
                        <div className="user-picy">
                        { this.state.user.image ? <img src={`../forsaRESTAPI/${this.state.user.image}`} style={{width: '50px', height: '50px',borderRadius:'50%'}}  /> : null }
                        </div>
                        <div className="post-st">
                          <ul>
                            <li><a className="post_project" href="# " >Post a Project</a></li>
                            <li><a className="post-jb active" href="# " >Post a Job</a></li>
                          </ul>
                        </div>{/*post-st end*/}
                      </div>{/*post-topbar end*/}
                      <div className="posts-section">


                        <Post></Post>
                        
                        <div className="top-profiles">
                          <div className="pf-hd">
                            <h3>Top Profiles</h3>
                            <i className="la la-ellipsis-v" />
                          </div>
                          <div className="profiles-slider">
                            <UserTopprofile></UserTopprofile>
                            <UserTopprofile></UserTopprofile>
                            <UserTopprofile></UserTopprofile>
                            <UserTopprofile></UserTopprofile>

                          </div>{/*profiles-slider end*/}
                        </div>{/*top-profiles end*/}
                        
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
                        <img src="../images/wd-logo.png" alt="" />
                        <h3>Track Time on Workwise</h3>
                        <span>Pay only for the Hours worked</span>
                        <div className="sign_link">
                          <h3><a href="sign-in.html" >Sign up</a></h3>
                          <a href="# " >Learn More</a>
                        </div>
                      </div>{/*widget-about end*/}

                      <Topjobs></Topjobs>

                      <Mostviewedpoeple></Mostviewedpoeple>
                      
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
                      <li><a href="# " >Cancel</a></li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>{/*post-project-fields end*/}
            <a href="# " ><i className="la la-times-circle-o" /></a>
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
                      <li><a href="# " >Cancel</a></li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>{/*post-project-fields end*/}
            <a href="# " ><i className="la la-times-circle-o" /></a>
          </div>{/*post-project end*/}
        </div>{/*post-project-popup end*/}
      </div>
        )
    }
}