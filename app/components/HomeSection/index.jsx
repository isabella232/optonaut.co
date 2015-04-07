'use strict';

import React from 'react';
import YouTube from 'react-youtube';

require('./index.less');

export default class HomeSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showInviteForm: false,
      showVideo: false,
      showSpinner: false
    };
  }

  showInviteForm() {
    this.setState({ showInviteForm: true });
  }

  showVideo() {
    this.setState({ showSpinner: true, showVideo: true });
  }

  _onReady() {
    this.setState({ showSpinner: false });
    console.log('redy');
  }

  render() {
    let foot;
    if (this.state.showInviteForm) {
      foot = (
        <div className='container' id='section-home-foot-wrapper'>
        <span>Some Form</span>
          <div id='section-home-foot-button' onClick={this.showInviteForm.bind(this)}>Yes, I Want An Invite</div>
        </div>
      );
    } else {
      foot = (
        <div className='container' id='section-home-foot-wrapper'>
          <div id='section-home-foot-desc'>The Optonaut App is <strong>invite only</strong> at this stage. <span className='hide-small'>Request an invite to get <strong>early access</strong>.</span></div>
          <div id='section-home-foot-button' onClick={this.showInviteForm.bind(this)}>Request Invite</div>
        </div>
      );
    }

    let bgVideo;
    if (!this.state.showVideo && window.innerWidth >= 750) {
      bgVideo = (
        <video autoPlay loop poster={require('../../assets/images/home.jpg')}>
          <source src='http://localhost:8080/home.mp4' type='video/mp4'/>
        </video>
      );
    }

    let content;
    if (this.state.showVideo) {
      let width;
      if (window.innerWidth * 0.8 < 640) {
        width = parseInt(window.innerWidth * 0.8, 10);
      } else {
        width = 640;
      }
      const ratio = 16 / 9;
      const height = width / ratio;
      const opts = {
        height,
        width,
        playerVars: {
          autoplay: 1,
          showinfo: 0
        }
      };

      content = (
        <div className='container' id='section-home-content'>
          <div id='section-home-video'>
            <div className={this.state.showSpinner ? 'spinner' : 'hide'}></div>
            <div className={this.state.showSpinner ? 'hide' : ''}>
              <YouTube onReady={this._onReady.bind(this)}
                       opts={opts}
                       url={'http://www.youtube.com/watch?v=pEkWlOYnS7A'}
              />
            </div>
          </div>
        </div>
      );
    } else {
      content = (
        <div className='container' id='section-home-content'>
          <div id='section-home-headline'>
            <h1>Dive Into Your Pictures</h1>
            <span>Take Virtual Reality Photographs With Your Smartphone.</span>
          </div>
          <div className='icon' id='section-home-play' onClick={this.showVideo.bind(this)}></div>
        </div>
      );
    }

    return (
      <div id='section-home'>
        <div className={this.state.showVideo ? 'blur' : ''} id='section-home-bg'>{bgVideo}</div>
        {content}
        <div id='section-home-foot'>{foot}</div>
      </div>
    );
  }
}
