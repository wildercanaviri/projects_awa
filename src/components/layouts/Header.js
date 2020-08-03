import React,{Fragment} from 'react';
import header from '../../assets/images/header.jpg';
import {Navbar,Nav} from 'react-bootstrap';
import './Header.css';
const Headers =()=> {
    return (
        <Fragment>
            <img
                alt=""
                src={header}
                width="1500"
                height="60"
            />{' '}

            <Navbar collapseOnSelect expand="lg" className="color-nav">
                <Navbar.Brand href="home" className="text-nav">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="courses" className="text-nav">Cursos</Nav.Link>
                    <Nav.Link href="problems" className="text-nav">Tengo un problema</Nav.Link>
                    </Nav>
                    
                    <Nav>
                        <Nav.Link href="/">Cerrar Sesion</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
        );     
}
export default Headers;
