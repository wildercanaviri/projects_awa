import React,{useState} from 'react';

import Title from './components/Title/Title.jsx';
import logo from '../../assets/images/logo.PNG';

import Label from './components/Label/Label.jsx';
import Input from './components/Input/Input.jsx';
import './Login.css';

import {Redirect} from 'react-router-dom';
import {auth} from '../../firebase/firebaseConfig';

const Login = () =>{


    const[user, setUser]=useState('');
    const[password, setPassword]=useState('');
    const[passwordError,setPasswordError]=useState(false);
    const[isLogin, setIsLogin]=useState(false);
    const[hasError,setHasError]=useState(false);

    function handleChange(name,value){
        setHasError(false);
        switch(name){
            case "usuario":
                setHasError(false);
                setUser(value);
                break;
            case "contraseña":
                setHasError(false);
                if(value.length>=6){
                    setPasswordError(false);
                }else{
                    setPasswordError(true);
                }
                setPassword(value);
       
                break;
            default:
                console.log("no hay valores");
        }
    }

    function ifMatch(user, pass){    
      
            auth.signInWithEmailAndPassword(user, pass).then(()=>{
            setUser('');
            setPasswordError('');
            setHasError('');
            setIsLogin(true);
        }).catch(err=>{
            setHasError(true);
            setIsLogin(false);
        });

    }

    function handleSubmit(){
        let account={user,password};
        if(account){
            ifMatch(user, password);
        }
    }

    return(
        <>  
        {isLogin && <Redirect to= '/home'/>}       
        <div className='login-container'>
              
            <div className='login-content'>

                <Title text="Bienvenido"/>
                <div class= 'color color-primary'></div>
                    <div className='image-container'>
                        <img src={logo} alt='Eduapp' className='image-content'/> 
                    </div>
                
                { hasError &&
                    <label className='label-alert'>
                        Su contraseña o usuario son incorrectos,
                        o no existen en nuestra plataforma
                    </label>
                 
                }
                <Label text ="Usuario"/>
                <Input
                attribute={{
                    id:'usuario',
                    name:'usuario',    
                    type:'text',
                    placeholder:'Ingrese su usuario'

                }}
                handleChange={handleChange}
                />
                <Label text="Contraseña"/>
                <Input            
                attribute={{
                    id:'contraseña',
                    name:'contraseña',    
                    type:'password',
                    placeholder:'Ingrese su contraseña'

                }}
                handleChange={handleChange}
                param={passwordError}
                /> 

                { passwordError &&
                    <label className='label-error'>
                        Contraseña invalida o incompleta
                    </label> 
                }
            
                <div className='submit-button-container'>
                    <button onClick={handleSubmit} className='submit-button'>
                        Ingresar
                    </button>
                </div>                
                
      
             </div>                   
        </div>
        </>
    );
}
export default Login;