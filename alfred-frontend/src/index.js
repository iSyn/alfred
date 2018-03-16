import React from 'react';
import ReactDOM from 'react-dom';
import Alfred from './Alfred';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Alfred />, document.getElementById('root'));
registerServiceWorker();
