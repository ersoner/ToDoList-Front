import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

/* Components */
import HomePageComponents from './partials/HomePage/HomePage';
import RegisterPageComponents from './partials/RegisterPage/RegisterPage';
import LoginPageComponents from './partials/LoginPage/LoginPage';

import './common/styles/all.scss';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <main className='container'>
                <div className='row'>
                    <Route exact path='/register' component={RegisterPageComponents}/>
                    <Route exact path='/login' component={LoginPageComponents}/>
                    <Route exact path='/home' component={HomePageComponents}/>
                </div>
            </main>
        </Router>
    </Provider>,
    document.getElementById('root')
);


