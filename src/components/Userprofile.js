import React from 'react';
import e from 'jquery'
import $ from 'jquery'
import axios from 'axios'
import PostHome from './PostHome';
import jwt from 'jsonwebtoken'


export default class Userprofile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Coverimage: null,
      profileImg: null,
      user: {},
      userConnected: {},
      skills: [],
      education: [],
      experience: [],
      projects: [],
      jobs: [],
      feeds: [],
      friendlist:[],
      friend:false
    }
  }
  componentDidMount() {
    $(".post_project").on("click", function () {
      $(".post-popup.pst-pj").addClass("active");
      $(".wrapper").addClass("overlay");
      return false;
    });
    $(".post-project > a").on("click", function () {
      $(".post-popup.pst-pj").removeClass("active");
      $(".wrapper").removeClass("overlay");
      return false;
    });

    //  ============= POST JOB POPUP FUNCTION =========

    $(".post-jb").on("click", function () {
      $(".post-popup.job_post").addClass("active");
      $(".wrapper").addClass("overlay");
      return false;
    });
    $(".post-project > a").on("click", function () {
      $(".post-popup.job_post").removeClass("active");
      $(".wrapper").removeClass("overlay");
      return false;
    });

    //  ============= SIGNIN CONTROL FUNCTION =========

    $('.sign-control li').on("click", function () {
      var tab_id = $(this).attr('data-tab');
      $('.sign-control li').removeClass('current');
      $('.sign_in_sec').removeClass('current');
      $(this).addClass('current animated fadeIn');
      $("#" + tab_id).addClass('current animated fadeIn');
      return false;
    });

    //  ============= SIGNIN TAB FUNCTIONALITY =========

    $('.signup-tab ul li').on("click", function () {
      var tab_id = $(this).attr('data-tab');
      $('.signup-tab ul li').removeClass('current');
      $('.dff-tab').removeClass('current');
      $(this).addClass('current animated fadeIn');
      $("#" + tab_id).addClass('current animated fadeIn');
      return false;
    });

    //  ============= SIGNIN SWITCH TAB FUNCTIONALITY =========

    $('.tab-feed ul li').on("click", function () {
      var tab_id = $(this).attr('data-tab');
      $('.tab-feed ul li').removeClass('active');
      $('.product-feed-tab').removeClass('current');
      $(this).addClass('active animated fadeIn');
      $("#" + tab_id).addClass('current animated fadeIn');
      return false;
    });

    //  ============= COVER GAP FUNCTION =========

    var gap = $(".container").offset().left;
    $(".cover-sec > a, .chatbox-list").css({
      "right": gap
    });

    //  ============= OVERVIEW EDIT FUNCTION =========

    $(".overview-open").on("click", function () {
      $("#overview-box").addClass("open");
      $(".wrapper").addClass("overlay");
      return false;
    });
    $(".close-box").on("click", function () {
      $("#overview-box").removeClass("open");
      $(".wrapper").removeClass("overlay");
      return false;
    });

    $(".cancel").on("click", function () {
      $("#overview-box").removeClass("open");
      $(".wrapper").removeClass("overlay");
      return false;
    });

    //  ============= EXPERIENCE EDIT FUNCTION =========

    $(".exp-bx-open").on("click", function () {
      $("#experience-box").addClass("open");
      $(".wrapper").addClass("overlay");
      return false;
    });

    //  ============= EDUCATION EDIT FUNCTION =========

    $(".ed-box-open").on("click", function () {
      $("#education-box").addClass("open");
      $(".wrapper").addClass("overlay");
      return false;
    });


    //  ============= LOCATION EDIT FUNCTION =========

    $(".lct-box-open").on("click", function () {
      $("#location-box").addClass("open");
      $(".wrapper").addClass("overlay");
      return false;
    });
    $(".close-box").on("click", function () {
      $("#location-box").removeClass("open");
      $(".wrapper").removeClass("overlay");
      return false;
    });

    $(".cancel").on("click", function () {
      $("#location-box").removeClass("open");
      $(".wrapper").removeClass("overlay");
      return false;
    });

    //  ============= SKILLS EDIT FUNCTION =========

    $(".skills-open").on("click", function () {
      $("#skills-box").addClass("open");
      $(".wrapper").addClass("overlay");
      return false;
    });
    $(".close-box").on("click", function () {
      $("#skills-box").removeClass("open");
      $(".wrapper").removeClass("overlay");
      return false;
    });


    $(".cancel").on("click", function () {
      $("#skills-box").removeClass("open");
      $(".wrapper").removeClass("overlay");
      return false;
    });

    //  ============= ESTABLISH EDIT FUNCTION =========

    $(".esp-bx-open").on("click", function () {
      $("#establish-box").addClass("open");
      $(".wrapper").addClass("overlay");
      return false;
    });
    $(".close-box").on("click", function () {
      $("#establish-box").removeClass("open");
      $(".wrapper").removeClass("overlay");
      return false;
    });
    $(".save").on("click", function () {
      $("#establish-box").removeClass("open");
      $(".wrapper").removeClass("overlay");
      return false;
    });
    $(".cancel").on("click", function () {
      $("#establish-box").removeClass("open");
      $(".wrapper").removeClass("overlay");
      return false;
    });

    //  ============= CREATE PORTFOLIO FUNCTION =========

    $(".portfolio-btn > a").on("click", function () {
      $("#create-portfolio").addClass("open");
      $(".wrapper").addClass("overlay");
      return false;
    });
    $(".close-box").on("click", function () {
      $("#create-portfolio").removeClass("open");
      $(".wrapper").removeClass("overlay");
      return false;
    });


    //  ============= EMPLOYEE EDIT FUNCTION =========

    $(".emp-open").on("click", function () {
      $("#total-employes").addClass("open");
      $(".wrapper").addClass("overlay");
      return false;
    });
    $(".close-box").on("click", function () {
      $("#total-employes").removeClass("open");
      $(".wrapper").removeClass("overlay");
      return false;
    });
    $(".save").on("click", function () {
      $("#total-employes").removeClass("open");
      $(".wrapper").removeClass("overlay");
      return false;
    });
    $(".cancel").on("click", function () {
      $("#total-employes").removeClass("open");
      $(".wrapper").removeClass("overlay");
      return false;
    });

    //  =============== Ask a Question Popup ============

    $(".ask-question").on("click", function () {
      $("#question-box").addClass("open");
      $(".wrapper").addClass("overlay");
      return false;
    });
    $(".close-box").on("click", function () {
      $("#question-box").removeClass("open");
      $(".wrapper").removeClass("overlay");
      return false;
    });
    $(".save").on("click", function () {
      $("#question-box").removeClass("open");
      $(".wrapper").removeClass("overlay");
      return false;
    });
    $(".cancel").on("click", function () {
      $("#question-box").removeClass("open");
      $(".wrapper").removeClass("overlay");
      return false;
    });


    //  ============== ChatBox ============== 


    $(".chat-mg").on("click", function () {
      $(this).next(".conversation-box").toggleClass("active");
      return false;
    });
    $(".close-chat").on("click", function () {
      $(".conversation-box").removeClass("active");
      return false;
    });

    //  ================== Edit Options Function =================


    $(".ed-opts-open").on("click", function () {
      console.log("clicked ed opts")
      $(this).next(".ed-options").toggleClass("active");
      return false;
    });


    // ============== Menu Script =============

    $(".menu-btn > a").on("click", function () {
      $("nav").toggleClass("active");
      return false;
    });




    //  ============= FORUM LINKS MOBILE MENU FUNCTION =========

    $(".forum-links-btn > a").on("click", function () {
      $(".forum-links").toggleClass("active");
      return false;
    });
    $("html").on("click", function () {
      $(".forum-links").removeClass("active");
    });
    $(".forum-links-btn > a, .forum-links").on("click", function () {
      e.stopPropagation();
    });

    const user_id = this.props.match.params.id;
    
    axios.get(`http://localhost:3000/user/${user_id}/getProfile`).then(res => {
      this.setState({ user: res.data }, function () {
        this.setState({ profileImg: res.data.image })
        this.setState({ Coverimage: res.data.cover })
      });
    })
    var decode1;
    if (localStorage.getItem('token')) { decode1 = jwt.decode(localStorage.getItem('token')); }
    else { decode1 = jwt.decode(sessionStorage.getItem('token')); }
    //console.log(decode1)
    if (decode1) {
      axios.get(`http://localhost:3000/user/${decode1.user_id}/getProfile`).then(res => {
        this.setState({ userConnected: res.data },function(){
          this.setState({friendlist:res.data.friendlist})
        })
      });
    }
    axios.get(`http://localhost:3000/skill/${user_id}/getallskills`).then(res => {

      this.setState({ skills: res.data }, function () {
      })
    }).catch(err => console.log(err));

    axios.get(`http://localhost:3000/education/${user_id}/getAllEducations`).then(res => {

      this.setState({ education: res.data }, function () {
      })
    }).catch(err => console.log(err));
    axios.get(`http://localhost:3000/experience/${user_id}/getAllExperiences`).then(res => {

      this.setState({ experience: res.data }, function () {
      })
    }).catch(err => console.log(err));

    axios.get(`http://localhost:3000/project/${user_id}/getAllprojects`).then(res => {
      this.setState({ projects: res.data }, function () {
      })
    }).catch(err => console.log(err));

    axios.get(`http://localhost:3000/job/${user_id}/getAllJobs`).then(res => {
      this.setState({ jobs: res.data }, function () {
      })
    }).catch(err => console.log(err));


    axios.get(`http://localhost:3000/user/${user_id}/getfeedsProfile`).then(res => {
      this.setState({ feeds: res.data }, function () {
      })
    }).catch(err => console.log(err));   

     
  }

  sendRequest=(e)=>{
    e.preventDefault();
    const obj={
      myname:this.state.userConnected.fullname,
      MyImage:this.state.userConnected.image,
      FriendImage:this.state.user.image,
      friendname:this.state.user.fullname,
      friendtitle:this.state.user.title,
      mytitle:this.state.userConnected.title
    }
    axios.post(`http://localhost:3000/friend/sendrequest/${this.state.user._id}/${this.state.userConnected._id}`,obj).then(res=>
    {
      console.log(res.status)
    }).catch(err => console.log(err))
  }
 
  

  render() {
    const { experience } = this.state;
    const { education } = this.state;
    const {skills}=this.state;
    console.log(this.state.friendlist)
    let index=-1;
    let friend=false;
    if (this.state.friendlist) {
       index=this.state.friendlist.findIndex(friend=> friend.iduser===this.state.user._id)
       if(index>-1){
         friend=true;
       }
    }
    return (
      <div>
        <section className="cover-sec">
          {this.state.Coverimage ? <img src={`../forsaRESTAPI/${this.state.Coverimage}`} alt="" style={{ width: '1600px', height: '390px' }} /> : <img src="" alt="" />}
        </section>
        <main>
          <div className="main-section">
            <div className="container">
              <div className="main-section-data">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="main-left-sidebar">
                      <div className="user_profile">
                        <div className="user-pro-img">
                          {this.state.profileImg ? <img src={`../forsaRESTAPI/${this.state.profileImg}`} style={{ width: '170px', height: '170px' }} alt="" /> : <img src="" alt="" />}
                        </div>{/*user-pro-img end*/}
                        <div className="user_pro_status">
                          <ul className="flw-hr">
                           { !friend ?  <li><a href="#" className="flww" onClick={this.sendRequest}><i className="la la-plus" /> Connect</a></li>:null }
                          </ul>
                          <ul className="flw-status">
                            <li>
                              <span>Connections</span>
                              <b>{this.state.user.friendlist ? this.state.user.friendlist.length : 0}</b>
                            </li>
                          </ul>
                        </div>{/*user_pro_status end*/}
                        <ul className="social_links">
                          <li><a href="# " ><i className="fa fa-facebook-square" /> Http://www.facebook.com/</a></li>
                          <li><a href="# " ><i className="fa fa-twitter" /> Http://www.Twitter.com/</a></li>
                          <li><a href="# " ><i className="fa fa-instagram" /> Http://www.instagram.com/</a></li>
                        </ul>
                      </div>{/*user_profile end*/}
                      <div className="suggestions full-width">
                        <div className="sd-">
                          <h3>Suggestions</h3>
                          <i className="la la-ellipsis-v" />
                        </div>{/*sd- end*/}
                        <div className="suggestions-list">
                          <div className="suggestion-usd">
                            <img src="../images/resources/s1.png" alt="" />
                            <div className="sgt-text">
                              <h4>Jessica William</h4>
                              <span>Graphic Designer</span>
                            </div>
                            <span><i className="la la-plus" /></span>
                          </div>
                          <div className="suggestion-usd">
                            <img src="../images/resources/s2.png" alt="" />
                            <div className="sgt-text">
                              <h4>John Doe</h4>
                              <span>PHP Developer</span>
                            </div>
                            <span><i className="la la-plus" /></span>
                          </div>
                          <div className="suggestion-usd">
                            <img src="../images/resources/s3.png" alt="" />
                            <div className="sgt-text">
                              <h4>Poonam</h4>
                              <span>Wordpress Developer</span>
                            </div>
                            <span><i className="la la-plus" /></span>
                          </div>
                          <div className="suggestion-usd">
                            <img src="../images/resources/s4.png" alt="" />
                            <div className="sgt-text">
                              <h4>Bill Gates</h4>
                              <span>C &amp; C++ Developer</span>
                            </div>
                            <span><i className="la la-plus" /></span>
                          </div>
                          <div className="suggestion-usd">
                            <img src="../images/resources/s5.png" alt="" />
                            <div className="sgt-text">
                              <h4>Jessica William</h4>
                              <span>Graphic Designer</span>
                            </div>
                            <span><i className="la la-plus" /></span>
                          </div>
                          <div className="suggestion-usd">
                            <img src="../images/resources/s6.png" alt="" />
                            <div className="sgt-text">
                              <h4>John Doe</h4>
                              <span>PHP Developer</span>
                            </div>
                            <span><i className="la la-plus" /></span>
                          </div>
                          <div className="view-more">
                            <a href="#" >View More</a>
                          </div>
                        </div>{/*suggestions-list end*/}
                      </div>{/*suggestions end*/}
                    </div>{/*main-left-sidebar end*/}
                  </div>
                  <div className="col-lg-6">
                    <div className="main-ws-sec">
                      <div className="user-tab-sec">
                        <h3> {this.state.user.fullname}</h3>
                        <div className="star-descp">
                          <span>{this.state.user.title}</span>
                        </div>{/*star-descp end*/}
                        <div className="tab-feed">
                          <ul>
                            <li data-tab="feed-dd" className="active">
                              <a href="#" >
                                <img src="../images/ic1.png" alt="" />
                                <span>Feed</span>
                              </a>
                            </li>
                            <li data-tab="info-dd">
                              <a href="#" >
                                <img src="../images/ic2.png" alt="" />
                                <span>Info</span>
                              </a>
                            </li>
                            <li data-tab="portfolio-dd">
                              <a href="#" >
                                <img src="../images/ic3.png" alt="" />
                                <span>Portfolio</span>
                              </a>
                            </li>
                          </ul>
                        </div>{/* tab-feed end*/}
                      </div>{/*user-tab-sec end*/}
                      <div className="product-feed-tab current" id="feed-dd">
                        <div className="posts-section">
                          <PostHome post={this.state.feeds} userConnected={this.state.userConnected} ></PostHome>

                          <div className="process-comm">
                            <div className="spinner">
                              <div className="bounce1" />
                              <div className="bounce2" />
                              <div className="bounce3" />
                            </div>
                          </div>{/*process-comm end*/}
                        </div>{/*posts-section end*/}
                      </div>{/*product-feed-tab end*/}
                      <div className="product-feed-tab" id="info-dd">
                        <div className="user-profile-ov">
                          <h3>Overview</h3>
                          <p>{this.state.user.overview}</p>
                        </div>{/*user-profile-ov end*/}
                        <div className="user-profile-ov st2">
                          <h3>Experience</h3>
                          {experience ? experience['experiences'] ? experience['experiences'].map((experienc, index) => <div key={index}> <h4><span>{experienc.title}</span></h4> <p>{experienc.duration} </p>
                            <p>{experienc.description} </p> </div>) : null : null}

                        </div>{/*user-profile-ov end*/}
                        <div className="user-profile-ov">
                          <h3>Education</h3>
                          {education ? education['educations'] ? education['educations'].map((education, index) => <div key={index}>
                            <h4>{education.school} <span>{education.degree}</span> </h4>
                            <span>{education.duration}</span>
                            <p> {education.description} </p></div>) : null : null}
                        </div>{/*user-profile-ov end*/}
                        <div className="user-profile-ov">
                          <h3>Location</h3>
                          <h4>{this.state.user.country}</h4>
                          <p>{this.state.user.location} </p>
                        </div>{/*user-profile-ov end*/}
                        <div className="user-profile-ov">
                          <h3>Skills</h3>
                          <ul>
                          {skills ? skills['skills'] ? skills['skills'].map((skill, index) => <li key={index}><a href="# " >{skill.title} </a></li>) : null :null }
                            
                          </ul>
                        </div>{/*user-profile-ov end*/}
                      </div>{/*product-feed-tab end*/}
                      <div className="product-feed-tab" id="portfolio-dd">
                        <div className="portfolio-gallery-sec">
                          <h3>Portfolio</h3>
                          <div className="gallery_pf">
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                <div className="gallery_pt">
                                  <img src="../images/resources/pf-img1.jpg" alt="" />
                                  <a href="#" ><img src="../images/all-out.png" alt="" /></a>
                                </div>{/*gallery_pt end*/}
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                <div className="gallery_pt">
                                  <img src="../images/resources/pf-img2.jpg" alt="" />
                                  <a href="#" ><img src="../images/all-out.png" alt="" /></a>
                                </div>{/*gallery_pt end*/}
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                <div className="gallery_pt">
                                  <img src="../images/resources/pf-img3.jpg" alt="" />
                                  <a href="#" ><img src="../images/all-out.png" alt="" /></a>
                                </div>{/*gallery_pt end*/}
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                <div className="gallery_pt">
                                  <img src="../images/resources/pf-img4.jpg" alt="" />
                                  <a href="#" ><img src="../images/all-out.png" alt="" /></a>
                                </div>{/*gallery_pt end*/}
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                <div className="gallery_pt">
                                  <img src="../images/resources/pf-img5.jpg" alt="" />
                                  <a href="#" ><img src="../images/all-out.png" alt="" /></a>
                                </div>{/*gallery_pt end*/}
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                <div className="gallery_pt">
                                  <img src="../images/resources/pf-img6.jpg" alt="" />
                                  <a href="#" ><img src="../images/all-out.png" alt="" /></a>
                                </div>{/*gallery_pt end*/}
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                <div className="gallery_pt">
                                  <img src="../images/resources/pf-img7.jpg" alt="" />
                                  <a href="#" ><img src="../images/all-out.png" alt="" /></a>
                                </div>{/*gallery_pt end*/}
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                <div className="gallery_pt">
                                  <img src="../images/resources/pf-img8.jpg" alt="" />
                                  <a href="#" ><img src="../images/all-out.png" alt="" /></a>
                                </div>{/*gallery_pt end*/}
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                <div className="gallery_pt">
                                  <img src="../images/resources/pf-img9.jpg" alt="" />
                                  <a href="#" ><img src="../images/all-out.png" alt="" /></a>
                                </div>{/*gallery_pt end*/}
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                <div className="gallery_pt">
                                  <img src="../images/resources/pf-img10.jpg" alt="" />
                                  <a href="#" ><img src="../images/all-out.png" alt="" /></a>
                                </div>{/*gallery_pt end*/}
                              </div>
                            </div>
                          </div>{/*gallery_pf end*/}
                        </div>{/*portfolio-gallery-sec end*/}
                      </div>{/*product-feed-tab end*/}
                    </div>{/*main-ws-sec end*/}
                  </div>
                  <div className="col-lg-3">
                    <div className="right-sidebar">
                      <div className="message-btn">
                        <a href="#" ><i className="fa fa-envelope" /> Message</a>
                      </div>
                      <div className="widget widget-portfolio">
                        <div className="wd-heady">
                          <h3>Portfolio</h3>
                          <img src="../images/photo-icon.png" alt="" />
                        </div>
                        <div className="pf-gallery">
                          <ul>
                            <li><a href="#" ><img src="../images/resources/pf-gallery1.png" alt="" /></a></li>
                            <li><a href="#" ><img src="../images/resources/pf-gallery2.png" alt="" /></a></li>
                            <li><a href="#" ><img src="../images/resources/pf-gallery3.png" alt="" /></a></li>
                            <li><a href="#" ><img src="../images/resources/pf-gallery4.png" alt="" /></a></li>
                            <li><a href="#" ><img src="../images/resources/pf-gallery5.png" alt="" /></a></li>
                            <li><a href="#" ><img src="../images/resources/pf-gallery6.png" alt="" /></a></li>
                            <li><a href="#" ><img src="../images/resources/pf-gallery7.png" alt="" /></a></li>
                            <li><a href="#" ><img src="../images/resources/pf-gallery8.png" alt="" /></a></li>
                            <li><a href="#" ><img src="../images/resources/pf-gallery9.png" alt="" /></a></li>
                            <li><a href="#" ><img src="../images/resources/pf-gallery10.png" alt="" /></a></li>
                            <li><a href="#" ><img src="../images/resources/pf-gallery11.png" alt="" /></a></li>
                            <li><a href="#" ><img src="../images/resources/pf-gallery12.png" alt="" /></a></li>
                          </ul>
                        </div>{/*pf-gallery end*/}
                      </div>{/*widget-portfolio end*/}
                    </div>{/*right-sidebar end*/}
                  </div>
                </div>
              </div>{/* main-section-data end*/}
            </div>
          </div>
        </main>
      </div>

    )
  }
}
