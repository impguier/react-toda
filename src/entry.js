import React from 'react';
import { render } from 'react-dom';
import App from './component/App.js';

import store from './store';
import { Provider } from 'react-redux';

const tem = (
    <Provider store = { store }>
        <App />
    </Provider>
);
render(tem,document.getElementById("app"));

