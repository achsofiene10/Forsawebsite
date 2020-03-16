import React from 'react';
import { Link } from 'react-router-dom';
import ShowMoreText from 'react-show-more-text';
import $ from 'jquery'
import axios from 'axios'

export default class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }
  render() {
    const feeds = this.props.post;
    const user = this.props.user;
    const Myprofile = this.props.Myprofile;

    return (

      <div>
        {feeds ? feeds.map((feed, index) => feed.toprice ? <Project key={index} user={user} delete={this.props.deleteProject} project={feed} Myprofile={Myprofile} ></Project> : <Job key={index} Myprofile={Myprofile} delete={this.props.deleteJob} user={user} job={feed}></Job>) : null}
      </div>
    )
  }

}

class Job extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Opened: '' }
  }

  executeOnClick(isExpanded) {
    //console.log(isExpanded);
  }
  componentDidMount() {
    $(".ed-opts-open").on("click", function () {
      $(this).next(".ed-options").toggleClass("active");
      return false;
    });
  }
  openOpts = () => {
    if (this.state.Opened == '') {
      this.setState({ Opened: 'active' })
    }
    else { this.setState({ Opened: '' }) }
  }
  deleteJob = (e) => {
    e.preventDefault();
    const job_id = this.props.job._id;
    axios.delete(`http://localhost:3000/job/${job_id}/deletejob`).then(
      res => {
        if (res.status === 200) {
          console.log("removed")
          this.props.delete(job_id);
        }
        else alert('error')
      })
  }

  editJob=(e)=>{  
    e.preventDefault();
    console.log('clicked')
    this.setState({editOpen:'active'})
    //$(".post-popup job_post").addClass("active");
    $(".wrapper").addClass("overlay");
    this.setState({ Opened: '' }) 
  }

  cancelEdit=(e)=>{
    e.preventDefault();
    this.setState({editOpen:''})
    $(".wrapper").removeClass("overlay");
  }
  UpdateJob=(e)=>{
    e.preventDefault();
    const idjob=this.props.job._id
    const title=this.refs.titleJob.value;
    const category=this.refs.categoryJ.value;
    const price=this.refs.priceJ.value;
    const timejob=this.refs.timejob.value;
    const skills=this.refs.skillsJ.value;
    const description=this.refs.descriptionJ.value;
    if( !title || !category || !price|| !timejob || !skills || !description){
      alert('remplir tous les champs')
      e.preventDefault();
    }else{
      e.preventDefault();
      this.setState({editOpen:''})
      $(".wrapper").removeClass("overlay");
      const obj={
        title:title,
        skills:skills,
        price:price,
        time:timejob,
        description:description,
        category:category
      }
      console.log(obj)
      axios.patch(`http://localhost:3000/job/${idjob}/updatejob`,obj).then(
        res=>{
          if(res.status===200){
            console.log("job updated")
            window.location.reload()
          }
       }).catch(err=>console.log(err.data)); 
      }
  }

  render() {
    const skills = this.props.job.skills.split(" ");
    let date = this.props.job.createdAt.substring(0, 16);
    date = date.replace("T", " ")
    let description = this.props.job.description
    const image = this.props.user.image
    const Myprofile = this.props.Myprofile;
    const title=this.props.job.title;
    return (
      <div className="post-bar">
        <div className="post_topbar">
          <div className="usy-dt">
            {image ? <img src={`../forsaRESTAPI/${image}`} style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt="" /> : <img src="../images/resources/us-pic.png" alt="" />}
            <div className="usy-name">
              <h3>{this.props.user.fullname}</h3 >
              <span><img src="../images/clock.png" alt="" />{date}</span>
            </div>
          </div>
          <div className="ed-opts">
            <Link to="#" onClick={this.openOpts}><i className="la la-ellipsis-v" /></Link>
            <ul className={`ed-options ${this.state.Opened} `}>
              {Myprofile ? <div> <li><a href="#" onClick={this.editJob} >Edit Post</a></li> <li><Link to="#" onClick={this.deleteJob} >Delete</Link></li></div> :
                <div>
                  <li><a href="#" >Unsave</a></li>
                  <li><a href="#" >Hide</a></li> </div>}
            </ul>
          </div>
        </div>          <div className="epi-sec">
          <ul className="descp">
            <li><img src="../images/icon8.png" alt="" /><span>{this.props.user.title}</span></li>
            <li><img src="../images/icon9.png" alt="" /><span>{this.props.user.location}</span></li>
          </ul>
          {!Myprofile ? <ul className="bk-links">
            <li><a href="# " ><i className="la la-envelope" /></a></li>
          </ul> : null}
        </div>
        <div className="job_descp">
          <h3>{this.props.job.title}</h3>
          <ul className="job-dt">
            <li><a href="# " >{this.props.job.time}</a></li>
            <li><span>${this.props.job.price} salary</span></li>
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
              <a href="# "><i className="fas fa-heart" /> Like</a>
              <span>{this.props.job.likes.length} </span>
              
            </li>
           
    <li><a href="# " className="com"><i className="fas fa-comment-alt" /> Comment {this.props.job.comments.length}</a></li>
          </ul>
          <a href="# "><i className="fas fa-eye" />Views 50</a>
        </div>
        <div className={`post-popup job_post ${this.state.editOpen}`}>
          <div className="post-project">
            <h3>Edit a job</h3>
            <div className="post-project-fields">
              <form>
                <div className="row">
                  <div className="col-lg-12">
                    <input type="text" name="title" ref="titleJob" defaultValue={title} placeholder="Title" />
                  </div>
                  <div className="col-lg-12">
                    <div className="inp-field">
                      <select ref="categoryJ" selected={this.props.job.category}>
                        <option>Category</option>
                        <option>Category 1</option>
                        <option>Category 2</option>
                        <option>Category 3</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <input type="text" name="skills" ref="skillsJ" defaultValue={skills} placeholder="Skills" />
                  </div>
                  <div className="col-lg-6">
                    <div className="price-br">
                      <input type="text" name="price1" ref="priceJ"  defaultValue={this.props.job.price} placeholder="Price" />
                      <i className="la la-dollar" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="inp-field">
                      
                      <select ref="timejob" selected={this.props.job.time}>
                        <option>Full Time</option>
                        <option>Half time</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <textarea name="description" placeholder="Description" defaultValue={this.props.job.description} ref="descriptionJ"  />
                  </div>
                  <div className="col-lg-12">
                    <ul>
                      <li><a href="# " onClick={this.UpdateJob} >Save</a></li>
                      <li><a href="# " onClick={this.cancelEdit} >Cancel</a></li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>{/*post-project-fields end*/}
          </div>{/*post-project end*/}
        </div>{/*post-project-popup end*/}
        
      </div>
    )
  }
}

