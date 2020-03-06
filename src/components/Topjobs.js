import React from 'react';

export default class Topjobs extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="widget widget-jobs">
                        <div className="sd-title">
                          <h3>Top Jobs</h3>
                          <i className="la la-ellipsis-v" />
                        </div>
                        <div className="jobs-list">
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Senior Product Designer</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>{/*job-info end*/}
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Senior UI / UX Designer</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>{/*job-info end*/}
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Junior Seo Designer</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>{/*job-info end*/}
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Senior PHP Designer</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>{/*job-info end*/}
                          <div className="job-info">
                            <div className="job-details">
                              <h3>Senior Developer Designer</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                            </div>
                            <div className="hr-rate">
                              <span>$25/hr</span>
                            </div>
                          </div>{/*job-info end*/}
                        </div>{/*jobs-list end*/}
                      </div>
        )
    }

}