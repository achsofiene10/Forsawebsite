import React from 'react';
import { Link } from 'react-router-dom';
import ShowMoreText from 'react-show-more-text';
import $ from 'jquery'
import axios from 'axios'
import jwt from 'jsonwebtoken'

export default class PostHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userid: '' }
  }

  componentDidMount() {
    var decode1;
    if (localStorage.getItem('token')) { decode1 = jwt.decode(localStorage.getItem('token')); }
    else { decode1 = jwt.decode(sessionStorage.getItem('token')); }
    this.setState({ userid: decode1.user_id })
  }
  render() {
    const feeds = this.props.post;
    const user=this.props.userConnected;
    return (
      <div>
        {feeds  ? feeds.map((feed, index) => feed.project ? <Project userConnected={user} key={index} userid={this.state.userid} project={feed}  ></Project> : <Job key={index} userConnected={user} userid={this.state.userid} job={feed}></Job>) : null}
      </div>
    )
  }

}

class Job extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Opened: '', liked: '', Nblikes: 0,ClickComments:false,Nbcomments:0 }
  }

  executeOnClick(isExpanded) {
    //console.log(isExpanded);
  }
  componentDidMount() {
    $(".ed-opts-open").on("click", function () {
      $(this).next(".ed-options").toggleClass("active");
      return false;
    });

    axios.get(`http://localhost:3000/job/${this.props.job.job._id}/getlikesByjob`).then(res => {
      if (res.status == 200) {
        const index = res.data.likes.findIndex(like => like.userid === this.props.userid);
        index > -1 ? this.setState({ liked: 'active', Nblikes: res.data.likes.length }) : this.setState({ liked: '', Nblikes: res.data.likes.length });
      }
    })
    axios.get(`http://localhost:3000/comment/${this.props.job.job._id}/getCommentsByjob`).then(res => {
      if (res.status == 200) {
      this.setState({ Nbcomments:res.data.comments.length })
      }
    })
  }
  openOpts = () => {
    if (this.state.Opened == '') {
      this.setState({ Opened: 'active' })
    }
    else { this.setState({ Opened: '' }) }
  }

  Like = (e) => {
    e.preventDefault();
    const userid = this.props.userid;
    if (this.state.liked == 'active') {
      axios.post(`http://localhost:3000/job/${userid}/${this.props.job.job._id}/dislike`).then(
        res => {
          if (res.status === 200) {
            console.log("like remove");
            const nb = this.state.Nblikes;
            this.setState({ liked: '', Nblikes: nb - 1 })
            console.log(this.state.Nblikes)
          }
        }).catch(err => console.log(err.data));
    }
    else {
      axios.post(`http://localhost:3000/job/${userid}/${this.props.job.job._id}/addlike`).then(
        res => {
          if (res.status === 200) {
            console.log("like added");
            const nb = this.state.Nblikes;
            this.setState({ liked: 'active', Nblikes: nb + 1 })
            console.log(this.state.Nblikes)
          }
        }).catch(err => console.log(err.data));
    }
  }
  Addcomment=(e)=>{
    const nb = this.state.Nbcomments;
    this.setState({ Nbcomments: nb + 1 })
  }

  OpenComments=(e)=>{
    e.preventDefault();
    const Status=this.state.ClickComments
    this.setState({ClickComments:!Status})
  }



  render() {
    const skills = this.props.job.job.skills.split(" ");
    let date = this.props.job.job.createdAt.substring(0, 16);
    date = date.replace("T", " ")
    let description = this.props.job.job.description
    const image = this.props.job.userImage
    return (
      <div className="post-bar">
        <div className="post_topbar">
          <div className="usy-dt">
            {image ? <img src={`../forsaRESTAPI/${image}`} style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt="" /> : <img src="../images/resources/us-pic.png" alt="" />}
            <div className="usy-name">
              <h3>{this.props.job.userName}</h3 >
              <span><img src="../images/clock.png" alt="" />{date}</span>
            </div>
          </div>
          <div className="ed-opts">
            <Link to="#" onClick={this.openOpts}><i className="la la-ellipsis-v" /></Link>
            <ul className={`ed-options ${this.state.Opened} `}>

              {/*<li><a href="#" >Unsave</a></li>*/}
              <li><a href="#" >Hide</a></li>
            </ul>
          </div>
        </div>          <div className="epi-sec">
          <ul className="descp">
            <li><img src="../images/icon8.png" alt="" /><span>{this.props.job.userJob}</span></li>
            <li><img src="../images/icon9.png" alt="" /><span>{this.props.job.userLocation}</span></li>
          </ul>
          <ul className="bk-links">
            <li><a href="# " ><i className="la la-envelope" /></a></li>
          </ul>
        </div>
        <div className="job_descp">
          <h3>{this.props.job.job.title}</h3>
          <ul className="job-dt">
            <li><a href="# " >{this.props.job.job.time}</a></li>
            <li><span>${this.props.job.job.price} salary</span></li>
          </ul>
          <ul className="job-dt">
            <ShowMoreText
              /* Default options */
              lines={3}
              more='Show more'
              less='Show less'
              anchorClass=''
              onClick={this.executeOnClick}
              expanded={false}
              width={350}
            >
              <p style={{ width: '350px', wordWrap: 'break-word' }}>{description}</p>
            </ShowMoreText>
          </ul>
          <ul className="skill-tags">
            {skills ? skills.map((skill, index) => <li key={index}><a href="#" >{skill} </a></li>) : null}
          </ul>
        </div>
        <div className="job-status-bar">
          <ul className="like-com">
            <li>
              <a href="# " className={`${this.state.liked}`} onClick={this.Like}><i className="fas fa-heart" /> Like</a>
              <span>{this.state.Nblikes} </span>
            </li>

            <li><Link to="#" className="com " onClick={this.OpenComments}><i className="fas fa-comment-alt" /> Comments {this.state.Nbcomments}</Link></li>
          </ul>
        </div>
        {this.state.ClickComments ? <Comments Addcomment={this.Addcomment} userConnected={this.props.userConnected} job={this.props.job.job}></Comments> : null }

      </div>
    )
  }
}

