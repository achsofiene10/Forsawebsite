import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom'

export default class Infoprofile extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
      
    }
    openEdit=(education)=>{
      $("#education-box").addClass("open");
      $(".wrapper").addClass("overlay");
    }
    openEditex=(experience)=>{
      $("#experience-box").addClass("open");
      $(".wrapper").addClass("overlay");
    }
    

    renderEducation=(education,index)=>{
     return(
     <div key={index}>  
          <h4>{education.school} <span>{education.degree}</span> <Link to="# " onClick={() => { this.openEdit(education);this.props.Editeducation(education)}} ><i className="fa fa-pencil" /></Link> </h4>
              <span>{education.duration}</span>
            <p> {education.description} </p></div> )
    }
    renderExperience=(experience,index)=>{
return(<div key={index}>
        <h4><span>{experience.title} </span><Link to="# " onClick={() => { this.openEditex(experience);this.props.Editexperience(experience)}} ><i className="fa fa-pencil" /></Link></h4> 
          <p>{experience.duration} </p>
        <p>{experience.description} </p></div>)
        }
   
    render(){
      const skills=this.props.skills['skills'];
      const education=this.props.education['educations'];
      const experience=this.props.experience['experiences'];
        return(
          <div className="product-feed-tab " id="info-dd">
            <div className="user-profile-ov">
              <h3><a href="# " className="overview-open">Overview</a> <a href="# " className="overview-open"><i className="fa fa-pencil" /></a></h3>
              <p> {this.props.user.overview} </p> 
            </div>{/*user-profile-ov end*/}
            <div className="user-profile-ov st2">
              <h3>Experience <a href="# " className="exp-bx-open"><i className="fa fa-plus-square" /></a></h3>
              {experience ? experience.map((experience,index) => this.renderExperience(experience,index) ): null}
            </div>{/*user-profile-ov end*/}
            <div className="user-profile-ov">
              <h3>Education  <a href="# "  className="ed-box-open" ><i className="fa fa-plus-square" /></a></h3>
              
              {education ? education.map((education,index) => this.renderEducation(education,index) ): null}
              
            </div>{/*user-profile-ov end*/}
            <div className="user-profile-ov">
              <h3><a href="# " className="lct-box-open">Location</a> <a href="# " className="lct-box-open"><i className="fa fa-pencil" /></a></h3>
              <h4>Tunisia</h4>
              <p>{this.props.user.location} </p>
            </div>{/*user-profile-ov end*/}
            <div className="user-profile-ov">
              <h3><a href="# " className="skills-open">Skills</a> <a href="# " className="skills-open"><i className="fa fa-pencil" /></a> </h3>
              <ul>
        {skills ? skills.map((skill,index) => <li key={index}><a href="# " >{skill.title} </a></li>) : null }
              </ul>
            </div>{/*user-profile-ov end*/}
          
        
        </div>
        )
    }
}