import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App';
import store from './store'
import './reset.css'

ReactDOM.render(
  <div>
    <Provider store={store}>
      <BrowserRouter>
        <MuiThemeProvider>
          <App />
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider>
  </div>,

  document.getElementById('root'),
);

