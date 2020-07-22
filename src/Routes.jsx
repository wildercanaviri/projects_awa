import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Crud from './pages/Crud/index';
 
const Routes =()=>{

    return(
        <Router>
            <Switch>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/admin/user' component={Crud}/>
                
            </Switch>
        </Router>
    )
};

export default Routes;