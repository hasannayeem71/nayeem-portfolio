import "animate.css/animate.min.css";
import React, { Component } from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';
import { GoProject } from 'react-icons/go';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Hello from '../images/Hello.jpg';
import Pencil from '../images/Pencil.jpg';
import classes from './CarouselImages.module.css';

 class CarouselImages extends Component {
     render(){
    return (
        <div className={classes.carousel_container} id="start">
                {/* <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}> */}
            <Carousel className={classes.carousel} dynamicHeight infiniteLoop={true} interval={6000} useKeyboardArrows={true} transitionTime={1700} emulateTouch showArrows={false} autoPlay  showStatus={false} showThumbs={false} >
                <div  className={classes.image_container} >
                    <img className={classes.image} src={Hello}  alt="myImage"/>
                    <div  className={classes.h1}>
                       <h1 >I'm Mahmudul Hasan</h1>
                       <a href="https://drive.google.com/file/d/1jiFxsvgFvFWd9_S303VZkXTEq5uG9eO4/view?usp=sharing" rel="opener noreferrer" target="_blank">VIEW CV   <FaArrowCircleDown/></a>
                    </div>
                </div>
                <div className={classes.image_container}>
                    <img className={classes.image} src={Pencil} alt="myImage"/>
                    <div  className={classes.h2}> 
                    <h1> I love building</h1>
                    <h1>THINGS!!</h1>
                    <a href="https://github.com/hasannayeem71" rel="opener noreferrer" target="_blank">VIEW PROJECTS   <GoProject/></a>
                    </div>
                </div>
                {/* <div className={classes.image_container}>
                    <img className={classes.image} src={laptop1} alt="myImage"/>
                    <div  className={classes.h1}> 
                    </div>
                </div> */}
            </Carousel>
          {/* </ScrollAnimation> */}
        </div>
     )
    }
}
export default CarouselImages