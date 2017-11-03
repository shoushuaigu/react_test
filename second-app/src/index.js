import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Handleclick from './test/test1'
import Parent from './test/test2_parent'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Parent />, document.getElementById('root'));
registerServiceWorker();
