import React from 'react';
import {render} from 'react-dom';
import {compose, createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import App from './App';
import {rootReducer} from './redux/rootReducer'
import {sagaWatcher} from './redux/saga'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(applyMiddleware(saga)))

saga.run(sagaWatcher)


const app = (
  <Provider store={store}>
    <App />
  </Provider>
)
render(app, document.getElementById('root'));


