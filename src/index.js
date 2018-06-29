import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css';
import App from './App';

const Main = () => (
  <BrowserRouter basename={'/ferrogromley'}>
    <Route path="/" component={App} />
  </BrowserRouter>
);

ReactDOM.render((<Main />), document.getElementById('root'));