class Project extends React.Component {
  constructor(props) {
    super(props)
    this.state = { Opened: '' }
  }
  executeOnClick(isExpanded) {
    //console.log(isExpanded);
  }
  componentDidMount() {
    $(".ed-opts-open").on("click", function () {
      $(this).next(".ed-options").toggleClass("active");
      return false;
    });
  }
  openOpts = () => {
    if (this.state.Opened == '') {
      this.setState({ Opened: 'active' })
    }
    else { this.setState({ Opened: '' }) }
  }
  deleteProject = (e) => {
    e.preventDefault();
    const project_id = this.props.project._id;
    axios.delete(`http://localhost:3000/project/${project_id}/deleteproject`).then(
      res => {
        if (res.status === 200) {
          console.log("removed")
          this.props.delete(project_id);
        }
        else alert('error')
      })
  }
  

  editProject=(e)=>{  
    e.preventDefault();
    this.setState({ Opened: '' })
    $(".post-popup.pst-pj").addClass("active");
    $(".wrapper").addClass("overlay");
  }

  cancelEdit=(e)=>{
    e.preventDefault();
    $(".post-popup.pst-pj").removeClass("active");
    $(".wrapper").removeClass("overlay");
  }
  UpdateJob=(e)=>{
    e.preventDefault();
    const idproject=this.props.project._id
    const title=this.refs.title.value;
    const category=this.refs.category.value;
    const price=this.refs.price.value;
    const toprice=this.refs.toprice.value;
    const skills=this.refs.skills.value;
    const description=this.refs.description.value;
    if( !title || !category || !price|| !toprice || !skills || !description){
      alert('remplir tous les champs')
    }else{
    $(".post-popup.pst-pj").removeClass("active");
    $(".wrapper").removeClass("overlay");
    const obj={
      title:title,
      skills:skills,
      price:price,
      toprice:toprice,
      description:description,
      category:category
    }
      axios.patch(`http://localhost:3000/project/${idproject}/updateproject`,obj).then(
        res=>{
          if(res.status===200){
            console.log("project updated")
            window.location.reload()
          }
       }).catch(err=>console.log(err.data)); 
      }
    }
  render() {
    const skills = this.props.project.skills.split(" ");
    let date = this.props.project.createdAt.substring(0, 16);
    date = date.replace("T", " ")
    let description = this.props.project.description
    const image = this.props.user.image
    const Myprofile = this.props.Myprofile;
    const title=this.props.project.title
    return (
      <div className="post-bar">
        <div className="post_topbar">
          <div className="usy-dt">
            {image ? <img src={`../forsaRESTAPI/${image}`} style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt="" /> : <img src="../images/resources/us-pic.png" alt="" />}
            <div className="usy-name">
              <h3>{this.props.user.fullname}</h3>
              <span><img src="../images/clock.png" alt="" />{date}</span>
            </div>
          </div>
          <div className="ed-opts">
            <Link to="#" onClick={this.openOpts}><i className="la la-ellipsis-v" /></Link>
            <ul className={`ed-options ${this.state.Opened} `}>
              {Myprofile ? <div> <li><Link to="#" onClick={this.editProject}>Edit Post</Link></li> <li><Link to="# " onClick={this.deleteProject}>Delete</Link></li></div> :
                <div>
                  <li><a href="#" >Unbid</a></li>
                  <li><a href="#" >Hide</a></li> </div>}
            </ul>
          </div>
        </div>
        <div className="epi-sec">
          <ul className="descp">
            <li><img src="../images/icon8.png" alt="" /><span>{this.props.user.title}</span></li>
            <li><img src="../images/icon9.png" alt="" /><span>{this.props.user.location}</span></li>
          </ul>
          {!Myprofile ? <ul className="bk-links">
            <li><a href="#" ><i className="la la-envelope" /></a></li>
            <li><a href="#" className="bid_now">Bid Now</a></li>
          </ul> : null}
        </div>
        <div className="job_descp">
          <h3>{this.props.project.title}</h3>
          <ul className="job-dt">
            <li><span>${this.props.project.price}- ${this.props.project.toprice}</span></li>
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
              <a href="#" className="active"><i className="fas fa-heart" /> Like</a>
             
              <span>{this.props.project.likes.length}</span>
            </li>
            <li><a href="#" className="com "><i className="fas fa-comment-alt" /> Comments {this.props.project.comments.length}</a></li>
          </ul>
          <a href="#"><i className="fas fa-eye" />Views 50</a>
        </div>
        <div className="post-popup pst-pj">
          <div className="post-project">
            <h3>Edit a project</h3>
            <div className="post-project-fields">
              <form>
                <div className="row">
                  <div className="col-lg-12">
                    <input type="text" name="title" ref="title" defaultValue={title} placeholder="Title" />
                  </div>
                  <div className="col-lg-12">
                    <div className="inp-field">
                      <select ref="category" selected={this.props.project.category}>
                        <option>Category</option>
                        <option>Category 1</option>
                        <option>Category 2</option>
                        <option>Category 3</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <input type="text" name="skills" ref="skills" defaultValue={skills} placeholder="Skills" />
                  </div>
                  <div className="col-lg-12">
                    <div className="price-sec">
                      <div className="price-br">
                        <input type="text" name="price1" ref="price" defaultValue={this.props.project.price} placeholder="Price" />
                        <i className="la la-dollar" />
                      </div>
                      <span>To</span>
                      <div className="price-br">
                        <input type="text" name="price1" ref="toprice" defaultValue={this.props.project.toprice}  placeholder="Price" />
                        <i className="la la-dollar" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <textarea name="description" placeholder="Description" defaultValue={description} ref="description"  />
                  </div>
                  <div className="col-lg-12">
                    <ul>
                      <li><a href="# " onClick={this.UpdateJob} >Update</a></li>
                      <li><a href="# " onClick={this.cancelEdit} >Cancel</a></li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>{/*post-project-fields end*/}
          </div>{/*post-project end*/}
        </div>{/*post-project-popup end*/}
      </div>
    )
  }
}
