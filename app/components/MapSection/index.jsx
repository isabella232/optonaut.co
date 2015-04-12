'use strict';

import React from 'react';
import _ from 'lodash';
import RequestInviteForm from '../RequestInviteForm';

require('./index.less');

const numPoints = 7;
let interval;

export default class MapSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showInviteForm: false,
      activePoint: 0
    };
  }

  componentDidMount() {
    interval = setInterval(function() {
      const activePoint = (this.state.activePoint + 1) % numPoints;
      this.setState({ activePoint });
    }.bind(this), 4300);
  }

  componentWillUnmount() {
    clearInterval(interval);
  }

  selectPoint(i) {
    this.setState({ activePoint: i });
    clearInterval(interval);
  }

  showInviteForm() {
    this.setState({ showInviteForm: true });
  }

  render() {
    let foot;
    if (this.state.showInviteForm) {
      foot = (
        <RequestInviteForm buttonClassName='inverse'/>
      );
    } else {
      foot = (
        <div>
          <div className='one-half column' id='section-map-invite-stores'>
            <img src={require('../../assets/images/appstore.png')} title='Coming soon' />
            <img src={require('../../assets/images/playstore.png')} title='Coming soon' />
          </div>
          <div className='one-half column' id='section-map-invite-button'>
            <div className='big-button inverse' onClick={this.showInviteForm.bind(this)}><span className='icon'></span>Request Invite For App</div>
          </div>
        </div>
      );
    }

    const activePoint = this.state.activePoint;
    const pois = _.range(numPoints).map(i => <div key={i} className={i === activePoint ? 'active' : ''} onClick={this.selectPoint.bind(this, i)}></div>);
    return (
      <div id='section-map'>
        <div id='section-map-wrapper'>
          <div className='container' id='section-map-content'>
            <div id='section-map-phone'><div><img key={activePoint} src={require(`../../assets/images/app${activePoint}.jpg`)} /></div></div>
            <div id='section-map-pois'>
              <div id='section-map-pois-wrapper'>{pois}</div>
            </div>
          </div>
        </div>
        <div id='section-map-invite'>
          <div className='container'>{foot}</div>
        </div>
      </div>
    );
  }
}
