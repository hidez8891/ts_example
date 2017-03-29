import * as React from 'react';
import * as ReactDOM from 'react-dom';

let render = () => {
    const { Hello } = require('./hello');
    ReactDOM.render(<Hello />, document.getElementById('hello'));
}

render();