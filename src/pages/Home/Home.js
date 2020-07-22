import React,{useState} from 'react';
import './Home.css';
import Cards from './Card/Card'
import {Redirect} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {auth} from '../../firebase/firebaseConfig';

const Home = () =>{
    const[isLogout, setIsLogout]=useState(false);
    function logout(){
        
        setIsLogout(true);
        auth.signOut();
    }
    return(
        <>
        {!auth && <Redirect to= '/login'/>}  
        
        {isLogout && <Redirect to= '/login'/>}  
         <Button onClick={logout} variant="light">Cerrar Sesion</Button>
        <div>
            <Cards  props={{
                        title:'Aplicaciones Web Avanzadas',
                        text:'Vladimir Costas'
                    }}/>     
            
            <Cards  props={{
                        title:'Redes Avanzadas de Computadoras',
                        text:'Montecinos Victor Hugo'
                    }}/>
        </div>
       </>
    );
}
export default Home;