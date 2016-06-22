import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {CardTitle} from 'material-ui/Card';
import {Container, Row, Col} from 'apollo-grid';
import Paper from 'material-ui/Paper';

import FlatButton from 'material-ui/FlatButton';

import { Link } from 'react-router';

import { Parallax } from 'react-parallax';

// the light theme
const lightMuiTheme = getMuiTheme(lightBaseTheme);

//the header
const homeheader = {
	width:'100%',
	height: 400,
	backgroundColor:'#03A9F4',
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
   zIndex: 1000

}

// the style for the background images paraalax

const thefirstbackgroundimage = {
	width:'100%',
	height: 400
}


export default class Home extends React.Component {
	render() {
		return (
				<div>
						{/*the big banner js like old times*/}
								<div style={homeheader}>
			                       <h4 style={homebanerheader}>Nelson & Francis</h4>
		
								</div>

				<div>
						{/*for the tablet and the desktop*/}
											<MuiThemeProvider muiTheme={lightMuiTheme}>
											<Container element="section" fluid={true}>
														  <Row>
														    <Col mdHidden="down">
															    <FloatingActionButton style={homebannerfabfordesktop}>
															      <CommunicationCall />
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
															      <CommunicationCall />
															    </FloatingActionButton>
														    </Col>
														  </Row>
														</Container>

							                </MuiThemeProvider>				                


				</div>

{/*the content*/}

{/*the card title with first content*/}
<div>
<MuiThemeProvider muiTheme={lightMuiTheme}>

   <div>
{/*first section*/}
   	<section>
		{/*the first content*/}
		<CardTitle title="Broad Experience Across Different Organizations" 
				   subtitle="Our management team as well as the company's founding partners 
				   			have vast experience having served in reputable organizations
				    		that serve critical sectors of the country's economy." />

		    <FlatButton label="Read More" />
		    <div style={{height: 10}}></div>
		    {/*the parralax in the pic*/}		
	   			<Parallax bgImage="../client/public/image_1.jpg" strength={900}>
	   				<div style={thefirstbackgroundimage}></div>
				</Parallax>   		
   	</section>
{/*second section*/}
   	<section>
		{/*the first content*/}
		<CardTitle title="Tax Services" 
				   subtitle="Achieving tax savings is a universal financial goal. When
				   		 	tax burdens decrease your available financial resources,
				   		 	 you need advice and guidance from financial prof
				   			essionals who know how to address tax challenges and seize tax-saving 
				   			opportunities" />

		    <FlatButton label="Read More" />
		    <div style={{height: 10}}></div>
		    {/*the parralax in the pic*/}		
	   			<Parallax bgImage="../client/public/image_2.jpg" strength={900}>
	   				<div style={thefirstbackgroundimage}></div>
				</Parallax>   		
   	</section>
{/*the third section*/}
   	<section>
		{/*the first content*/}
		<CardTitle title="Audit and Assurance Services" 
				   subtitle="As an integral part of our services provided to our
				    		audit clients, Nelson& Francis performs an internal controls review.
				     		Our evaluation of internal controls is designed to id
				   			entify the areas of greatest risk — where controls ar
				   			e weak or missing altogether." />

		    <FlatButton label="Read More" />
		    <div style={{height: 10}}></div>
		    {/*the parralax in the pic*/}		
	   			<Parallax bgImage="../client/public/image_3.jpg" strength={900}>
	   				<div style={thefirstbackgroundimage}></div>
				</Parallax>   		
   	</section>
<div style={{height: 20}}></div>
{/*for the appollo grid widths*/}
<div>
		<Container element="section" fluid={true}>
		  <Row>
		    <Col sm={12} md={4} lg={4}>
			      <Paper zDepth={2}>
					<CardTitle title="Audit and Assurance"	/> 
					<p style={{padding: 6}}>
						Our professionals offer a comprehensive range of services to help you identify 
						and address business challenges and opportunities. We examine and attest to the 
						financial performance of businesses.

					</p>   	
			      </Paper>
		    </Col>
				<div style={{marginTop: 10}}></div>
		    <Col sm={12} md={4} lg={4}>
			      <Paper zDepth={2}>
					<CardTitle title="Tax Consultancy"	/>  
					<p style={{padding: 6}}>						
					   Our tax advisory services are a key component of a unified strategic 
						planning process.
						 Our professionals work as a team to integrate the 
						most effective tax strategy into your financial and business planning.
					</p>    	
			      </Paper>
		    </Col>
				<div style={{height: 10}}></div>
		    <Col sm={12} md={4} lg={4}>
			      <Paper zDepth={2}>
					<CardTitle title="Management Consultancy" />  
					<p style={{padding: 6}}>
						Our consulting services are geared towards providing 
						you with the expertise to capture your 
						strategy in a powerful way and align your entire 
						organisation towards its achievement.
					</p>    	
			      </Paper>
		    </Col>
		  </Row>
		</Container>	
</div>
  
   </div>
</MuiThemeProvider>

</div>

				</div>
		)
	}
}