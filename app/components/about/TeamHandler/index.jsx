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
          It all began in 2014, when this idea won the <a href="http://www.hackzurich.com/">largest European Hackathon</a>.
          After further working on and experimenting with the idea, two members of the
          Hackathon team wanted to take it to the next level and kickstart Optonaut.<br />
          <div className='row'>
            <div className='one-half column' class="team-collumn">
              <img class='team-image' src={require('../../../assets/images/team_johannes.jpg')} /><br />
              Johannes Schickling<br />
              Graduated CS<br />
              Freelancer for +8 years<br />
              Is a deployment expert<br />
              Loves riding his longboard<br />
              Has a magnificient beard
            </div>
            <div className='one-half column' class="team-collumn">
              <img class='team-image' src={require('../../../assets/images/team_emanuel.jpg')} />
              Emanuel J&ouml;bstl<br />
              Graduated CS<br />
              Wrote his BSc Thesis at CMU<br />
              Started with C programming when he was 14<br />
              Likes to take photos<br />
              Always wears colorful socks
            </div>
          </div>
          <strong>Our vision is to make virtual reality accessible for everyone.</strong>

          <h3>Alumni</h3>
        
          A special thank you goes to our great Hackathon
          team members Lisa Masserova and Matthias Standfest!<br />

          <div className='row'>
            <div className='one-half column' class="team-collumn">
              <img class='team-image' src={require('../../../assets/images/team_lisa.jpg')} />
              Elisaweta Masserova<br />
              Studying CS<br />
              Mastered integral calculus when she was 15<br />
              Came over from Ukraine to Kick Ass<br />
              Works as a model from time to time<br />
            </div>
            <div className='one-half column' class="team-collumn">
              <img class='team-image' src={require('../../../assets/images/team_matthias.jpg')} />
              Matthias Standfest<br />
              Works on his PhD in Architecture<br />
              Is an expert for product design<br />
              Owns a really cool griller<br />
              Has an even more magnificient beard<br />
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
