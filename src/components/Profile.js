import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import Infoprofile from './Infoprofile';

export default class Profile extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={Coverimage:null,profileImg:null,user:{}};
    }
    componentDidMount(){
      const user_id=this.props.match.params.id;
      //console.log(user_id);
     axios.get(`http://localhost:3000/user/${user_id}/getProfile`).then(res=>{
       this.setState({user:res.data}, function () {
         this.setState({profileImg:res.data.image})
         this.setState({Coverimage:res.data.cover})
    });})
     
    }

    onCoverChange=()=>{
      const cover=this.refs.coverimg;
      const user_id=this.props.match.params.id;
      var formData = new FormData();
      formData.append('cover',cover.files[0]);
      axios.post(`http://localhost:3000/user/${user_id}/updatecover`,formData, {
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

    onProfilePicchange=()=>{
      const user_id=this.props.match.params.id;
      const image=this.refs.profileimg;
      var formData = new FormData();
      if (image.files && image.files[0]) {
        formData.append('image',image.files[0])
        let reader = new FileReader();
        reader.onload = (e) => {
          //console.log(e.target)
        };
        reader.readAsDataURL(image.files[0]);
        axios.post(`http://localhost:3000/user/${user_id}/updateImage`,formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
      }).then(function () {
        console.log('SUCCESS!!');
      })
      .catch(function () {
        console.log('FAILURE!!');
      });
        //console.log(image.files[0].name)
      }
      
        window.location.reload();
      
      
    }
    render(){
      //console.log(this.state.profileImg)

        return(
                    <div className="wrapper">
                <section className="cover-sec">
                  { this.state.Coverimage ? <img src={`../forsaRESTAPI/${this.state.Coverimage}`} alt="" style={{width: '1600px', height: '390px'}} /> : <img src="" alt="" />}
                        
                        <div className="add-pic-box">
                          <div className="container">
                            <div className="row no-gutters">
                              <div className="col-lg-12 col-sm-12">					
                                <input  type="file" id="file" ref='coverimg' onChange={this.onCoverChange} />
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
                                      { this.state.profileImg ? <img src={`../forsaRESTAPI/${this.state.profileImg}`} style={{width: '170px', height: '170px'}} alt="" /> :  <img src="" alt="" />}
                                      <div className="add-dp" id="OpenImgUpload"> 
                                          <input  
                                            type={"file"} id="file1" ref='profileimg' onChange={this.onProfilePicchange} />
                                          <label htmlFor="file1"><i className="fas fa-camera"/></label>												
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
                                        <li><a href="# " ><i className="fa fa-facebook-square" /> Http://www.facebook.com/john...</a></li>
                                        <li><a href="# " ><i className="fa fa-twitter" /> Http://www.Twitter.com/john...</a></li>
                                        <li><a href="# " ><i className="fa fa-instagram" /> Http://www.instagram.com/john...</a></li>
                                        
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
                                          <li data-tab="rewivewdata">
                                            <a href="# " >
                                              <img src="../images/review.png" alt="" />
                                              <span>Reviews</span>
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
                                                      <i className="far fa-edit" />
                                                    </a>
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
                                          <div className="posts-bar">
                                            <div className="post-bar bgclr">
                                              <div className="wordpressdevlp">
                                                <h2>Senior Php Developer</h2>
                                                <p><i className="la la-clock-o" /> Posted on 29 August 2018</p>
                                              </div>
                                              <br />
                                              <div className="row no-gutters">
                                                <div className="col-md-6 col-sm-12">
                                                  <div className="cadidatesbtn">
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
                                                <div className="col-md-6 col-sm-12">
                                                  <ul className="bk-links bklink">
                                                    <li><a href="# " ><i className="la la-envelope" /></a></li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="posts-bar">
                                            <div className="post-bar bgclr">
                                              <div className="wordpressdevlp">
                                                <h2>Senior UI UX Designer</h2>
                                                <div className="row no-gutters">
                                                  <div className="col-md-6 col-sm-12">
                                                    <p className="posttext"><i className="la la-clock-o" />Posted on 5 June 2018</p>
                                                  </div>
                                                  <div className="col-md-6 col-sm-12">
                                                    <p><i className="la la-clock-o" />Expiried on 5 October 2018</p>
                                                  </div>
                                                </div>
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
                                                <a className="clrbtn" href="# ">Unsaved</a>
                                                <a className="clrbtn" href="# ">Message</a>
                                              </div>
                                            </ul>
                                          </div>
                                          <div className="post-bar">
                                            <div className="p-all saved-post">
                                              <div className="usy-dt">
                                                <div className="wordpressdevlp">
                                                  <h2>Senior PHP Developer</h2>
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
                                          <div className="post-bar">
                                            <div className="p-all saved-post">
                                              <div className="usy-dt">
                                                <div className="wordpressdevlp">
                                                  <h2>Senior PHP Developer</h2>
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
                                          <div className="post-bar">
                                            <div className="post_topbar  applied-post">
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
                                              <li><img src="../images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                              <li><img src="../images/icon9.png" alt="" /><span>India</span></li>
                                            </ul>
                                            <ul className="bk-links">
                                              <li><a href="# " ><i className="la la-envelope" /></a></li>
                                            </ul>
                                          </div>
                                          <div className="job_descp">
                                            <h3>Senior Wordpress Developer</h3>
                                            <ul className="job-dt">
                                              <li><a href="# " >Full Time</a></li>
                                              <li><span>$30 / hr</span></li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="# " >view more</a></p>
                                            <ul className="skill-tags">
                                              <li><a href="# " >HTML</a></li>
                                              <li><a href="# " >PHP</a></li>
                                              <li><a href="# " >CSS</a></li>
                                              <li><a href="# " >Javascript</a></li>
                                              <li><a href="# " >Wordpress</a></li> 	
                                            </ul>
                                          </div>
                                          <div className="job-status-bar"><a>Overview</a>
                                            <ul className="like-com">
                                              <li>
                                                <a href="# "><i className="fas fa-heart" /> Like</a>
                                                <img src="../images/liked-img.png" alt="" />
                                                <span>25</span>
                                              </li> 
                                              <li><a href="# " className="com"><i className="fas fa-comment-alt" /> Comment 15</a></li>
                                            </ul>
                                            <a href="# "><i className="fas fa-eye" />Views 50</a>
                                          </div>
                                        </div>{/*post-bar end*/}
                                       
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
                                    <Infoprofile></Infoprofile>

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
                          <form>
                            <textarea defaultValue={""} />
                            <button type="submit" className="save">Save</button>
                            <button type="submit" className="cancel">Cancel</button>
                          </form>
                          <a href="# " className="close-box"><i className="la la-close" /></a>
                        </div>{/*overview-edit end*/}
                      </div>{/*overview-box end*/}
                      <div className="overview-box" id="experience-box">
                        <div className="overview-edit">
                          <h3>Experience</h3>
                          <form>
                            <input type="text" name="subject" placeholder="Subject" />
                            <textarea defaultValue={""} />
                            <button type="submit" className="save">Save</button>
                            <button type="submit" className="save-add">Save &amp; Add More</button>
                            <button type="submit" className="cancel">Cancel</button>
                          </form>
                          <a href="# " className="close-box"><i className="la la-close" /></a>
                        </div>{/*overview-edit end*/}
                      </div>{/*overview-box end*/}
                      <div className="overview-box" id="education-box">
                        <div className="overview-edit">
                          <h3>Education</h3>
                          <form>
                            <input type="text" name="school" placeholder="School / University" />
                            <div className="datepicky">
                              <div className="row">
                                <div className="col-lg-6 no-left-pd">
                                  <div className="datefm">
                                    <input type="text" name="from" placeholder="From" className="datepicker" />	
                                    <i className="fa fa-calendar" />
                                  </div>
                                </div>
                                <div className="col-lg-6 no-righ-pd">
                                  <div className="datefm">
                                    <input type="text" name="to" placeholder="To" className="datepicker" />
                                    <i className="fa fa-calendar" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <input type="text" name="degree" placeholder="Degree" />
                            <textarea placeholder="Description" defaultValue={""} />
                            <button type="submit" className="save">Save</button>
                            <button type="submit" className="save-add">Save &amp; Add More</button>
                            <button type="submit" className="cancel">Cancel</button>
                          </form>
                          <a href="# " className="close-box"><i className="la la-close" /></a>
                        </div>{/*overview-edit end*/}
                      </div>{/*overview-box end*/}
                      <div className="overview-box" id="location-box">
                        <div className="overview-edit">
                          <h3>Location</h3>
                          <form>
                            <div className="datefm">
                              <select>
                                <option>Country</option>
                                <option value="pakistan">Pakistan</option>
                                <option value="england">England</option>
                                <option value="india">India</option>
                                <option value="usa">United Sates</option>
                              </select>
                              <i className="fa fa-globe" />
                            </div>
                            <div className="datefm">
                              <select>
                                <option>City</option>
                                <option value="london">London</option>
                                <option value="new-york">New York</option>
                                <option value="sydney">Sydney</option>
                                <option value="chicago">Chicago</option>
                              </select>
                              <i className="fa fa-map-marker" />
                            </div>
                            <button type="submit" className="save">Save</button>
                            <button type="submit" className="cancel">Cancel</button>
                          </form>
                          <a href="# " className="close-box"><i className="la la-close" /></a>
                        </div>{/*overview-edit end*/}
                      </div>{/*overview-box end*/}
                      <div className="overview-box" id="skills-box">
                        <div className="overview-edit">
                          <h3>Skills</h3>
                          <ul>
                            <li><a href="# " className="skl-name">HTML</a><a href="# " className="close-skl"><i className="la la-close" /></a></li>
                            <li><a href="# " className="skl-name">php</a><a href="# " className="close-skl"><i className="la la-close" /></a></li>
                            <li><a href="# " className="skl-name">css</a><a href="# " className="close-skl"><i className="la la-close" /></a></li>
                          </ul>
                          <form>
                            <input type="text" name="skills" placeholder="Skills" />
                            <button type="submit" className="save">Save</button>
                            <button type="submit" className="save-add">Save &amp; Add More</button>
                            <button type="submit" className="cancel">Cancel</button>
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