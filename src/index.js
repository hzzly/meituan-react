import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import RouterMap from './router/routerMap'
import './index.scss'

import configureStore from './stores/configureStore'

const store = configureStore()

ReactDOM.render(
	<Provider store={store}>
		<RouterMap />
	</Provider>,
	document.getElementById('root')
);
