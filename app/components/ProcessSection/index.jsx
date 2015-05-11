'use strict';

import React from 'react';

require('./index.less');

const numSteps = 3;
let interval;

export default class ProcessSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0
    };
  }

  componentDidMount() {
    const video = React.findDOMNode(this.refs.video);

    video.onloadeddata = function() {
      interval = setInterval(function() {
        const activeStep = (this.state.activeStep + 1) % numSteps;
        this.setState({ activeStep });
      }.bind(this), 5000);
    }.bind(this);
  }

  componentWillUnmount() {
    clearInterval(interval);
  }

  render() {
    return (
      <div id='section-process'>
        <div id='section-process-bg'>
          <video ref='video' loop autoPlay poster={require('../../assets/images/home.jpg')}>
            <source src='http://static.optonaut.io.s3.amazonaws.com/process.mp4' type='video/mp4'/>
          </video>
        </div>
        <div className='container' id='section-process-content'>
          <h2>Optonaut Is Really Simple</h2>
          <p>To take a Virtual Reality photograph - or an Optograph, as we call it - you only need the Optonaut app. <strong>Slowly turn around and take a full panorama shot.</strong> Optonaut will do the rest for you.<br/>While you're recording a scene, our servers do the magic of creating a 3D image. The Optograph <strong>can be viewed with any Virtual Reality glasses like Google Cardboard.</strong></p>
          <div id='section-process-list'>
            <div className={this.state.activeStep === 0 ? 'active' : ''}>
              <div>1</div>
              <span>Caputure the scene with your smartphone</span>
            </div>
            <div className={this.state.activeStep === 1 ? 'active' : ''}>
              <div>2</div>
              <span>Our servers do the magic of creating a 3D image</span>
            </div>
            <div className={this.state.activeStep === 2 ? 'active' : ''}>
              <div>3</div>
              <span>View your Optograph and share it with your friends</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
