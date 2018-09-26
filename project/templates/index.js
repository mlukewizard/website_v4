import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';


const myObject = {
    shit: 27
};

ReactDOM.render(
            <App stuff={myObject}/>,
            document.getElementById('root')
  );

