'use strict';

import React from 'react';

require('./index.less');

const numSteps = 3;
let interval;

export default class ProcessSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeStep: -1
    };
  }

  componentDidMount() {
    const video = React.findDOMNode(this.refs.video);

    if (video) {
      this.setState({ activeStep: 0 });

      video.onloadeddata = function() {
        interval = setInterval(function() {
          const activeStep = (this.state.activeStep + 1) % numSteps;
          this.setState({ activeStep });
        }.bind(this), 5000);
      }.bind(this);
    }
  }

  componentWillUnmount() {
    clearInterval(interval);
  }

  render() {

    let bgVideo;
    if (window.innerWidth >= 500) {
      bgVideo = (
          <video ref='video' loop autoPlay>
            <source src='http://static.optonaut.io.s3.amazonaws.com/process.mp4' type='video/mp4'/>
          </video>
      );
    }

    return (
      <div id='section-process'>
        <div id='section-process-bg'>{bgVideo}</div>
        <div className='container' id='section-process-content'>
          <h2>Optonaut Is Really Simple</h2>
          <p>To take a Virtual Reality photograph - or an Optograph, as we call it - you only need the Optonaut app. <strong>Slowly turn around and take a full panorama shot.</strong> Optonaut will do the rest for you. The Optograph <strong>can be viewed with any Virtual Reality glasses like Google Cardboard.</strong></p>
          <div id='section-process-list'>
            <div className={this.state.activeStep === 0 ? 'active' : ''}>
              <div className='section-process-number'>1</div>
              <div className='section-process-desc'>Capture the scene with your smartphone</div>
            </div>
            <div className={this.state.activeStep === 1 ? 'active' : ''}>
              <div className='section-process-number'>2</div>
              <div className='section-process-desc'>Our servers do the magic of creating a 3D image</div>
            </div>
            <div className={this.state.activeStep === 2 ? 'active' : ''}>
              <div className='section-process-number'>3</div>
              <div className='section-process-desc'>View your Optograph and share it with your friends</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
