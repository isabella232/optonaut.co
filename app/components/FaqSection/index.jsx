'use strict';

import React from 'react';

require('./index.less');

export default class FaqSection extends React.Component {
  render() {
    return (
      <div id='section-faq'>
        <div className='container' id='section-faq-content'>
          <h2>FAQ</h2>
          <div className='row'>
            <div className='one-half column'>
              <strong>Which smartphones support <span className='beem'>Beem</span>?</strong><br/> So far we have tested it successfully on all IPhones newer than 4S and all Nexus newer than 4.
            </div>
            <div className='one-half column'>
              <strong>When is <span className='beem'>Beem</span> going to be available?</strong><br/>First large scale Beta tests will be conducted early next year.
            </div>
          </div>
          <div className='row'>
            <div className='one-half column'>
              <strong>Why do I need two smartphones to take pictures?</strong><br/> Just like with your eyes you, need two lenses in order to see from two slightly different perspectives. This is necessary to achieve a depth feeling similar to real life.
            </div>
            <div className='one-half column'>
              <strong>What is the difference to other pictures or photo spheres?</strong><br/>Because we work with two different photo spheres, one for each eye, we are able to provide you with a depth experience standard 2D pictures simply cannot provide.
            </div>
          </div>
          <div className='row'>
            <div className='one-half column'>
              <strong>How much is <span className='beem'>Beem</span> going to cost me?</strong><br/>Inspired by Google Cardboard, we try to make the whole package as affordable as possible. Therefore, we are optimizing all the time and are in lots of negotiations.
            </div>
            <div className='one-half column'>
              <strong>Where can I order the whole <span className='beem'>Beem</span> set?</strong><br/> In a few weeks, you will be able to order it on this website, to be first in line make sure to subscribe to our newsletter.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
