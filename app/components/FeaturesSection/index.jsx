'use strict';

import React from 'react';

require('./index.less');

export default class FeaturesSection extends React.Component {
  render() {
    return (
      <div id='section-features'>
        <div className='container' id='section-features-content'>
          <h2>Create And Share Virtual Reality Content</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.</p>
        </div>
      </div>
    );
  }
}
