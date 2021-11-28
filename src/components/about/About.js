import "animate.css/animate.min.css";
import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import classes from './About.module.css';

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                    <span  className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        <p> My name is Mahmudul Hasan Nayeem and I am currently studying in Computer Science and Engineering from Manarat International University. I want to be a developer as I am interested in developing new things which excite me a lot. :)  </p>
                         <p className={classes.br}>I love exploring new technologies and being a practitioner, I like to stay on top of latest trends.
 </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;