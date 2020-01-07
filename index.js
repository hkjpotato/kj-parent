import React from 'react';
import ReactDOM from 'react-dom';
const { hello, MyComp} = require('kj-package');

console.log('kj-parent index.js');
hello();

ReactDOM.render(React.createElement(MyComp, null, null), document.getElementById('root'));

