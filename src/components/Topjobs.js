import React from 'react';
import axios from 'axios';

export default class Topjobs extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div>

      <div className="job-info">
        <div className="job-details">
          <h3>{this.props.job.title}</h3>
          <p style={{whiteSpace: 'nowrap',overflow: 'hidden',textOverflow: 'ellipsis'}}>{this.props.job.description}</p>
        </div>
        <div className="hr-rate">
          <span>${this.props.job.price}</span>
        </div>
      </div>{/*job-info end*/}
      <div className="job-info">
        <div className="job-details">
          <h3> </h3>
          <p> </p>
        </div>
        <div className="hr-rate">
          <span> </span>
        </div>
      </div>{/*job-info end*/}



    </div>

    )
  }

}