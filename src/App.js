import React from 'react';
import './App.css';
import Signin from './components/Signin';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Route,Link} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Acceuil from './components/Acceuil';
import Compagnies from './components/Compagnies';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={ loggedIn:true}
    }
  componentDidMount(){
    }
  render(){
    return(
    <div>
       {this.state.loggedIn ? <Navbar></Navbar> : null }
       <Switch>
         <Route path='/' exact component={Signin} ></Route> 
         <Route path='/acceuil'  component={Home} ></Route>
         <Route path='/compagnies' exact component={Compagnies} ></Route> 
       </Switch>
    </div>  
    )
}
}
export default App;

