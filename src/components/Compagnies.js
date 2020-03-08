import React from 'react';
import CompanyBadge from './CompanyBadge';
import axios from 'axios';

export default class Compagnies extends React.Component{
  constructor(props){
    super(props);
    this.state={companies:[]};
    this.Callcompany=this.Callcompany.bind(this);
  }

   componentDidMount(){
     axios.get(`http://localhost:3000/user/users`).then(res=>{
       //console.log(res.data); this.setState({companies:res.data});  
      });
  }

  Callcompany(data,index){
    if(data.Category==='Company') {
      return(
    <CompanyBadge key={index} company={data} ></CompanyBadge> )};

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
               {companies.users ? companies.users.map((company,index)=> {
                 return this.Callcompany(company,index)
                  }):null}
              
             
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
    );
  }
});
               
            </div>
        )
    }
}