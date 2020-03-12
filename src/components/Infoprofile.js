import React from 'react';

export default class Infoprofile extends React.Component{
    constructor(props){
        super(props);
    }
   
    render(){
      //console.log(this.state.overview)
      const skills=this.props.skills['skills']
      console.log(skills)
        return(
          <div className="product-feed-tab " id="info-dd">
            <div className="user-profile-ov">
              <h3><a href="# " className="overview-open">Overview</a> <a href="# " className="overview-open"><i className="fa fa-pencil" /></a></h3>
              <p> {this.props.user.overview} </p> 
            </div>{/*user-profile-ov end*/}
            <div className="user-profile-ov st2">
              <h3><a href="# " className="exp-bx-open">Experience </a><a href="# " className="exp-bx-open"><i className="fa fa-plus-square" /></a></h3>
              <h4>Web designer <a href="# " className="exp-bx-open" ><i className="fa fa-pencil" /></a></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. </p>
             
              <h4>PHP developer <a href="# " ><i className="fa fa-pencil" /></a></h4>
              <p className="no-margin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. </p>
            </div>{/*user-profile-ov end*/}
            <div className="user-profile-ov">
              <h3><a href="# " className="ed-box-open">Education</a>  <a href="# "  className="ed-box-open" ><i className="fa fa-plus-square" /></a></h3>
              <h4>Master of Computer Science <a href="# " className="ed-box-open" ><i className="fa fa-pencil" /></a></h4>
              <span>2015 - 2018</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. </p>
            </div>{/*user-profile-ov end*/}
            <div className="user-profile-ov">
              <h3><a href="# " className="lct-box-open">Location</a> <a href="# " className="lct-box-open"><i className="fa fa-pencil" /></a></h3>
              <h4>Tunisia</h4>
              <p>{this.props.user.location} </p>
            </div>{/*user-profile-ov end*/}
            <div className="user-profile-ov">
              <h3><a href="# " className="skills-open">Skills</a> <a href="# " className="skills-open"><i className="fa fa-pencil" /></a> </h3>
              <ul>
              {/*skills.length!=0 ? skills.skills.map((skill,index) => <li><a href="# " >{skill.title}</a></li>) : null*/ }
              </ul>
            </div>{/*user-profile-ov end*/}
          
        
        </div>
        )
    }
}