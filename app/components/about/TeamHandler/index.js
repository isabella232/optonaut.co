'use strict';

import React from 'react';
import HeadParams from '../../../lib/HeadParams';

require('./index.less');

export default class TeamHandler extends React.Component {

  componentWillMount() {
    this.props.headParams.setTitle('Team - Optonaut');
    this.props.headParams.setDescription('Take Virtual Reality Photographs With Your Smartphone.');
  }

  render() {
    return (
      <div id='team'>
        <div className='container' id='team-content'>
          <h3>Team</h3>
          <p>It all began in 2014, when this idea won the <a href='http://www.hackzurich.com/'>largest European Hackathon</a>.
          After further working on and experimenting with the idea, two members of the Hackathon team wanted to take it to the next level and kickstart Optonaut.</p>
          <div className='row'>
            <div className='one-half column'>
              <img className='team-image' src={require('../../../assets/images/team_johannes.jpg')} /><br />
              <strong>Johannes Schickling</strong>
              <ul>
                <li>Graduated CS</li>
                <li>Freelancer for +8 years</li>
                <li>Loves electronic music</li>
                <li>Rides all kinds of boards</li>
              </ul>
            </div>
            <div className='one-half column'>
              <img className='team-image' src={require('../../../assets/images/team_emanuel.jpg')} /><br />
              <strong>Emanuel J&ouml;bstl</strong>
              <ul>
                <li>Graduated CS</li>
                <li>BSc Thesis at CMU</li>
                <li>Codes C since he is 14</li>
                <li>Loves taking pictures</li>
              </ul>
            </div>
          </div>
          <h3>Alumni</h3>
          A special thank you goes to our great Hackathon
          team members!<br /><br /><br />

          <div className='row'>
            <div className='one-half column'>
              <img className='team-image' src={require('../../../assets/images/team_lisa.jpg')} /><br/>
                <strong>Elisaweta Masserova</strong>
              <ul>
                <li>Studies CS</li>
                <li>Loves math</li>
                <li>Security researcher</li>
                <li>Invincible DOTA player</li>
              </ul>
            </div>
            <div className='one-half column'>
              <img className='team-image' src={require('../../../assets/images/team_matthias.jpg')} /><br/>
              <strong>Matthias Standfest</strong>
              <ul>
                <li>Architecture PhD candidate</li>
                <li>Product design expert</li>
                <li>Likes data mining</li>
                <li>Plays the organ</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TeamHandler.propTypes = {
    headParams: React.PropTypes.instanceOf(HeadParams).isRequired
};