class Project extends React.Component {
  constructor(props) {
    super(props)
    this.state = { Opened: '', liked: '', Nblikes: 0 ,ClickComments:false,Nbcomments:0}
  }
  executeOnClick(isExpanded) {
    //console.log(isExpanded);
  }
  componentDidMount() {
    $(".ed-opts-open").on("click", function () {
      $(this).next(".ed-options").toggleClass("active");
      return false;
    });
    axios.get(`http://localhost:3000/project/${this.props.project.project._id}/getLikesByproject`).then(res => {
      if (res.status == 200) {
        const index = res.data.likes.findIndex(like => like.userid === this.props.userid);
        index > -1 ? this.setState({ liked: 'active', Nblikes: res.data.likes.length }) : this.setState({ liked: '', Nblikes: res.data.likes.length });
      }
    })
    axios.get(`http://localhost:3000/comment/${this.props.project.project._id}/getCommentsByproject`).then(res => {
      if (res.status == 200) {
      this.setState({ Nbcomments:res.data.comments.length })
      }
    })
  }
  openOpts = () => {
    if (this.state.Opened == '') {
      this.setState({ Opened: 'active' })
    }
    else { this.setState({ Opened: '' }) }
  }
  Like = (e) => {
    e.preventDefault();
    const userid = this.props.userid;
    if (this.state.liked == 'active') {
      axios.post(`http://localhost:3000/project/${userid}/${this.props.project.project._id}/dislike`).then(
        res => {
          if (res.status === 200) {
            console.log("like removed");
            const nb = this.state.Nblikes;
            this.setState({ liked: '', Nblikes: nb - 1 })
          }
        }).catch(err => console.log(err.data));
    }
    else {
      axios.post(`http://localhost:3000/project/${userid}/${this.props.project.project._id}/addlike`).then(
        res => {
          if (res.status === 200) {
            console.log("like added");
            const nb = this.state.Nblikes;
            this.setState({ liked: 'active', Nblikes: nb + 1 })
          }
        }).catch(err => console.log(err.data));
    }
  }
  Addcomment=(e)=>{
    const nb = this.state.Nbcomments;
    this.setState({ Nbcomments: nb + 1 })
  }

  OpenComments=(e)=>{
    e.preventDefault();
    const Status=this.state.ClickComments
    this.setState({ClickComments:!Status})
  }





