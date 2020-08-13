import React, { useState } from "react";
import {Container, Row} from 'reactstrap'
import iphone from "./1.jpg";
import iphone2 from "./iphone2.jpg";
import iphone3 from "./iphone3.jpg";

//Import React Slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const photos = [
    {
        name: 'Photo 1',
        url: iphone
    },
    {
        name: 'Photo 2',
        url: iphone2
    },
    {
        name: 'Photo 3',
        url: iphone3
    },
]



const Carousel = (props) => {

    const settings = {
        dots: true,
        fade:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        className: "slides",
    }

    const functionRecorrer = () => {
        {photos.map((photo) => {
            return(
                <img width="100%" src={photo.url}/>
            )
        })};
    }

  return (
    <Container>
        <Slider>
            {/*<h1>hola</h1>*/}
            
        </Slider>
    </Container>
  )
};

export default Carousel;