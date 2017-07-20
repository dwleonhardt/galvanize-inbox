import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import store from './store';
import { Provider } from 'react-redux';
import { messages, selected } from './actions/index';

store.dispatch(messages(), selected());


ReactDOM.render(<Provider store={store}><App store={store}/></Provider>, document.getElementById('root'));
registerServiceWorker();
