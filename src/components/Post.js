import React from 'react';

export default class Post extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            <div className="post-bar">
        <div className="post_topbar">
          <div className="usy-dt">
            <img src="images/resources/us-pic.png" style={{width: '50px', height: '50px',borderRadius:'50%'}}  alt="" />
            <div className="usy-name">
              <h3>John Doe</h3>
              <span><img src="images/clock.png" alt="" />3 min ago</span>
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
            <li><img src="images/icon8.png" alt="" /><span>Epic Coder</span></li>
            <li><img src="images/icon9.png" alt="" /><span>India</span></li>
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
        <div className="job-status-bar">
          <ul className="like-com">
            <li>
              <a href="# "><i className="fas fa-heart" /> Like</a>
              <img src="images/liked-img.png" alt="" />
              <span>25</span>
            </li> 
            <li><a href="# " className="com"><i className="fas fa-comment-alt" /> Comment 15</a></li>
          </ul>
          <a href="# "><i className="fas fa-eye" />Views 50</a>
        </div>
      </div>
          </div>
        )
    }
}