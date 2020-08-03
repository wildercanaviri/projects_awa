import React,{useState} from 'react';
import {useForm} from 'react-hook-form';
import {Redirect} from 'react-router-dom';
import {auth} from '../../firebase/firebaseConfig';

import Title from './components/Title/Title.jsx';

import Label from './components/Label/Label.jsx';
import './Login.css';


const CreateUser = () =>{
   const {register, errors, handleSubmit}=useForm();
    
   const [nombre, setNombre]=useState("");
   const [apellido, setApellido]=useState("");
   const [email, setEmail]=useState("");

   const [contraseña, setContraseña]=useState("");
   const [confirmContraseña, setConfirmContraseña]=useState("");
   
   const hanleInputChange = e =>{
    const{name, value} = e.target;
    switch(name){
        case "nombre":
            setNombre(value);break;

        case "apellido":
            setApellido(value);break;

        case "email":
            setEmail(value);break;
            
        case "contraseña":
            setContraseña(value);break;
        
        case "confirmContraseña":
            setConfirmContraseña(value);break;
            
        default:
            console.log("no hay valores");
    }
    }

    return(
        <>  
        <form>
            <div className='login-container'>
              
                <div className='login-content'>

                <Title text="Crear Cuenta"/>
                
                <Label text="Nombre"/>
                <input type="text" 
                       className="regular-style"
                       name="nombre"
                       placeholder="Ingrese su nombre" 
                       onChange={hanleInputChange}
                />

                <Label text="Apellido"/>
                <input type="text" 
                       className="regular-style"
                       name="apellido"
                       placeholder="Ingrese su apellido" 
                       onChange={hanleInputChange}
                />

                <Label text="Email"/>
                <input type="text" 
                       className="regular-style"
                       name="email"
                       placeholder="Ingrese su email" 
                       onChange={hanleInputChange}
                />

                <Label text="Contraseña"/>
                <input type="text" 
                       className="regular-style"
                       name="contraseña"
                       placeholder="Ingrese su contraseña" 
                       onChange={hanleInputChange}
                />

                <Label text="Confirmar contraseña"/>
                <input type="text" 
                       className="regular-style"
                       name="confirmContraseña"
                       placeholder="Confirme su contraseña" 
                       onChange={hanleInputChange}
                />

                
                
                


                <div className='submit-button-container'>
                    <button className='submit-button'>
                        Ingresar
                    </button>
                </div>                                
      
             </div>                   
        </div>
            
        </form>
      
        </>
    );
}
export default CreateUser;