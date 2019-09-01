import { loadItems } from "./Card/Duck/Index";
import configureStore from "./State/Store";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as React from "react";
import App from './App';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';

function renderApp() {
	// This code starts up the React app when it runs in a browser. It sets up the routing
	// configuration and injects the app into a DOM element.
	// const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;

	// initiate store
	const store = configureStore();
	store.dispatch(loadItems() as any);

	ReactDOM.render(
  (
			<Provider store={store}>
			  <App />     
			</Provider>
  ),
  document.getElementById('root') as HTMLElement
  );
  registerServiceWorker()
}

renderApp();
