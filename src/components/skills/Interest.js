import "animate.css/animate.min.css";
import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import classes from './Interest.module.css';

class Interest extends Component {
  render() {
    return (
      <div className={classes.box} id="interest">
        <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
          <span className={classes.head}>WHAT I DO?</span>
          <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
          <div className={classes.Interest}>
          <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.app}>
                <h3>Web Develpoment</h3>
                <p>I am a full stack web developer(MERN) and build websites using HTML, CSS, Javascript, ReactJs.<br /> I have also good grasp on Node and NoSQL(MongoDb)</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.web}>
                <h3>Problem Solving</h3>
                <p>I also have knowledge of problem solving. Also solve problems on codeforces, Hackerrank, Uri online Judge using c++ and python. </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.other}>
                <h3>Other's Interest</h3>
                <p>I also have decent hand in developing mobile app with React-native.  MS Office, C++,Python, Github are my other fields of interest. </p>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    )
  }
}

export default Interest;