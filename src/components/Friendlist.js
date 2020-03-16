import React from 'react'
import ProfileBadge from './ProfileBadge';

export default class Friendlist extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <section className="companies-info">
                      <div className="container">
                        <div className="company-title">
                          <h3>Other profiles</h3>
                        </div>{/*company-title end*/}
                        <div className="companies-list">
                          <div className="row">
                            <ProfileBadge></ProfileBadge>
                          </div>
                        </div>{/*companies-list end*/}
                        <div className="process-comm">
                          <div className="spinner">
                            <div className="bounce1" />
                            <div className="bounce2" />
                            <div className="bounce3" />
                          </div>
                        </div>{/*process-comm end*/}
                      </div>
             </section>
        )
    }
}