import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {compose, createStore} from "redux";
import rootReducer from "./reducers/reducer";

// material ui components
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

// react hotkeys
// keyboard shortcuts
import { HotKeys } from "react-hotkeys";
import { getIdOfFirstVisibleNewsItem, getIdOfFirstNewsItem } from "./utils/newsFeedHelpers";

// our custom breakpoints for MATERIAL-UI
const breakpoints = createBreakpoints({})
breakpoints.values.sm = 720;
const theme = createMuiTheme({
  breakpoints: breakpoints,
  palette: {
    primary: {
      main: '#4B00FF'
    },
  }
});

// redux store
const store = createStore(rootReducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : noop => noop,
));

// key mappings and handler
const keyMap = {
  NEXT_EVENT: "j",
  PREVIOUS_EVENT: "k",
  TOP: 't'
};
const handlers = {
  NEXT_EVENT: event => {
    console.log("getting eventId");
    var eventId = getIdOfFirstVisibleNewsItem();
    console.log("Event ID is " + eventId);
    let eventElement = document.getElementById(eventId);
    eventElement.scrollIntoView();
    eventElement.focus();
  },
  PREVIOUS_EVENT: event => {
    console.log("getting eventId");
    var eventId = getIdOfFirstVisibleNewsItem();
    console.log("Event ID is " + eventId);
    let eventElement = document.getElementById(eventId);
    eventElement.scrollIntoView();
    eventElement.focus();
  },
  TOP: event => {
    console.log("getting eventId");
    var eventId = getIdOfFirstNewsItem();
    console.log("Event ID is " + eventId);
    let eventElement = document.getElementById(eventId);
    eventElement.scrollIntoView();
    eventElement.focus();
  }
};

ReactDOM.render(
  <HotKeys keyMap={keyMap} handlers={handlers} root>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
          <Provider store={store}>
              <App/>
          </Provider>
      </ThemeProvider>
    </React.StrictMode>
  </HotKeys>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
