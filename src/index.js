import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'
import { HashRouter, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

ReactDOM.render(

    <Provider store={ store }>
        <HashRouter>
            <Switch>
                <MuiThemeProvider>
                    <App />
                </MuiThemeProvider>
            </Switch>
        </HashRouter>
    </Provider>, 
document.getElementById('root')
);

