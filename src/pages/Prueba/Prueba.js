import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

import logo from '../../assets/images/logo.PNG';
import './Prueba.css';

const Prueba = () =>{
  
    return(
        
    <Container>
       <div className='image-container'>
            <img src={logo} alt='Eduapp' className='image-content'/> 
        </div>
        
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
            
                <Form.Control type="email" placeholder="Enter email" />
            
                <Form.Text className="text-muted">
                   Ingrese un correo valido
                </Form.Text>
            
            </Form.Group>
            
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>            
                <Form.Control type="password" placeholder="Password" />
                
                <Form.Text className="text-muted">
                    Ingrese una contraseña valida
                </Form.Text>

            </Form.Group>
            
            <div className='submit-button-container'>                     
                <Button variant="success" type="submit">
                    Ingresar
                </Button>
            </div>

        </Form>
    </Container>
 
    );
}
export default Prueba;