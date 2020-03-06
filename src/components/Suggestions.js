import React from 'react';

export default class Suggestions extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="suggestions full-width">
                        <div className="sd-title">
                          <h3>Suggestions</h3>
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
                          <div className="view-more">
                            <a href="#" >View More</a>
                          </div>
                        </div>{/*suggestions-list end*/}
                      </div>
        )
    }
}