import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import middleware from './middleware';
import reducer from './reducers';
import {BrowserRouter as Router } from 'react-router-dom';


const store = createStore(reducer, middleware);

ReactDOM.render(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>,
    document.getElementById('root')
)
