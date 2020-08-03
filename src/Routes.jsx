import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Login from './pages/Login/Login';
import CreateUser from './pages/Login/createUser';

import Home from './pages/Home/Home';
import Crud from './pages/Crud/index';
import CreateMateria from './pages/Crud/Create';
import EditMateria from './pages/Crud/Edit';

import Course from './pages/Courses/index';
import Problem from './pages/Problems/index';

const Routes =()=>{

    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/createUser' component={CreateUser}/>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/courses' component={Course}/>
                <Route exact path='/problems' component={Problem}/>
                
                
                <Route exact path='/admin/materias' component={Crud}/>
                <Route exact path='/admin/materias/create' component={CreateMateria}/>
                <Route exact path='/admin/materias/edit' component={EditMateria}/>
            </Switch>
        </Router>
    )
};

export default Routes;