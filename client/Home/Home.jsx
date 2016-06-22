import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {Container, Row, Col} from 'apollo-grid';

import { Link } from 'react-router';



// the light theme
const lightMuiTheme = getMuiTheme(lightBaseTheme);

//the header
const homeheader = {
	width:'100%',
	height: 400,
	backgroundColor:'#263238',
	position:'relative'
}

//the big header
const homebanerheader = {
	textAlign:'center',
	color:'white',
	top: 100,
	zIndex: 10,
	position:'relative',
	fontWeight:'lighter',
	fontSize: 50
}

// for the fab for the desktop
const homebannerfabfordesktop = {
   position:'absolute',
   top: 370,
   right: 10,
   backgroundColor:'#263238'

}

// for the mbile
const homebannerfabformobile = {
   position:'fixed',
   bottom: 45,
   right: 10,
   backgroundColor:'#263238',
   zIndex: 40

}

// the big motto
const homebannermotto = {
	textAlign:'center',
	color:'white',
	top: 130,
	zIndex: 10,
	position:'relative',
	fontWeight:'lighter',
	fontSize: 25
}

export default class Home extends React.Component {
	render() {
		return (
				<div>
						{/*the big banner js like old times*/}
								<div style={homeheader}>
			                       <h4 style={homebanerheader}>See It Different.ly</h4>
									<h6 style={homebannermotto}>Learn Build & Repeat The Process</h6>


								</div>

								<div>
						{/*for the tablet and the desktop*/}
											<MuiThemeProvider muiTheme={lightMuiTheme}>
											<Container element="section" fluid={true}>
														  <Row>
														    <Col mdHidden="down">
															    <FloatingActionButton style={homebannerfabfordesktop}>
															      <ContentAdd />
															    </FloatingActionButton>
														    </Col>
														  </Row>
														</Container>

							                </MuiThemeProvider>

			              {/*for the mobile*/}
											<MuiThemeProvider muiTheme={lightMuiTheme}>
											<Container element="section" fluid={true}>
														  <Row>
														    <Col mdHidden="up">
															    <FloatingActionButton style={homebannerfabformobile}>
															      <ContentAdd />
															    </FloatingActionButton>
														    </Col>
														  </Row>
														</Container>

							                </MuiThemeProvider>				                
				</div>

				</div>
		)
	}
}