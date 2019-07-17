import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';

ReactDOM.hydrate(<BrowserRouter>{Routes}</BrowserRouter>, document.querySelector('#root'));