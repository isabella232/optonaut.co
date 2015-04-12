'use strict';

import React from 'react';

require('./index.less');

const numSteps = 4;
let interval;

export default class ProcessSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0
    };
  }

  componentDidMount() {
    interval = setInterval(function() {
      const activeStep = (this.state.activeStep + 1) % numSteps;
      this.setState({ activeStep });
    }.bind(this), 2000);
  }

  componentWillUnmount() {
    clearInterval(interval);
  }

  render() {
    return (
      <div id='section-process'>
        <div className='container' id='section-process-content'>
          <h2>Creating VR Easily</h2>
          <p>Put two smartphones in an Optocam and use the Optonaut App to create your 3d panorama. Follow the intuitive instructions and record as if you were taking ordinary panoramas. Our servers will do the rest and you get a brand-new Optograph to share with your friends and family.
</p>
          <div className='row' id='section-process-list'>
            <div className='one-third column'>
              <div className={this.state.activeStep === 0 ? 'active' : ''} id='section-process-feature1'>
                <img src={require('../../assets/images/biggear.svg')}/>
                <img src={require('../../assets/images/smallgear.svg')}/>
              </div>
              <span>Easy Capturing Process</span>
            </div>
            <div className='one-third column'>
              <div className={this.state.activeStep === 1 ? 'active' : ''} id='section-process-feature2'>
                <img src={require('../../assets/images/biggear.svg')}/>
                <img src={require('../../assets/images/smallgear.svg')}/>
              </div>
              <span>Full 360° In Real 3D</span>
            </div>
            <div className='one-third column'>
              <div className={this.state.activeStep === 2 ? 'active' : ''} id='section-process-feature3'>
                <img src={require('../../assets/images/biggear.svg')}/>
                <img src={require('../../assets/images/smallgear.svg')}/>
              </div>
              <span>View With Any VR Glasses</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
