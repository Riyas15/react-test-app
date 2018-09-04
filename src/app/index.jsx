import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.jsx';
import { loadState, saveState } from './utils'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import Login from './components/Login.jsx';
import { HashRouter, Route } from 'react-router-dom';

import reduxThunk from 'redux-thunk'

import 'semantic-ui/dist/semantic.min.css';
import 'react-table/react-table.css';

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, applyMiddleware(reduxThunk));

const App = () => (
    <div style={{height: "100%"}}>
      <Route path="/" exact component={Home} />
      <Route exact path="/home" component={Home} />
      <Route path="/login" component={Login} />
    </div>
);

ReactDOM.render
(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
  , 
    document.getElementById('app')
);
