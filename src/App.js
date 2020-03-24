import React from 'react';
import './App.css';
import Signin from './components/Signin';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Route,Link} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Compagnies from './components/Compagnies';
import Profile from './components/Profile'
import { createBrowserHistory } from "history";
import About from './components/About'
import Jobs from './components/Jobs'

import Footer from './components/Footer';
import Chatbox from './components/Chatbox';
import AccountSetting from './components/AccountSetting';
import OtherProfiles from './components/OtherProfiles';
import Friendlist from './components/Friendlist';
import Projects from './components/projects';
import Userprofile from './components/Userprofile';
import axios from 'axios'


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={ loggedIn:false,user:{}}
    this.Logout=this.Logout.bind(this)
    this.Login=this.Login.bind(this)
    }
    componentDidMount(){
      
    
    if(localStorage.getItem('token') || sessionStorage.getItem('token')  ){
      this.setState({loggedIn:true})
    }
    }
    Logout(userid){
      this.setState({loggedIn:false})
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');
      axios.post(`http://localhost:3000/user/logout/${userid}`).then();
    }

    Login(){
      this.setState({loggedIn:true})
    }
  render(){
    const history = createBrowserHistory();
    return(
    <div className="wrapper">
       {this.state.loggedIn ?<div> <Navbar Logout={this.Logout} ></Navbar> <Switch>
         <Route path='/' exact  component={Home}></Route>
         <Route path='/acceuil' exact  component={Home}></Route>
         <Route path='/compagnies' exact component={Compagnies}></Route>
         <Route path='/about' exact component={About} ></Route>
         <Route path='/profile/:id' exact component={Profile}></Route>
         <Route path='/profile/:id/settings' exact component={AccountSetting}></Route> 
         <Route path='/jobs/' exact component={Jobs}></Route>
         <Route path='/projects/' exact component={Projects}></Route>
         <Route path='/others/:id' exact component={OtherProfiles}></Route>
         <Route path='/friendlist/:id' exact component={Friendlist}></Route>
         <Route path='/userprofile/:id' excat component={Userprofile}></Route>
       </Switch><Chatbox></Chatbox><Footer></Footer></div> : <Signin history={history} Login={this.Login}></Signin>}
    </div>  
    )
}
}
export default App;

