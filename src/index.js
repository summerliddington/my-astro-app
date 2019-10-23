import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import LandingPage from '../src/components/LandingPage';
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Router>
                <LandingPage />
              </Router>, document.getElementById('root'));