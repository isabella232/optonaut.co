'use strict';

import React from 'react';

require('./index.less');

export default class FaqSection extends React.Component {
  render() {
    return (
      <div id='section-faq'>
        <div className='container' id='section-faq-content'>
          <h2>We Got Your Answers</h2>
          <div className='row'>
            <div className='one-half column'>
              <strong>Why shoud I use Optonaut, I already got Instagram</strong><br/> In a few weeks, you will be able to order it on this website, to be first in line make sure to subscribe to our newsletter.
            </div>
            <div className='one-half column'>
              <strong>So what's the difference to panorama images?</strong><br/>Because we work with two different photo spheres, one for each eye, we are able to provide you with a depth experience standard 2D pictures simply cannot provide.
            </div>
          </div>
          <div className='row'>
            <div className='one-half column'>
              <strong>Why do I need extra hardware to use Optonaut?</strong><br/> So far we have tested it successfully on all IPhones newer than 4S and all Nexus newer than 4.
            </div>
            <div className='one-half column'>
              <strong>Where can I get the needed hardware?</strong><br/>First large scale Beta tests will be conducted early next year.
            </div>
          </div>
          <div className='row'>
            <div className='one-half column'>
              <strong>When will Optonaut be publicly available?</strong><br/>Inspired by Google Cardboard, we try to make the whole package as affordable as possible. Therefore, we are optimizing all the time and are in lots of negotiations.
            </div>
            <div className='one-half column'>
              <strong>Does Optonaut work with my smartphone?</strong><br/> Just like with your eyes you, need two lenses in order to see from two slightly different perspectives. This is necessary to achieve a depth feeling similar to real life.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
