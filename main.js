import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute  } from 'react-router';

// for the touchtap events
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


//import the main layout component
import MainLayout from './client/Layouts/MainLayout.jsx';
//import the home component
import Home from './client/Home/Home.jsx';

ReactDOM.render((
   <Router history = {hashHistory}>
      <Route path = "/" component = {MainLayout}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
      </Route>
   </Router>
	
), document.getElementById('app'))