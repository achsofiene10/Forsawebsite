import React from 'react';
import Home from './Home';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Compagnies from './Compagnies'; 

export default class Acceuil extends React.Component{
    render (){
        return (
            <div>
                <Switch>
                     <Route path='/' exact component={Home}></Route>
                     <Route path='/compangies' exact component={Compagnies}></Route>
                </Switch>
               
                
            </div>
        )
    }
}