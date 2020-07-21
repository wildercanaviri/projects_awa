import React,{useState} from 'react';

import Title from './components/Title/Title.jsx';
import logo from '../../assets/images/logo.PNG';

import Label from './components/Label/Label.jsx';
import Input from './components/Input/Input.jsx';
import './Login.css';

//Card
    import Card from '../../commons/Card/Card.jsx';
//


const Login = () =>{

    const[user, setUser]=useState('');
    const[password, setPassword]=useState('');
    const[passwordError,setPasswordError]=useState(false);
    const[isLogin, setIsLogin]=useState(false);
    const[hasError,setHasError]=useState(false);

    function handleChange(name,value){
        if(name==='usuario'){
            setUser(value);
            setHasError(false); 
        }else{
            if(value.length<4){
                setPasswordError(true);
                setHasError(false);
            }else{
                setPasswordError(false);
                setPassword(value);
                setHasError(false);
            }
        }
    }

    function ifMatch(param){    
        if(param.user.length>0 && param.password.length>0){
            if(param.user==="admin" && param.password==="1234"){
                const {user,password}=param;
                let ac={user,password};
                let account =JSON.stringify(ac);
                localStorage.setItem('accoount',account);
                setIsLogin(true);
            }else{
                setIsLogin(false);
                setHasError(true);
            }    
        }else{
            setIsLogin(false);
            setHasError(true);
        }
    }

    function handleSubmit(){
        let account={user,password};
        if(account){
            ifMatch(account);
        }

    }

    return(
        <div className='login-container'>
            {isLogin? 
                <div className='home-container'>
                    <h1>
                        Hola,{user}
                    </h1>
                    <label>Felicitaciones estas logueado</label>
                </div>
            :            
            <div className='login-content'>
                <Card text="Soy una tarjeta"/>

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
                     <button onClick={handleSubmit} className='submit-button'>Cancelar</button>
                </div>
    
             </div>        
            }                   
        </div>

    );
}
export default Login;