  render() {
    const skills = this.props.project.project.skills.split(" ");
    let date = this.props.project.project.createdAt.substring(0, 16);
    date = date.replace("T", " ")
    let description = this.props.project.project.description
    const image = this.props.project.userImage
    const title = this.props.project.userJob
    const location = this.props.project.userLocation
    return (

      <div className="post-bar">
        <div className="post_topbar">
          <div className="usy-dt">
            {image ? <img src={`../forsaRESTAPI/${image}`} style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt="" /> : <img src="../images/resources/us-pic.png" alt="" />}
            <div className="usy-name">
              <h3>{this.props.project.userName}</h3>
              <span><img src="../images/clock.png" alt="" />{date}</span>
            </div>
          </div>
          <div className="ed-opts">
            <Link to="#" onClick={this.openOpts}><i className="la la-ellipsis-v" /></Link>
            <ul className={`ed-options ${this.state.Opened} `}>
              <li><a href="#" >Unbid</a></li>
              <li><a href="#" >Hide</a></li>
            </ul>
          </div>
        </div>
        <div className="epi-sec">
          <ul className="descp">
            <li><img src="../images/icon8.png" alt="" /><span>{title}</span></li>
            <li><img src="../images/icon9.png" alt="" /><span>{location}</span></li>
          </ul>
          <ul className="bk-links">
            <li><a href="#" ><i className="la la-envelope" /></a></li>
            <li><a href="#" className="bid_now">Bid Now</a></li>
          </ul>
        </div>
        <div className="job_descp">
          <h3>{this.props.project.project.title}</h3>
          <ul className="job-dt">
            <li><span>${this.props.project.project.price}- ${this.props.project.project.toprice}</span></li>
          </ul>
          <ul className='job-dt'>
            <ShowMoreText
              /* Default options */
              lines={3}
              more='Show more'
              less='Show less'
              anchorClass=''
              onClick={this.executeOnClick}
              expanded={false}
              width={350}
            >
              <p style={{ width: '350px', wordWrap: 'break-word' }}>{description}</p>
            </ShowMoreText>
          </ul>
          <ul className="skill-tags">
            {skills ? skills.map((skill, index) => <li key={index}><a href="#" >{skill} </a></li>) : null}
          </ul>
        </div>
        <div className="job-status-bar">
          <ul className="like-com">
            <li>
              <a href="#" className={`${this.state.liked}`} onClick={this.Like}><i className="fas fa-heart" /> Like</a>

              <span>{this.state.Nblikes}</span>
            </li>
            <li><Link to="#" className="com " onClick={this.OpenComments}><i className="fas fa-comment-alt" /> Comments {this.state.Nbcomments}</Link></li>
          </ul>
        </div>
        {this.state.ClickComments ? <Comments Addcomment={this.Addcomment} userConnected={this.props.userConnected} project={this.props.project.project}></Comments> : null }
      </div>

    )
  }
}

class Comments extends React.Component {
  constructor(props){
    super(props);
    this.state={comments:[],content:''}
  }
  componentDidMount(){
    if (this.props.project){
    axios.get(`http://localhost:3000/comment/${this.props.project._id}/getCommentsByproject`).then(
        res => {
          if (res.status === 200) {
            console.log(res.data)
              this.setState({comments:res.data.comments})
          }
        }).catch(err => console.log(err.data));}
    else {
      axios.get(`http://localhost:3000/comment/${this.props.job._id}/getCommentsByjob`).then(
        res => {
          if (res.status === 200) {
            console.log(res.data)
              this.setState({comments:res.data.comments})
          }
        }).catch(err => console.log(err.data));
    }
  }
  AddComment=(e)=>{
    e.preventDefault()
    const content=this.refs.Content.value
    this.refs.Content.value="";
    this.props.Addcomment();
    this.setState({content:''})
    const obj={
      content:content,
      name:this.props.userConnected.fullname,
      image:this.props.userConnected.image,
    }
    if(this.props.project){
    axios.post(`http://localhost:3000/comment/${this.props.userConnected._id}/${this.props.project._id}/createCommentOnproject`,obj).then(
        res => {
          if (res.status === 201) {
            const comments=this.state.comments;
            comments.push(res.data.comment);
            this.setState({comments:comments})
          }
        }).catch(err => console.log(err.data));}
    else{
      axios.post(`http://localhost:3000/comment/${this.props.userConnected._id}/${this.props.job._id}/createCommentOnJob`,obj).then(
        res => {
          if (res.status === 201) {
            const comments=this.state.comments;
            comments.push(res.data.comment);
            this.setState({comments:comments})
          }
        }).catch(err => console.log(err.data));

    }
  }
  render(){
  return (
    <div className="comment-section">
      <a href="#" className="plus-ic">
      </a>
      <div className="comment-sec">
        <ul>
          {this.state.comments.map((comment,index) => <li key={index}>
            <div className="comment-list">
              <div className="cm_img">
                <img src={`../forsaRESTAPI/${comment.image}`} style={{ width: '40px', height: '40px', borderRadius: '50%' }} alt="" />
              </div>
              <div className="comment">
  <h3>{comment.username}</h3>
  <span><img src="../images/clock.png" alt="" /> {comment.time}</span>
                <p>{comment.content} </p>
              </div>
            </div>{/*comment-list end*/}

          </li>)}
          
          
        </ul>
      </div>{/*comment-sec end*/}
      <div className="post-comment">
        <div className="cm_img">
          <img src={`../forsaRESTAPI/${this.props.userConnected.image}`} style={{ width: '40px', height: '40px', borderRadius: '50%' }} alt="" />
        </div>
        <div className="comment_box">
          <form>
            <input type="text" ref="Content"  style={{ width: '70%' }} placeholder="Post a comment" />
            <button onClick={this.AddComment}>Send</button>
          </form>
        </div>
      </div>{/*post-comment end*/}
    </div>
  )
}
}
