import React,{Fragment, useState} from 'react';
import  {db} from '../../firebase/firebaseConfig';
import {auth} from '../../firebase/firebaseConfig';

import {Container, Row, Col, Button} from 'react-bootstrap';

import Header from '../../components/layouts/Header';
import Card from './Card/Card'

const Courses = () =>{
    
       console.log(auth.currentUser);
        const [isAdd, setIsAdd]=useState(false);
        const[entradas, setEntradas]=useState("");
        const hanleInputChange = e =>{
                const{value} = e.target;
                setEntradas(value) 
            }

        function createCourse(){
                setIsAdd(true);
                
        }
        function cancelCourse(){
                setIsAdd(false);
        }
        function addCourse(){
                console.log(entradas)
                db.collection("materias").where("codigo", "==", entradas)
                .get()
                .then(function(querySnapshot) {
                        querySnapshot.forEach(function(doc) {
                                
                        console.log(doc.id, " => ", doc.data());
                        });
                })
                .catch(function(error) {
                        console.log("Error getting documents: ", error);
                });

        }
    return(
        <Fragment>
            <Header/>
            <Container className="themed-container" fluid="sm">
               { 
               isAdd &&
                  <div>
                          <p>Escribe el codigo de la clase</p>
                          <form>
                                <input 
                                        type="text" 
                                        className="form-control mb-2"
                                        onChange={hanleInputChange}>
                                </input>         
                                 <Button onClick={addCourse} variant="success">
                                        Unirse
                                  </Button>
                
                                  <Button onClick={cancelCourse} variant="danger">
                                        Cancelar
                                  </Button>
                
                          </form>
                
                  </div>
               }
               
               <Row >
               {
                       isAdd===false &&
                       <Button onClick={createCourse} variant="success">
                       Añadir Curso
                        </Button>
               }
              

               </Row>
               <Row>
                     <Col md={4}>
                        <Card className="box" props={{
                                title:'Aplicaciones Web Avanzadas',
                                text:'Vladimir Costas'
                        }}/>          
                     </Col>
                     <Col md={4}>
                        <Card className="box" props={{
                                title:'Aplicaciones Web Avanzadas',
                                text:'Vladimir Costas'
                        }}/>          
                     </Col>
                     <Col md={4}>
                        <Card className="box" props={{
                                title:'Aplicaciones Web Avanzadas',
                                text:'Vladimir Costas'
                        }}/>          
                     </Col>
                     <Col md={4}>
                        <Card className="box" props={{
                                title:'Aplicaciones Web Avanzadas',
                                text:'Vladimir Costas'
                        }}/>          
                     </Col>
                     <Col md={4}>
                        <Card className="box" props={{
                                title:'Aplicaciones Web Avanzadas',
                                text:'Vladimir Costas'
                        }}/>          
                     </Col>
                     <Col md={4}>
                        <Card className="box" props={{
                                title:'Aplicaciones Web Avanzadas',
                                text:'Vladimir Costas'
                        }}/>          
                     </Col>
                     <Col md={4}>
                        <Card className="box" props={{
                                title:'Aplicaciones Web Avanzadas',
                                text:'Vladimir Costas'
                        }}/>          
                     </Col>  
                     <Col md={4}>
                        <Card className="box" props={{
                                title:'Aplicaciones Web Avanzadas',
                                text:'Vladimir Costas'
                        }}/>          
                     </Col>
                </Row>  
                    
            
            </Container>
             
        </Fragment>
    );
}

export default Courses;