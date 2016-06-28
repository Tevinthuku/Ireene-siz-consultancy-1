import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {CardTitle} from 'material-ui/Card';
import Paper from 'material-ui/Paper';

import FlatButton from 'material-ui/FlatButton';

import { Link } from 'react-router';

import { Parallax } from 'react-parallax';

// the light theme
const lightMuiTheme = getMuiTheme(lightBaseTheme);

const thehomepagelayout = {
	position:'fixed',
	top: 200
}


export default class Home extends React.Component {
	render() {
		return (

			<div style={thehomepagelayout}>
			  <h4>Home Page</h4>				
			</div>

		)
	}
}