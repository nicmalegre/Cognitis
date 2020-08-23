import React, { useState, useEffect } from "react";
import {Container} from 'reactstrap'
import iphone from "./iphone.jpg";
import iphone2 from "./iphone2.jpg";
import iphone3 from "./iphone3.jpg";

//Import things for the Carousel
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';


//The items for the Carousel
const items = [
    {
      src: iphone,
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
    {
      src: iphone2,
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
      src: iphone3,
      altText: 'Slide 3',
      caption: 'Slide 3'
    }
  ]; 





const CarouselComponent = (props)=> {

    //States and function for the Carousel
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  // useEffect(() => {
  //   setImages(
  //     items.map((item)=>{
  //       images.push(item)
  //     })
  //   );
  //   console.log(images);
  // });

  const slides = items.map((img) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={img.src}
      >
        <img src={img.src} alt={img.altText} />
        <CarouselCaption captionText={img.caption} captionHeader={img.caption} />
      </CarouselItem>
    );
  });





  return (
    <Container>
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
        
        
    </Container>
  )
  }

export default CarouselComponent;