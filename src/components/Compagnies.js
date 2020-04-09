import React from 'react';
import CompanyBadge from './CompanyBadge';
import axios from 'axios';

export default class Compagnies extends React.Component{
  constructor(props){
    super(props);
    this.state={companies:[]};
  }

   componentDidMount(){
     axios.get(`http://localhost:3000/user/users`).then(res=>{
        this.setState({companies:res.data});
      });
  }

  
    render (){
      
      const {companies}=this.state;
             return (
            <div>
      <section className="companies-info">
        <div className="container">
          <div className="company-title">
            <h3>All Companies</h3>
          </div>{/*company-title end*/}
          <div className="companies-list">
            <div className="row">
               {companies.users ? companies.users.map((company,index)=> { if(company.category=="Company")
                     {return <CompanyBadge key={index} company={company} ></CompanyBadge>} }):null }

              
             
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
      </section>{/*companies-info end*/}
              
            </div>
        )
    }
}