import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Infoprofile from './Infoprofile';
import e from 'jquery';
import $ from 'jquery';
import Post from './Post';
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Coverimage: null,
      profileImg: null,
      user: {},
      skills: [],
      education: [],
      Educationedit: '',
      experience: [],
      Experienceedit: '',
      projects: [],
      jobs: [],
      feeds:[]
    }
    this.updateOverview = this.updateOverview.bind(this)
    this.Editeducation = this.Editeducation.bind(this);
    this.Editexperience = this.Editexperience.bind(this)

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
    //console.log(user_id);
    axios.get(`http://localhost:3000/user/${user_id}/getProfile`).then(res => {
      this.setState({ user: res.data }, function () {
        this.setState({ profileImg: res.data.image })
        this.setState({ Coverimage: res.data.cover })
      });
    })
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



  onCoverChange = () => {
    const cover = this.refs.coverimg;
    const user_id = this.props.match.params.id;
    var formData = new FormData();
    formData.append('cover', cover.files[0]);
    axios.post(`http://localhost:3000/user/${user_id}/updatecover`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(function () {
      console.log('SUCCESS!!');
    })
      .catch(function () {
        console.log('FAILURE!!');
      });
    window.location.reload();
  }



  onProfilePicchange = () => {
    const user_id = this.props.match.params.id;
    const image = this.refs.profileimg;
    var formData = new FormData();
    if (image.files && image.files[0]) {
      formData.append('image', image.files[0])
      let reader = new FileReader();

      reader.readAsDataURL(image.files[0]);
      axios.post(`http://localhost:3000/user/${user_id}/updateImage`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function () {
        console.log('SUCCESS!!');
      })
        .catch(function () {
          console.log('FAILURE!!');
        });
      window.location.reload();
    }
  }
  updateOverview(event) {
    $("#overview-box").removeClass("open");
    $(".wrapper").removeClass("overlay");
    event.preventDefault();
    const overview = this.refs.overview.value
    const obj = {
      overview: overview
    }
    axios.post(`http://localhost:3000/user/${this.state.user._id}/updateoverview`, obj).then(
      res => {
        if (res.status === 200) {
          const { user } = this.state;
          user['overview'] = overview;
          this.setState({ user: user })
        }
      }).catch(err => console.log(err.data));
  }
  editLocation = (event) => {
    event.preventDefault()
    $("#location-box").removeClass("open");
    $(".wrapper").removeClass("overlay");
    const location = this.refs.selectedLocation.value;
    const obj = {
      location: location
    }
    axios.post(`http://localhost:3000/user/${this.state.user._id}/updatelocation`, obj).then(
      res => {
        if (res.status === 200) {
          const { user } = this.state;
          user['location'] = location;
          this.setState({ user: user })
        }
      }).catch(err => console.log(err.data));
  }

  addSkill = (event) => {
    event.preventDefault();
    $("#skills-box").removeClass("open");
    $(".wrapper").removeClass("overlay");
    const skill = this.refs.skill.value;
    const obj = {
      title: skill
    }
    axios.post(`http://localhost:3000/skill/${this.state.user._id}/createskill`, obj).then(
      res => {
        if (res.status === 200) {
          const skills = this.state.skills;
          skills['skills'].push({ title: skill });
          this.setState({ skills: skills })
          console.log("added")
        }
      }).catch(err => console.log(err.data));
  }
  removeSkill = (index, id) => {
    const { skills } = this.state;
    skills['skills'].splice(index, 1);
    this.setState({ skills: skills });
    axios.delete(`http://localhost:3000/skill/${id}/deleteskill`).then(
      res => {
        if (res.status === 200) {
          console.log("removed")
        }
        else alert('error')
      })
  }
  addEducation = (event) => {
    $("#education-box").removeClass("open");
    $(".wrapper").removeClass("overlay");
    this.setState({ Educationedit: '' })
    event.preventDefault();
    const degree = this.refs.degree.value;
    const school = this.refs.school.value;
    const from = this.refs.from.value;
    const to = this.refs.to.value;
    const description = this.refs.description.value;
    const obj = {
      school: school,
      degree: degree,
      duration: from + '-' + to,
      description: description
    }
    console.log(obj)
    axios.post(`http://localhost:3000/education/${this.state.user._id}/createEducation`, obj).then(
      res => {
        if (res.status === 200) {
          const education = this.state.education;
          //console.log(res.data)
          education['educations'].push({
            _id: res.data.education._id,
            school: school,
            degree: degree,
            duration: from + '-' + to,
            description: description
          });
          this.setState({ education: education })
        }
      }).catch(err => console.log(err.data));
  }

  Editeducation(e) {
    this.setState({ Educationedit: e }, function () {
      console.log(this.state.Educationedit)
    })
  }
  closeEditEd = (e) => {
    e.preventDefault()
    $("#education-box").removeClass("open");
    $(".wrapper").removeClass("overlay");
    this.setState({ Educationedit: '' }, function () {
      console.log(this.state.Educationedit)
    })
  }
  deleteEducation = (e) => {
    e.preventDefault();
    $("#education-box").removeClass("open");
    $(".wrapper").removeClass("overlay");
    axios.delete(`http://localhost:3000/education/${this.state.Educationedit._id}/deleteEducation`).then(res => {
      if (res.status == 200) {
        const { education } = this.state;
        const index = education['educations'].findIndex(_education => _education._id === this.state.Educationedit._id);
        education['educations'].splice(index, 1)
        this.setState({ Educationedit: '' });
        this.setState({ education: education });
      }
      else {
        alert('problem on delete')
      }
    })

  }
  saveEducation = (event) => {
    $("#education-box").removeClass("open");
    $(".wrapper").removeClass("overlay");
    const educationid = this.state.Educationedit._id;
    console.log(educationid)
    this.setState({ Educationedit: '' })
    event.preventDefault();
    const degree = this.refs.degree.value;
    const school = this.refs.school.value;
    const from = this.refs.from.value;
    const to = this.refs.to.value;
    const description = this.refs.description.value;
    const obj = {
      school: school,
      degree: degree,
      duration: from + '-' + to,
      description: description
    }
    console.log(obj)
    axios.patch(`http://localhost:3000/education/${educationid}/updateEducation`, obj).then(
      res => {
        if (res.status === 200) {
          const { education } = this.state;
          const index = education['educations'].findIndex(_education => _education._id === educationid);
          education['educations'].splice(index, 1);
          education['educations'].push({
            _id: educationid,
            school: school,
            degree: degree,
            duration: from + '-' + to,
            description: description
          });
          this.setState({ education: education })
        }
      }).catch(err => console.log(err.data));
  }

  addExperience = (e) => {
    $("#experience-box").removeClass("open");
    $(".wrapper").removeClass("overlay");
    this.setState({ Experienceedit: '' })
    e.preventDefault();
    const titleex = this.refs.titleex.value;
    const durationex = this.refs.durationex.value;

    const descriptionex = this.refs.descriptionex.value;
    const obj = {
      duration: durationex,
      title: titleex,
      description: descriptionex
    }
    console.log(obj)
    axios.post(`http://localhost:3000/experience/${this.state.user._id}/createExperience`, obj).then(
      res => {
        if (res.status === 200) {
          const experience = this.state.experience;
          experience['experiences'].push({
            _id: res.data.experience._id,
            title: titleex,
            duration: durationex,
            description: descriptionex,
          });
          this.setState({ experience: experience })
        }
      }).catch(err => console.log(err.data));
  }
  deleteExperience = (e) => {
    console.log("delete experience")
    e.preventDefault();
    $("#experience-box").removeClass("open");
    $(".wrapper").removeClass("overlay");
    axios.delete(`http://localhost:3000/experience/${this.state.Experienceedit._id}/deleteExperience`).then(res => {
      if (res.status == 200) {
        const { experience } = this.state;
        const index = experience['experiences'].findIndex(_experience => _experience._id === this.state.Experienceedit._id);
        experience['experiences'].splice(index, 1)
        this.setState({ Experienceedit: '' });
        this.setState({ experience: experience });
      }
      else {
        alert('problem on delete')
      }
    })

  }
  updateExperience = (e) => {
    console.log("update experience")
    $("#experience-box").removeClass("open");
    $(".wrapper").removeClass("overlay");
    const experienceid = this.state.Experienceedit._id;
    this.setState({ Experienceedit: '' })
    e.preventDefault();
    const title = this.refs.titleex.value;
    const duration = this.refs.durationex.value
    const description = this.refs.descriptionex.value;
    const obj = {
      title: title,
      duration: duration,
      description: description
    }
    console.log(obj)
    axios.patch(`http://localhost:3000/experience/${experienceid}/updateExperience`, obj).then(
      res => {
        if (res.status === 200) {
          const { experience } = this.state;
          const index = experience['experiences'].findIndex(_experience => _experience._id === experienceid);
          experience['experiences'].splice(index, 1);
          experience['experiences'].push({
            _id: experienceid,
            title: title,
            duration: duration,
            description: description
          });
          this.setState({ experience: experience })
        }
      }).catch(err => console.log(err.data));
  }

  closeEditEx = (e) => {
    console.log("close edit ex")
    e.preventDefault();
    $("#experience-box").removeClass("open");
    $(".wrapper").removeClass("overlay");
    this.setState({ Experienceedit: '' }, function () {
      console.log(this.state.Experienceedit)
    })
  }
  Editexperience(e) {
    console.log(" edit experience")
    this.setState({ Experienceedit: e }, function () {
      console.log(this.state.Experienceedit)
    })
  }
  deleteProject = (id) => {
    const { feeds } = this.state;
    console.log(feeds)
    const index = feeds.findIndex(_project =>  _project.project._id === id);
    feeds.splice(index, 1);
    this.setState({ feeds: feeds }, function () {
    });
  }
  deleteJob = (id) => {
    const { feeds } = this.state;
    const index = feeds.findIndex(_job => _job.job._id === id);
    feeds.splice(index, 1);
    this.setState({ feeds: feeds }, function () {
    });
  }

  render() {
    const skills = this.state.skills['skills'];
    const description = this.state.Educationedit.description;
    const degree = this.state.Educationedit.degree;
    const school = this.state.Educationedit.school;
    const titleex = this.state.Experienceedit.title;
    const durationex = this.state.Experienceedit.duration;
    const descriptionex = this.state.Experienceedit.description;

    const { projects } = this.state.projects;
    //console.log(projects)
    const { jobs } = this.state.jobs;
    const {feeds}=this.state;
    console.log(feeds)

    return (
      <div className="wrapper">
        <section className="cover-sec">
          {this.state.Coverimage ? <img src={`../forsaRESTAPI/${this.state.Coverimage}`} alt="" style={{ width: '1600px', height: '390px' }} /> : <img src="" alt="" />}

          <div className="add-pic-box">
            <div className="container">
              <div className="row no-gutters">
                <div className="col-lg-12 col-sm-12">
                  <input type="file" id="file" ref='coverimg' onChange={this.onCoverChange} />
                  <label htmlFor="file">Change Image</label>
                </div>
              </div>
            </div>
          </div>
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
                          <div className="add-dp" id="OpenImgUpload">
                            <input
                              type={"file"} id="file1" ref='profileimg' onChange={this.onProfilePicchange} />
                            <label htmlFor="file1"><i className="fas fa-camera" /></label>
                          </div>
                        </div>{/*user-pro-img end*/}
                        <div className="user_pro_status">
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
                        <div className="sd-title">
                          <h3>People Viewed Profile</h3>
                          <i className="la la-ellipsis-v" />
                        </div>{/*sd-title end*/}
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
                            <a href="# " >View More</a>
                          </div>
                        </div>{/*suggestions-list end*/}
                      </div>{/*suggestions end*/}
                    </div>{/*main-left-sidebar end*/}
                  </div>
                  <div className="col-lg-5">
                    <div className="main-ws-sec">
                      <div className="user-tab-sec rewivew">
                        <h3>{this.state.user.fullname}</h3>
                        <div className="star-descp">
                          {this.state.user.title ? <span> {this.state.user.title} </span> : null}

                        </div>{/*star-descp end*/}
                        <div className="tab-feed st2 settingjb">
                          <ul>
                            <li data-tab="feed-dd" className="active">
                              <a href="# " >
                                <img src="../images/ic1.png" alt="" />
                                <span>Feed</span>
                              </a>
                            </li>
                            <li data-tab="info-dd">
                              <Link to="# " >
                                <img src="../images/ic2.png" alt="" />
                                <span>Info</span>
                              </Link>
                            </li>
                            <li data-tab="saved-jobs">
                              <a href="# " >
                                <img src="../images/ic4.png" alt="" />
                                <span>Jobs</span>
                              </a>
                            </li>
                            <li data-tab="my-bids">
                              <a href="# " >
                                <img src="../images/ic5.png" alt="" />
                                <span>Bids</span>
                              </a>
                            </li>
                            <li data-tab="portfolio-dd">
                              <a href="# " >
                                <img src="../images/ic3.png" alt="" />
                                <span>Portfolio</span>
                              </a>
                            </li>

                          </ul>
                        </div>{/* tab-feed end*/}
                      </div>{/*user-tab-sec end*/}
                      <div className="product-feed-tab" id="saved-jobs">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active" id="mange-tab" data-toggle="tab" href="#mange" role="tab" aria-controls="home" aria-selected="true">Manage Jobs</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" id="saved-tab" data-toggle="tab" href="#saved" role="tab" aria-controls="profile" aria-selected="false">Saved Jobs</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#applied" role="tab" aria-controls="applied" aria-selected="false">Applied Jobs</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" id="cadidates-tab" data-toggle="tab" href="#cadidates" role="tab" aria-controls="contact" aria-selected="false">Applied cadidates</a>
                          </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                          <div className="tab-pane fade show active" id="mange" role="tabpanel" aria-labelledby="mange-tab">
                            <div className="posts-bar">
                              <div className="post-bar bgclr">
                                <div className="wordpressdevlp">
                                  <h2>Senior Wordpress Developer</h2>
                                  <p><i className="la la-clock-o" />Posted on 30 August 2018</p>
                                </div>
                                <br />
                                <div className="row no-gutters">
                                  <div className="col-md-6 col-sm-12">
                                    <div className="cadidatesbtn">
                                      <button type="button" className="btn btn-primary">
                                        <span className="badge badge-light">3</span>Candidates
                                                    </button>
                                      
                                      <a href="# ">
                                        <i className="far fa-trash-alt" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-6 col-sm-12">
                                    <ul className="bk-links bklink">
                                      <li><a href="# " ><i className="la la-envelope" /></a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                         
                            
                          </div>
                          <div className="tab-pane fade" id="saved" role="tabpanel" aria-labelledby="saved-tab">
                            
                            <div className="post-bar">
                              <div className="p-all saved-post">
                                <div className="usy-dt">
                                  <div className="wordpressdevlp">
                                    <h2>UI UX Designer</h2>
                                    <p><i className="la la-clock-o" />Posted on 30 August 2018</p>
                                  </div>
                                </div>
                                <div className="ed-opts">
                                  <a href="# " className="ed-opts-open"><i className="la la-ellipsis-v" /></a>
                                  <ul className="ed-options">
                                    <li><a href="# " >Edit Post</a></li>
                                    <li><a href="# " >Unsaved</a></li>
                                    <li><a href="# " >Unbid</a></li>
                                    <li><a href="# " >Close</a></li>
                                    <li><a href="# " >Hide</a></li>
                                  </ul>
                                </div>
                              </div>
                              <ul className="savedjob-info saved-info">
                                <li>
                                  <h3>Applicants</h3>
                                  <p>10</p>
                                </li>
                                <li>
                                  <h3>Job Type</h3>
                                  <p>Full Time</p>
                                </li>
                                <li>
                                  <h3>Salary</h3>
                                  <p>$600 - Mannual</p>
                                </li>
                                <li>
                                  <h3>Posted : 5 Days Ago</h3>
                                  <p>Open</p>
                                </li>
                                <div className="devepbtn saved-btn">
                                  <a className="clrbtn" href="# ">Unsaved</a>
                                  <a className="clrbtn" href="# ">Message</a>
                                </div>
                              </ul>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="applied" role="tabpanel" aria-labelledby="applied-tab">
                            <div className="post-bar">
                              <div className="p-all saved-post">
                                <div className="usy-dt">
                                  <div className="wordpressdevlp">
                                    <h2>Senior Wordpress Developer</h2>
                                    <p><i className="la la-clock-o" />Posted on 30 August 2018</p>
                                  </div>
                                </div>
                                <div className="ed-opts">
                                  <a href="# " className="ed-opts-open"><i className="la la-ellipsis-v" /></a>
                                  <ul className="ed-options">
                                    <li><a href="# " >Edit Post</a></li>
                                    <li><a href="# " >Unsaved</a></li>
                                    <li><a href="# " >Unbid</a></li>
                                    <li><a href="# " >Close</a></li>
                                    <li><a href="# " >Hide</a></li>
                                  </ul>
                                </div>
                              </div>
                              <ul className="savedjob-info saved-info">
                                <li>
                                  <h3>Applicants</h3>
                                  <p>10</p>
                                </li>
                                <li>
                                  <h3>Job Type</h3>
                                  <p>Full Time</p>
                                </li>
                                <li>
                                  <h3>Salary</h3>
                                  <p>$600 - Mannual</p>
                                </li>
                                <li>
                                  <h3>Posted : 5 Days Ago</h3>
                                  <p>Open</p>
                                </li>
                                <div className="devepbtn saved-btn">
                                  <a className="clrbtn" href="# ">Applied</a>
                                  <a className="clrbtn" href="# ">Message</a>
                                  <a href="# ">
                                    <i className="far fa-trash-alt" />
                                  </a>
                                </div>
                              </ul>
                            </div>
                            </div>
                            
                            
                          <div className="tab-pane fade" id="cadidates" role="tabpanel" aria-labelledby="cadidates-tab">
                            
                            
                            <div className="post-bar">
                              <div className="post_topbar applied-post">
                                <div className="usy-dt">
                                  <img src="../images/resources/us-pic.png" alt="" />
                                  <div className="usy-name">
                                    <h3>John Doe</h3>
                                    <div className="epi-sec epi2">
                                      <ul className="descp descptab bklink">
                                        <li><img src="../images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                        <li><img src="../images/icon9.png" alt="" /><span>India</span></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="ed-opts">
                                  <a href="# " className="ed-opts-open"><i className="la la-ellipsis-v" /></a>
                                  <ul className="ed-options">
                                    <li><a href="# " >Edit Post</a></li>
                                    <li><a href="# " >Accept</a></li>
                                    <li><a href="# " >Unbid</a></li>
                                    <li><a href="# " >Close</a></li>
                                    <li><a href="# " >Hide</a></li>
                                  </ul>
                                </div>
                                <div className="job_descp noborder">
                                  <div className="star-descp review profilecnd">
                                    <ul className="bklik">
                                      <li><i className="fa fa-star" /></li>
                                      <li><i className="fa fa-star" /></li>
                                      <li><i className="fa fa-star" /></li>
                                      <li><i className="fa fa-star" /></li>
                                      <li><i className="fa fa-star-half-o" /></li>
                                      <a href="# " >5.0 of 5 Reviews</a>
                                    </ul>
                                  </div>
                                  <div className="devepbtn appliedinfo noreply">
                                    <a className="clrbtn" href="# ">Accept</a>
                                    <a className="clrbtn" href="# ">View Profile</a>
                                    <a className="clrbtn" href="# ">Message</a>
                                    <a href="# ">
                                      <i className="far fa-trash-alt" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-feed-tab current" id="feed-dd">
                        <div className="posts-section">
                          {feeds ? <Post deleteProject={this.deleteProject} deleteJob={this.deleteJob} post={feeds} user={this.state.user} Myprofile={true} ></Post> : null}

                          <div className="process-comm">
                            <div className="spinner">
                              <div className="bounce1" />
                              <div className="bounce2" />
                              <div className="bounce3" />
                            </div>
                          </div>{/*process-comm end*/}
                        </div>{/*posts-section end*/}
                      </div>{/*product-feed-tab end*/}
                      <div className="product-feed-tab" id="my-bids">
                        <ul className="nav nav-tabs bid-tab" id="myTab" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Manage Bids</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" id="bidders-tab" data-toggle="tab" href="#bidders" role="tab" aria-controls="contact" aria-selected="false">Manage Bidders</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">My Active Bids</a>
                          </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                          <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className="post-bar">
                              <div className="post_topbar">
                                <div className="wordpressdevlp">
                                  <h2>Travel Wordpress Theme</h2>
                                  <p><i className="la la-clock-o" />5 Hour Lefts</p>
                                </div>
                                <ul className="savedjob-info mangebid manbids">
                                  <li>
                                    <h3>Bids</h3>
                                    <p>4</p>
                                  </li>
                                  <li>
                                    <h3>Avg Bid (USD)</h3>
                                    <p>$510</p>
                                  </li>
                                  <li>
                                    <h3>Project Budget (USD)</h3>
                                    <p>$500 - $600</p>
                                  </li>
                                  <ul className="bk-links bklink">
                                    <li><a href="# " ><i className="la la-envelope" /></a></li>
                                  </ul>
                                </ul>
                                <br />
                                <div className="cadidatesbtn bidsbtn">
                                  <button type="button" className="btn btn-primary">
                                    <span className="badge badge-light">3</span>Candidates
                                                </button>
                                  <a href="# ">
                                    <i className="far fa-edit" />
                                  </a>
                                  <a href="# ">
                                    <i className="far fa-trash-alt" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="post-bar">
                              <div className="post_topbar">
                                <div className="wordpressdevlp">
                                  <h2>Travel Wordpress Theme</h2>
                                  <p><i className="la la-clock-o" />5 Hour Lefts</p>
                                </div>
                                <ul className="savedjob-info mangebid manbids">
                                  <li>
                                    <h3>Bids</h3>
                                    <p>4</p>
                                  </li>
                                  <li>
                                    <h3>Avg Bid (USD)</h3>
                                    <p>$510</p>
                                  </li>
                                  <li>
                                    <h3>Project Budget (USD)</h3>
                                    <p>$500 - $600</p>
                                  </li>
                                  <ul className="bk-links bklink">
                                    <li><a href="# " ><i className="la la-envelope" /></a></li>
                                  </ul>
                                </ul>
                                <br />
                                <div className="cadidatesbtn bidsbtn">
                                  <button type="button" className="btn btn-primary">
                                    <span className="badge badge-light">3</span>Candidates
                                                </button>
                                  <a href="# ">
                                    <i className="far fa-edit" />
                                  </a>
                                  <a href="# ">
                                    <i className="far fa-trash-alt" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="post-bar">
                              <div className="post_topbar">
                                <div className="wordpressdevlp">
                                  <h2>Travel Wordpress Theme</h2>
                                  <p><i className="la la-clock-o" />5 Hour Lefts</p>
                                </div>
                                <ul className="savedjob-info mangebid manbids">
                                  <li>
                                    <h3>Bids</h3>
                                    <p>4</p>
                                  </li>
                                  <li>
                                    <h3>Avg Bid (USD)</h3>
                                    <p>$510</p>
                                  </li>
                                  <li>
                                    <h3>Project Budget (USD)</h3>
                                    <p>$500 - $600</p>
                                  </li>
                                  <ul className="bk-links bklink">
                                    <li><a href="# " ><i className="la la-envelope" /></a></li>
                                  </ul>
                                </ul>
                                <br />
                                <div className="cadidatesbtn bidsbtn">
                                  <button type="button" className="btn btn-primary">
                                    <span className="badge badge-light">3</span>Candidates
                                                </button>
                                  <a href="# ">
                                    <i className="far fa-edit" />
                                  </a>
                                  <a href="# ">
                                    <i className="far fa-trash-alt" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className="post-bar">
                              <div className="post_topbar active-bids">
                                <div className="usy-dt">
                                  <div className="wordpressdevlp">
                                    <h2>Travel Wordpress Theme</h2>
                                  </div>
                                </div>
                              </div>
                              <ul className="savedjob-info activ-bidinfo">
                                <li>
                                  <h3>Fixed Price</h3>
                                  <p>$500</p>
                                </li>
                                <li>
                                  <h3>Delivery Time</h3>
                                  <p>8 Days</p>
                                </li>
                                <div className="devepbtn activebtn">
                                  <a href="# ">
                                    <i className="far fa-edit" />
                                  </a>
                                  <a href="# ">
                                    <i className="far fa-trash-alt" />
                                  </a>
                                </div>
                              </ul>
                            </div>
                            <div className="post-bar">
                              <div className="post_topbar active-bids">
                                <div className="usy-dt">
                                  <div className="wordpressdevlp">
                                    <h2>Restaurant Android Application</h2>
                                  </div>
                                </div>
                              </div>
                              <ul className="savedjob-info activ-bidinfo">
                                <li>
                                  <h3>Fixed Price</h3>
                                  <p>$1500</p>
                                </li>
                                <li>
                                  <h3>Delivery Time</h3>
                                  <p>15 Days</p>
                                </li>
                                <div className="devepbtn activebtn">
                                  <a href="# ">
                                    <i className="far fa-edit" />
                                  </a>
                                  <a href="# ">
                                    <i className="far fa-trash-alt" />
                                  </a>
                                </div>
                              </ul>
                            </div>
                            <div className="post-bar">
                              <div className="post_topbar active-bids">
                                <div className="usy-dt">
                                  <div className="wordpressdevlp">
                                    <h2>Online Shopping Html Template with PHP</h2>
                                  </div>
                                </div>
                              </div>
                              <ul className="savedjob-info activ-bidinfo">
                                <li>
                                  <h3>Fixed Price</h3>
                                  <p>$1500</p>
                                </li>
                                <li>
                                  <h3>Delivery Time</h3>
                                  <p>15 Days</p>
                                </li>
                                <div className="devepbtn activebtn">
                                  <a href="# ">
                                    <i className="far fa-edit" />
                                  </a>
                                  <a href="# ">
                                    <i className="far fa-trash-alt" />
                                  </a>
                                </div>
                              </ul>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <div className="post-bar">
                              <div className="post_topbar">
                                <div className="usy-dt">
                                  <div className="wordpressdevlp">
                                    <h2>Senior Wordpress Developer</h2>
                                    <br />
                                    <p><i className="la la-clock-o" />Posted on 30 August 2018</p>
                                  </div>
                                </div>
                                <div className="ed-opts">
                                  <a href="# " className="ed-opts-open"><i className="la la-ellipsis-v" /></a>
                                  <ul className="ed-options">
                                    <li><a href="# " >Edit Post</a></li>
                                    <li><a href="# " >Unsaved</a></li>
                                    <li><a href="# " >Unbid</a></li>
                                    <li><a href="# " >Close</a></li>
                                    <li><a href="# " >Hide</a></li>
                                  </ul>
                                </div>
                              </div>
                              <ul className="savedjob-info">
                                <li>
                                  <h3>Applicants</h3>
                                  <p>10</p>
                                </li>
                                <li>
                                  <h3>Job Type</h3>
                                  <p>Full Time</p>
                                </li>
                                <li>
                                  <h3>Salary</h3>
                                  <p>$600 - Mannual</p>
                                </li>
                                <li>
                                  <h3>Posted : 5 Days Ago</h3>
                                  <p>Open</p>
                                </li>
                                <div className="devepbtn">
                                  <a className="clrbtn" href="# ">Applied</a>
                                  <a className="clrbtn" href="# ">Message</a>
                                  <a href="# ">
                                    <i className="far fa-trash-alt" />
                                  </a>
                                </div>
                              </ul>
                            </div>
                            <div className="post-bar">
                              <div className="post_topbar">
                                <div className="usy-dt">
                                  <div className="wordpressdevlp">
                                    <h2>Senior PHP Developer</h2>
                                    <br />
                                    <p><i className="la la-clock-o" />Posted on 30 August 2018</p>
                                  </div>
                                </div>
                                <div className="ed-opts">
                                  <a href="# " className="ed-opts-open"><i className="la la-ellipsis-v" /></a>
                                  <ul className="ed-options">
                                    <li><a href="# " >Edit Post</a></li>
                                    <li><a href="# " >Unsaved</a></li>
                                    <li><a href="# " >Unbid</a></li>
                                    <li><a href="# " >Close</a></li>
                                    <li><a href="# " >Hide</a></li>
                                  </ul>
                                </div>
                              </div>
                              <ul className="savedjob-info">
                                <li>
                                  <h3>Applicants</h3>
                                  <p>10</p>
                                </li>
                                <li>
                                  <h3>Job Type</h3>
                                  <p>Full Time</p>
                                </li>
                                <li>
                                  <h3>Salary</h3>
                                  <p>$600 - Mannual</p>
                                </li>
                                <li>
                                  <h3>Posted : 5 Days Ago</h3>
                                  <p>Open</p>
                                </li>
                                <div className="devepbtn">
                                  <a className="clrbtn" href="# ">Applied</a>
                                  <a className="clrbtn" href="# ">Message</a>
                                  <a href="# ">
                                    <i className="far fa-trash-alt" />
                                  </a>
                                </div>
                              </ul>
                            </div>
                            <div className="post-bar">
                              <div className="post_topbar">
                                <div className="usy-dt">
                                  <div className="wordpressdevlp">
                                    <h2>UI UX Designer</h2>
                                    <br />
                                    <p><i className="la la-clock-o" />Posted on 30 August 2018</p>
                                  </div>
                                </div>
                                <div className="ed-opts">
                                  <a href="# " className="ed-opts-open"><i className="la la-ellipsis-v" /></a>
                                  <ul className="ed-options">
                                    <li><a href="# " >Edit Post</a></li>
                                    <li><a href="# " >Unsaved</a></li>
                                    <li><a href="# " >Unbid</a></li>
                                    <li><a href="# " >Close</a></li>
                                    <li><a href="# " >Hide</a></li>
                                  </ul>
                                </div>
                              </div>
                              <ul className="savedjob-info">
                                <li>
                                  <h3>Applicants</h3>
                                  <p>10</p>
                                </li>
                                <li>
                                  <h3>Job Type</h3>
                                  <p>Full Time</p>
                                </li>
                                <li>
                                  <h3>Salary</h3>
                                  <p>$600 - Mannual</p>
                                </li>
                                <li>
                                  <h3>Posted : 5 Days Ago</h3>
                                  <p>Open</p>
                                </li>
                                <div className="devepbtn">
                                  <a className="clrbtn" href="# ">Applied</a>
                                  <a className="clrbtn" href="# ">Message</a>
                                  <a href="# ">
                                    <i className="far fa-trash-alt" />
                                  </a>
                                </div>
                              </ul>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="bidders" role="tabpanel" aria-labelledby="bidders-tab">
                            <div className="post-bar">
                              <div className="post_topbar post-bid">
                                <div className="usy-dt">
                                  <img src="../images/resources/us-pic.png" alt="" />
                                  <div className="usy-name">
                                    <h3>John Doe</h3>
                                    <div className="epi-sec epi2">
                                      <ul className="descp descptab bklink">
                                        <li><img src="../images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                        <li><img src="../images/icon9.png" alt="" /><span>India</span></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="ed-opts">
                                  <a href="# " className="ed-opts-open"><i className="la la-ellipsis-v" /></a>
                                  <ul className="ed-options">
                                    <li><a href="# " >Edit Post</a></li>
                                    <li><a href="# " >Accept</a></li>
                                    <li><a href="# " >Unbid</a></li>
                                    <li><a href="# " >Close</a></li>
                                    <li><a href="# " >Hide</a></li>
                                  </ul>
                                </div>
                                <div className="job_descp noborder">
                                  <div className="star-descp review profilecnd">
                                    <ul className="bklik">
                                      <li><i className="fa fa-star" /></li>
                                      <li><i className="fa fa-star" /></li>
                                      <li><i className="fa fa-star" /></li>
                                      <li><i className="fa fa-star" /></li>
                                      <li><i className="fa fa-star-half-o" /></li>
                                      <a href="# " >5.0 of 5 Reviews</a>
                                    </ul>
                                  </div>
                                  <ul className="savedjob-info biddersinfo">
                                    <li>
                                      <h3>Fixed Price</h3>
                                      <p>$500</p>
                                    </li>
                                    <li>
                                      <h3>Delivery Time</h3>
                                      <p>10 Days</p>
                                    </li>
                                  </ul>
                                  <div className="devepbtn appliedinfo bidsbtn">
                                    <a className="clrbtn" href="# ">Accept</a>
                                    <a className="clrbtn" href="# ">View Profile</a>
                                    <a className="clrbtn" href="# ">Message</a>
                                    <a href="# ">
                                      <i className="far fa-trash-alt" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="post-bar">
                              <div className="post_topbar post-bid">
                                <div className="usy-dt">
                                  <img src="../../www.gambolthemes.net/workwise-new/../images/resources/Jassica.html" alt="" />
                                  <div className="usy-name">
                                    <h3>John Doe</h3>
                                    <div className="epi-sec epi2">
                                      <ul className="descp descptab bklink">
                                        <li><img src="../images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                        <li><img src="../images/icon9.png" alt="" /><span>India</span></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="ed-opts">
                                  <a href="# " className="ed-opts-open"><i className="la la-ellipsis-v" /></a>
                                  <ul className="ed-options">
                                    <li><a href="# " >Edit Post</a></li>
                                    <li><a href="# " >Accept</a></li>
                                    <li><a href="# " >Unbid</a></li>
                                    <li><a href="# " >Close</a></li>
                                    <li><a href="# " >Hide</a></li>
                                  </ul>
                                </div>
                                <div className="job_descp noborder">
                                  <div className="star-descp review profilecnd">
                                    <ul className="bklik">
                                      <li><i className="fa fa-star" /></li>
                                      <li><i className="fa fa-star" /></li>
                                      <li><i className="fa fa-star" /></li>
                                      <li><i className="fa fa-star" /></li>
                                      <li><i className="fa fa-star-half-o" /></li>
                                      <a href="# " >5.0 of 5 Reviews</a>
                                    </ul>
                                  </div>
                                  <ul className="savedjob-info biddersinfo">
                                    <li>
                                      <h3>Fixed Price</h3>
                                      <p>$500</p>
                                    </li>
                                    <li>
                                      <h3>Delivery Time</h3>
                                      <p>10 Days</p>
                                    </li>
                                  </ul>
                                  <div className="devepbtn appliedinfo bidsbtn">
                                    <a className="clrbtn" href="# ">Accept</a>
                                    <a className="clrbtn" href="# ">View Profile</a>
                                    <a className="clrbtn" href="# ">Message</a>
                                    <a href="# ">
                                      <i className="far fa-trash-alt" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="post-bar">
                              <div className="post_topbar post-bid">
                                <div className="usy-dt">
                                  <img src="../images/resources/rock.jpg" alt="" />
                                  <div className="usy-name">
                                    <h3>John Doe</h3>
                                    <div className="epi-sec epi2">
                                      <ul className="descp descptab bklink">
                                        <li><img src="../images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                        <li><img src="../images/icon9.png" alt="" /><span>India</span></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="ed-opts">
                                  <a href="# " className="ed-opts-open"><i className="la la-ellipsis-v" /></a>
                                  <ul className="ed-options">
                                    <li><a href="# " >Edit Post</a></li>
                                    <li><a href="# " >Accept</a></li>
                                    <li><a href="# " >Unbid</a></li>
                                    <li><a href="# " >Close</a></li>
                                    <li><a href="# " >Hide</a></li>
                                  </ul>
                                </div>
                                <div className="job_descp noborder">
                                  <div className="star-descp review profilecnd">
                                    <ul className="bklik">
                                      <li><i className="fa fa-star" /></li>
                                      <li><i className="fa fa-star" /></li>
                                      <li><i className="fa fa-star" /></li>
                                      <li><i className="fa fa-star" /></li>
                                      <li><i className="fa fa-star-half-o" /></li>
                                      <a href="# " >5.0 of 5 Reviews</a>
                                    </ul>
                                  </div>
                                  <ul className="savedjob-info biddersinfo">
                                    <li>
                                      <h3>Fixed Price</h3>
                                      <p>$500</p>
                                    </li>
                                    <li>
                                      <h3>Delivery Time</h3>
                                      <p>10 Days</p>
                                    </li>
                                  </ul>
                                  <div className="devepbtn appliedinfo bidsbtn">
                                    <a className="clrbtn" href="# ">Accept</a>
                                    <a className="clrbtn" href="# ">View Profile</a>
                                    <a className="clrbtn" href="# ">Message</a>
                                    <a href="# ">
                                      <i className="far fa-trash-alt" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{/*product-feed-tab end*/}
                      <Infoprofile Editexperience={this.Editexperience} Editeducation={this.Editeducation} skills={this.state.skills} education={this.state.education} experience={this.state.experience} user={this.state.user}></Infoprofile>

                    </div>{/*product-feed-tab end*/}
                    <div className="product-feed-tab" id="rewivewdata">
                      <section />
                      <div className="posts-section">
                        <div className="post-bar reviewtitle">
                          <h2>Reviews</h2>
                        </div>{/*post-bar end*/}
                        <div className="post-bar ">
                          <div className="post_topbar">
                            <div className="usy-dt">
                              <img src="../images/resources/bg-img3.png" alt="" />
                              <div className="usy-name">
                                <h3>Rock William</h3>
                                <div className="epi-sec epi2">
                                  <ul className="descp review-lt">
                                    <li><img src="../images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                    <li><img src="../images/icon9.png" alt="" /><span>India</span></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="job_descp mngdetl">
                            <div className="star-descp review">
                              <ul>
                                <li><i className="fa fa-star" /></li>
                                <li><i className="fa fa-star" /></li>
                                <li><i className="fa fa-star" /></li>
                                <li><i className="fa fa-star" /></li>
                                <li><i className="fa fa-star-half-o" /></li>
                              </ul>
                              <a href="# " >5.0 of 5 Reviews</a>
                            </div>
                            <div className="reviewtext">
                              <p>Lorem ipsum dolor sit amet, adipiscing elit. Nulla luctus mi et porttitor ultrices</p>
                              <hr />
                            </div>
                            <div className="post_topbar post-reply">
                              <div className="usy-dt">
                                <img src="../images/resources/bg-img4.png" alt="" />
                                <div className="usy-name">
                                  <h3>John Doe</h3>
                                  <div className="epi-sec epi2">
                                    <p><i className="la la-clock-o" />3 min ago</p>
                                    <p className="tahnks">Thanks :)</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="post_topbar rep-post rep-thanks">
                              <hr />
                              <div className="usy-dt">
                                <img src="../images/resources/bg-img4.png" alt="" />
                                <input className="reply" type="text" placeholder="Reply" />
                                <a className="replybtn" href="# ">Send</a>
                              </div>
                            </div>
                          </div>
                        </div>{/*post-bar end*/}
                        <div className="post-bar post-thanks">
                          <div className="post_topbar">
                            <div className="usy-dt">
                              <img src="../images/resources/bg-img1.png" alt="" />
                              <div className="usy-name">
                                <h3>Jassica William</h3>
                                <div className="epi-sec epi2">
                                  <ul className="descp review-lt">
                                    <li><img src="../images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                    <li><img src="../images/icon9.png" alt="" /><span>India</span></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="ed-opts">
                              <a href="# " className="ed-opts-open"><i className="la la-ellipsis-v" /></a>
                              <ul className="ed-options">
                                <li><a href="# " >Edit Post</a></li>
                                <li><a href="# " >Unsaved</a></li>
                                <li><a href="# " >Unbid</a></li>
                                <li><a href="# " >Close</a></li>
                                <li><a href="# " >Hide</a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="job_descp mngdetl">
                            <div className="star-descp review">
                              <ul>
                                <li><i className="fa fa-star" /></li>
                                <li><i className="fa fa-star" /></li>
                                <li><i className="fa fa-star" /></li>
                                <li><i className="fa fa-star" /></li>
                                <li><i className="fa fa-star-half-o" /></li>
                              </ul>
                              <a href="# " >5.0 of 5 Reviews</a><br /><br />
                              <p>Awesome Work, Thanks John!</p>
                              <hr />
                            </div>
                            <div className="post_topbar rep-post">
                              <div className="usy-dt">
                                <img src="../images/resources/bg-img4.png" alt="" />
                                <input className="reply" type="text" placeholder="Reply" />
                                <a className="replybtn" href="# ">Send</a>
                              </div>
                            </div>
                          </div>
                        </div>{/*post-bar end*/}
                      </div>{/*posts-section end*/}
                    </div>{/*product-feed-tab end*/}
                    <div className="product-feed-tab" id="my-bids">
                      <div className="posts-section">
                        <div className="post-bar">
                          <div className="post_topbar">
                            <div className="usy-dt">
                              <img src="../images/resources/us-pic.png" alt="" />
                              <div className="usy-name">
                                <h3>John Doe</h3>
                                <span><img src="../images/clock.png" alt="" />3 min ago</span>
                              </div>
                            </div>
                            <div className="ed-opts">
                              <a href="# " className="ed-opts-open"><i className="la la-ellipsis-v" /></a>
                              <ul className="ed-options">
                                <li><a href="# " >Edit Post</a></li>
                                <li><a href="# " >Unsaved</a></li>
                                <li><a href="# " >Unbid</a></li>
                                <li><a href="# " >Close</a></li>
                                <li><a href="# " >Hide</a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="epi-sec">
                            <ul className="descp">
                              <li><img src="../images/icon8.png" alt="" /><span>Frontend Developer</span></li>
                              <li><img src="../images/icon9.png" alt="" /><span>India</span></li>
                            </ul>
                            <ul className="bk-links">
                              <li><a href="# " ><i className="la la-envelope" /></a></li>
                              <li><a href="# " className="bid_now">Bid Now</a></li>
                            </ul>
                          </div>
                          <div className="job_descp">
                            <h3>Simple Classified Site</h3>
                            <ul className="job-dt">
                              <li><span>$300 - $350</span></li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="# " >view more</a></p>
                            <ul className="skill-tags">
                              <li><a href="# " >HTML</a></li>
                              <li><a href="# " >PHP</a></li>
                              <li><a href="# " >CSS</a></li>
                              <li><a href="# " >Javascript</a></li>
                              <li><a href="# " >Wordpress</a></li>
                              <li><a href="# " >Photoshop</a></li>
                              <li><a href="# " >Illustrator</a></li>
                              <li><a href="# " >Corel Draw</a></li>
                            </ul>
                          </div>
                          <div className="job-status-bar">
                            <ul className="like-com">
                              <li>
                                <a href="# "><i className="la la-heart" /> Like</a>
                                <img src="../images/liked-img.png" alt="" />
                                <span>25</span>
                              </li>
                              <li><a href="# " className="com"><img src="../images/com.png" alt="" /> Comment 15</a></li>
                            </ul>
                            <a><i className="la la-eye" />Views 50</a>
                          </div>
                        </div>{/*post-bar end*/}
                        <div className="post-bar">
                          <div className="post_topbar">
                            <div className="usy-dt">
                              <img src="../images/resources/us-pic.png" alt="" />
                              <div className="usy-name">
                                <h3>John Doe</h3>
                                <span><img src="../images/clock.png" alt="" />3 min ago</span>
                              </div>
                            </div>
                            <div className="ed-opts">
                              <a href="# " className="ed-opts-open"><i className="la la-ellipsis-v" /></a>
                              <ul className="ed-options">
                                <li><a href="# " >Edit Post</a></li>
                                <li><a href="# " >Unsaved</a></li>
                                <li><a href="# " >Unbid</a></li>
                                <li><a href="# " >Close</a></li>
                                <li><a href="# " >Hide</a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="epi-sec">
                            <ul className="descp">
                              <li><img src="../images/icon8.png" alt="" /><span>Frontend Developer</span></li>
                              <li><img src="../images/icon9.png" alt="" /><span>India</span></li>
                            </ul>
                            <ul className="bk-links">
                              <li><a href="# " ><i className="la la-envelope" /></a></li>
                              <li><a href="# " className="bid_now">Bid Now</a></li>
                            </ul>
                          </div>
                          <div className="job_descp">
                            <h3>Ios Shopping mobile app</h3>
                            <ul className="job-dt">
                              <li><span>$300 - $350</span></li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="# " >view more</a></p>
                            <ul className="skill-tags">
                              <li><a href="# " >HTML</a></li>
                              <li><a href="# " >PHP</a></li>
                              <li><a href="# " >CSS</a></li>
                              <li><a href="# " >Javascript</a></li>
                              <li><a href="# " >Wordpress</a></li>
                              <li><a href="# " >Photoshop</a></li>
                              <li><a href="# " >Illustrator</a></li>
                              <li><a href="# " >Corel Draw</a></li>
                            </ul>
                          </div>
                          <div className="job-status-bar">
                            <ul className="like-com">
                              <li>
                                <a href="# "><i className="la la-heart" /> Like</a>
                                <img src="../images/liked-img.png" alt="" />
                                <span>25</span>
                              </li>
                              <li><a href="# " className="com"><img src="../images/com.png" alt="" /> Comment 15</a></li>
                            </ul>
                            <a><i className="la la-eye" />Views 50</a>
                          </div>
                        </div>{/*post-bar end*/}
                        <div className="post-bar">
                          <div className="post_topbar">
                            <div className="usy-dt">
                              <img src="../images/resources/us-pic.png" alt="" />
                              <div className="usy-name">
                                <h3>John Doe</h3>
                                <span><img src="../images/clock.png" alt="" />3 min ago</span>
                              </div>
                            </div>
                            <div className="ed-opts">
                              <a href="# " className="ed-opts-open"><i className="la la-ellipsis-v" /></a>
                              <ul className="ed-options">
                                <li><a href="# " >Edit Post</a></li>
                                <li><a href="# " >Unsaved</a></li>
                                <li><a href="# " >Unbid</a></li>
                                <li><a href="# " >Close</a></li>
                                <li><a href="# " >Hide</a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="epi-sec">
                            <ul className="descp">
                              <li><img src="../images/icon8.png" alt="" /><span>Frontend Developer</span></li>
                              <li><img src="../images/icon9.png" alt="" /><span>India</span></li>
                            </ul>
                            <ul className="bk-links">
                              <li><a href="# " ><i className="la la-envelope" /></a></li>
                              <li><a href="# " className="bid_now">Bid Now</a></li>
                            </ul>
                          </div>
                          <div className="job_descp">
                            <h3>Simple Classified Site</h3>
                            <ul className="job-dt">
                              <li><span>$300 - $350</span></li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="# " >view more</a></p>
                            <ul className="skill-tags">
                              <li><a href="# " >HTML</a></li>
                              <li><a href="# " >PHP</a></li>
                              <li><a href="# " >CSS</a></li>
                              <li><a href="# " >Javascript</a></li>
                              <li><a href="# " >Wordpress</a></li>
                              <li><a href="# " >Photoshop</a></li>
                              <li><a href="# " >Illustrator</a></li>
                              <li><a href="# " >Corel Draw</a></li>
                            </ul>
                          </div>
                          <div className="job-status-bar">
                            <ul className="like-com">
                              <li>
                                <a href="# "><i className="la la-heart" /> Like</a>
                                <img src="../images/liked-img.png" alt="" />
                                <span>25</span>
                              </li>
                              <li><a href="# " className="com"><img src="../images/com.png" alt="" /> Comment 15</a></li>
                            </ul>
                            <a><i className="la la-eye" />Views 50</a>
                          </div>
                        </div>{/*post-bar end*/}
                        <div className="post-bar">
                          <div className="post_topbar">
                            <div className="usy-dt">
                              <img src="../images/resources/us-pic.png" alt="" />
                              <div className="usy-name">
                                <h3>John Doe</h3>
                                <span><img src="../images/clock.png" alt="" />3 min ago</span>
                              </div>
                            </div>
                            <div className="ed-opts">
                              <a href="# " className="ed-opts-open"><i className="la la-ellipsis-v" /></a>
                              <ul className="ed-options">
                                <li><a href="# " >Edit Post</a></li>
                                <li><a href="# " >Unsaved</a></li>
                                <li><a href="# " >Unbid</a></li>
                                <li><a href="# " >Close</a></li>
                                <li><a href="# " >Hide</a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="epi-sec">
                            <ul className="descp">
                              <li><img src="../images/icon8.png" alt="" /><span>Frontend Developer</span></li>
                              <li><img src="../images/icon9.png" alt="" /><span>India</span></li>
                            </ul>
                            <ul className="bk-links">
                              <li><a href="# " ><i className="la la-envelope" /></a></li>
                              <li><a href="# " className="bid_now">Bid Now</a></li>
                            </ul>
                          </div>
                          <div className="job_descp">
                            <h3>Ios Shopping mobile app</h3>
                            <ul className="job-dt">
                              <li><span>$300 - $350</span></li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="# " >view more</a></p>
                            <ul className="skill-tags">
                              <li><a href="# " >HTML</a></li>
                              <li><a href="# " >PHP</a></li>
                              <li><a href="# " >CSS</a></li>
                              <li><a href="# " >Javascript</a></li>
                              <li><a href="# " >Wordpress</a></li>
                              <li><a href="# " >Photoshop</a></li>
                              <li><a href="# " >Illustrator</a></li>
                              <li><a href="# " >Corel Draw</a></li>
                            </ul>
                          </div>
                          <div className="job-status-bar">
                            <ul className="like-com">
                              <li>
                                <a href="# "><i className="la la-heart" /> Like</a>
                                <img src="../images/liked-img.png" alt="" />
                                <span>25</span>
                              </li>
                              <li><a href="# " className="com"><img src="../images/com.png" alt="" /> Comment 15</a></li>
                            </ul>
                            <a><i className="la la-eye" />Views 50</a>
                          </div>
                        </div>{/*post-bar end*/}
                        <div className="process-comm">
                          <a href="# " ><img src="../images/process-icon.png" alt="" /></a>
                        </div>{/*process-comm end*/}
                      </div>{/*posts-section end*/}
                    </div>{/*product-feed-tab end*/}
                    <div className="product-feed-tab" id="portfolio-dd">
                      <div className="portfolio-gallery-sec">
                        <h3>Portfolio</h3>
                        <div className="portfolio-btn">
                          <a href="# " ><i className="fas fa-plus-square" /> Add Portfolio</a>
                        </div>
                        <div className="gallery_pf">
                          <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                              <div className="gallery_pt">
                                <img src="../images/resources/pf-img1.jpg" alt="" />
                                <a href="# " ><img src="../images/all-out.png" alt="" /></a>
                              </div>{/*gallery_pt end*/}
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                              <div className="gallery_pt">
                                <img src="../images/resources/pf-img2.jpg" alt="" />
                                <a href="# " ><img src="../images/all-out.png" alt="" /></a>
                              </div>{/*gallery_pt end*/}
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                              <div className="gallery_pt">
                                <img src="../images/resources/pf-img3.jpg" alt="" />
                                <a href="# " ><img src="../images/all-out.png" alt="" /></a>
                              </div>{/*gallery_pt end*/}
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                              <div className="gallery_pt">
                                <img src="../images/resources/pf-img4.jpg" alt="" />
                                <a href="# " ><img src="../images/all-out.png" alt="" /></a>
                              </div>{/*gallery_pt end*/}
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                              <div className="gallery_pt">
                                <img src="../images/resources/pf-img5.jpg" alt="" />
                                <a href="# " ><img src="../images/all-out.png" alt="" /></a>
                              </div>{/*gallery_pt end*/}
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                              <div className="gallery_pt">
                                <img src="../images/resources/pf-img6.jpg" alt="" />
                                <a href="# " ><img src="../images/all-out.png" alt="" /></a>
                              </div>{/*gallery_pt end*/}
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                              <div className="gallery_pt">
                                <img src="../images/resources/pf-img7.jpg" alt="" />
                                <a href="# " ><img src="../images/all-out.png" alt="" /></a>
                              </div>{/*gallery_pt end*/}
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                              <div className="gallery_pt">
                                <img src="../images/resources/pf-img8.jpg" alt="" />
                                <a href="# " ><img src="../images/all-out.png" alt="" /></a>
                              </div>{/*gallery_pt end*/}
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                              <div className="gallery_pt">
                                <img src="../images/resources/pf-img9.jpg" alt="" />
                                <a href="# " ><img src="../images/all-out.png" alt="" /></a>
                              </div>{/*gallery_pt end*/}
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                              <div className="gallery_pt">
                                <img src="../images/resources/pf-img10.jpg" alt="" />
                                <a href="# " ><img src="../images/all-out.png" alt="" /></a>
                              </div>{/*gallery_pt end*/}
                            </div>
                          </div>
                        </div>{/*gallery_pf end*/}
                      </div>{/*portfolio-gallery-sec end*/}
                    </div>{/*product-feed-tab end*/}
                    <div className="col-lg-3">
                      <div className="right-sidebar">

                      </div>{/*right-sidebar end*/}
                    </div>
                  </div>
                  <div className="col-lg-4">
                  </div>
                </div>{/* main-section-data end*/}
              </div>
            </div>
          </div></main>

        <div className="overview-box" id="overview-box">
          <div className="overview-edit">
            <h3>Overview</h3>
            <span>5000 character left</span>
            <form  >
              <textarea ref="overview" defaultValue={this.state.user.overview} />
              <button onClick={this.updateOverview} type="submit" >Save</button>
            </form>
            <a href="# " className="close-box"><i className="la la-close" /></a>
          </div>{/*overview-edit end*/}
        </div>{/*overview-box end*/}
        <div className="overview-box" id="experience-box">
          <div className="overview-edit">
            <h3>Experience</h3>
            <form>
              <input type="text" name="subject" ref="titleex" placeholder="Subject" defaultValue={titleex} />
              <input type="text" name="duration" ref="durationex" placeholder="duration" defaultValue={durationex} />
              <input placeholder='description' ref="descriptionex" defaultValue={descriptionex} />
              {this.state.Experienceedit != '' ? <button onClick={this.deleteExperience} >Delete </button> : null}
              {this.state.Experienceedit ? <button onClick={this.updateExperience}>Save</button> : <button onClick={this.addExperience}> Add</button>}
              <button onClick={this.closeEditEx}>Cancel</button>
            </form>
          </div>{/*overview-edit end*/}
        </div>{/*overview-box end*/}
        <div className="overview-box" id="education-box">
          <div className="overview-edit">
            <h3>Education</h3>
            <form>
              <input type="text" name="school" ref="school" defaultValue={school} placeholder="School / University" />
              <div className="datepicky">
                <div className="row">
                  <div className="col-lg-6 no-left-pd">
                    <div className="datefm">
                      <input type="text" name="from" ref="from" placeholder="From" className="datepicker" />
                      <i className="fa fa-calendar" />
                    </div>
                  </div>
                  <div className="col-lg-6 no-righ-pd">
                    <div className="datefm">
                      <input type="text" name="to" ref="to" placeholder="To" className="datepicker" />
                      <i className="fa fa-calendar" />
                    </div>
                  </div>
                </div>
              </div>
              <input type="text" name="degree" ref="degree" defaultValue={degree} placeholder="Degree" />
              <input placeholder="Description" ref="description" defaultValue={description} />
              {this.state.Educationedit != '' ? <button onClick={this.deleteEducation} >Delete </button> : null}
              {this.state.Educationedit ? <button onClick={this.saveEducation}>Save</button> : <button onClick={this.addEducation}> Add</button>}
              <button onClick={this.closeEditEd}>Cancel</button>
            </form>
          </div>{/*overview-edit end*/}
        </div>{/*overview-box end*/}
        <div className="overview-box" id="location-box">
          <div className="overview-edit">
            <h3>Location</h3>
            <form>
              <div className="datefm">
                <select>
                  <option value="Tunisia">Tunisia</option>
                </select>
                <i className="fa fa-globe" />
              </div>
              <div className="datefm">
                <select ref="selectedLocation">
                  <option value="Monastir">Monastir</option>
                  <option value="Sousse">Sousse</option>
                  <option value="Tunis">Tunis</option>
                  <option value="Kairaouan">Kairaouan</option>
                  <option value="Sfax">Sfax</option>
                </select>
                <i className="fa fa-map-marker" />
              </div>
              <button onClick={this.editLocation} >Save</button>
              <button className="cancel">Cancel</button>
            </form>
            <a href="# " className="close-box"><i className="la la-close" /></a>
          </div>{/*overview-edit end*/}
        </div>{/*overview-box end*/}
        <div className="overview-box" id="skills-box">
          <div className="overview-edit">
            <h3>Skills</h3>
            <ul>
              {skills ? skills.map((skill, index) => <li key={index} ><Link to="# " className="skl-name">{skill.title}</Link><Link to="# " className="close-skl" onClick={() => this.removeSkill(index, skill._id)}><i className="la la-close" /></Link></li>) : null}

            </ul>
            <form>
              <input type="text" ref="skill" name="skills" placeholder="Skills" />
              <button onClick={this.addSkill} >Add or Save</button>
              <button className="cancel">Cancel</button>
            </form>
            <a href="# " className="close-box"><i className="la la-close" /></a>
          </div>{/*overview-edit end*/}
        </div>{/*overview-box end*/}
        <div className="overview-box" id="create-portfolio">
          <div className="overview-edit">
            <h3>Create Portfolio</h3>
            <form>
              <input type="text" name="pf-name" placeholder="Portfolio Name" />
              <div className="file-submit">
                <input type="file" id="file" />
                <label htmlFor="file">Choose File</label>
              </div>
              <div className="pf-img">
                <img src="../images/resources/np.png" alt="" />
              </div>
              <input type="text" name="website-url" placeholder="htp://www.example.com" />
              <button type="submit" className="save">Save</button>
              <button type="submit" className="cancel">Cancel</button>
            </form>
            <a href="# " className="close-box"><i className="la la-close" /></a>
          </div>{/*overview-edit end*/}
        </div>{/*overview-box end*/}
      </div>


    )
  }
}