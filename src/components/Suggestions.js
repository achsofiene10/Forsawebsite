import React from 'react';
import { Link } from 'react-router-dom';
import jwt from 'jsonwebtoken'

export default class Suggestions extends React.Component{
    constructor(props){
        super(props)
        this.state={token:{}}
    }
    componentDidMount(){
      var decode1;
    if (localStorage.getItem('token'))
    { decode1 = jwt.decode(localStorage.getItem('token'));}
    else
    {decode1 = jwt.decode(sessionStorage.getItem('token'));}
    if(decode1){
      this.setState({token:decode1})
    }
    }

    render(){
        return(
            <div className="suggestions full-width">
                        <div className="sd-title">
                          <h3>Suggestions</h3>
                        </div>{/*sd-title end*/}
                        <div className="suggestions-list">
                          
                          {this.props.suggestions ? this.props.suggestions.map((user,index)=>
                          <div key={index} className="suggestion-usd">
                          <Link to={`/userprofile/${user._id}`} ><img src={`../forsaRESTAPI/${user.image}`} style={{ width: '40px', height: '40px', borderRadius: '50%' }}  alt="" />
                          <div className="sgt-text">
                          <h4>{user.fullname}</h4>
                          <span style={{display:'inline-block',width:'120px'}}>{user.title}</span>
                          </div></Link>
                        </div>
                          ):null}
                          
                          <div className="view-more">
                            <Link to={`/others/${this.state.token.user_id}`} >View More</Link>
                          </div>
                        </div>{/*suggestions-list end*/}
                      </div>
        )
    }
}