import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Game from './components/Game';
import historyReducer from './reducers/history-reducer';

const store = createStore(historyReducer);

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <Game/>
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);
