import React,{Fragment} from 'react';
import Header from '../../components/layouts/Header';
import {Carousel} from 'react-bootstrap';
import carousel1 from '../../assets/images/carousel1.jpg';
import carousel2 from '../../assets/images/carousel2.jpg';
import carousel3 from '../../assets/images/carousel3.jpg';

import './Home.css'

const Home = () =>{
    
    return(
        <Fragment>
            <Header/>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="carousel-image"
                    src={carousel1}
                    alt="First slide"
                    />
                   
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                    className="carousel-image"
                    src={carousel2}
                    alt="Third slide"
                    />

                </Carousel.Item>
           
                <Carousel.Item>
                    <img
                    className="carousel-image"
                    src={carousel3}
                    alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
        </Fragment>
    );
}

export default Home;