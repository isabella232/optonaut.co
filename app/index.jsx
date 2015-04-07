'use strict';

import React from 'react';
import App from './components/App';

if ('document' in window) {
  React.render(<App/>, window.document.body);
}

export default App;
