'use strict';

import React from 'react/addons';
import _ from 'lodash';

require('./index.less');

const numPoints = 7;
let interval;

export default class MapSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activePoint: 0
    };

    interval = setInterval(function() {
      const activePoint = (this.state.activePoint + 1) % numPoints;
      this.setState({ activePoint });
    }.bind(this), 4300);
  }

  selectPoint(i) {
    this.setState({ activePoint: i });
    clearInterval(interval);
  }

  render() {
    const activePoint = this.state.activePoint;
    const pois = _.range(numPoints).map(i => <div className={i === activePoint ? 'active' : ''} onClick={this.selectPoint.bind(this, i)}></div>);
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
          <div className='container'>
            <div className='one-half column' id='section-map-invite-stores'>
              <img src={require('../../assets/images/appstore.png')} title='Coming soon' />
              <img src={require('../../assets/images/playstore.png')} title='Coming soon' />
            </div>
            <div className='one-half column' id='section-map-invite-button'>
              <a className='button inverse' href="#"><span className='icon'></span>Request Invite For App</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
