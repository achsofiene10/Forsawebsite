import React from 'react';
import './App.css';
import Signin from './components/Signin';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Route,Link} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Acceuil from './components/Acceuil';
import Compagnies from './components/Compagnies';
import Profile from './components/Profile'
import { createBrowserHistory } from "history";
import About from './components/About'

import Footer from './components/Footer';
import Chatbox from './components/Chatbox';
import AccountSetting from './components/AccountSetting';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={ loggedIn:true,user:{}}
    this.Logout=this.Logout.bind(this)
    this.Login=this.Login.bind(this)
    }
    componentDidMount(){
    if(localStorage.getItem('token') || sessionStorage.getItem('token')  ){
      this.setState({loggedIn:true})
    }
    }
    Logout(){
      this.setState({loggedIn:false})
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');
    }

    Login(){
      this.setState({loggedIn:true})
    }
  render(){
    const history = createBrowserHistory();
    return(
    <div className="wrapper">
       {this.state.loggedIn ?<div> <Navbar Logout={this.Logout}></Navbar> <Switch>
         <Route path='/' exact  component={Home}></Route>
         <Route path='/acceuil' exact  component={Home}></Route>
         <Route path='/compagnies' exact component={Compagnies}></Route>
         <Route path='/about' exact component={About} ></Route>
         <Route path='/profile/:id' exact component={Profile}></Route>
         <Route path='/profile/:id/settings' exact component={AccountSetting}></Route>  
       </Switch><Chatbox></Chatbox><Footer></Footer></div> : <Signin history={history} Login={this.Login}></Signin>}
    </div>  
    )
}
}
export default App;

