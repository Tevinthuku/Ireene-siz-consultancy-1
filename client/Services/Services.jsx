import React from 'react';
import {List, ListItem} from 'material-ui/List';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Avatar from 'material-ui/Avatar';
//services style section
const servicesstylesection = {
	maxWidth: 600,
	position:'relative',
	margin:'auto'
}
//services style div
const servicesstylediv = {
	maxWidth:'90%',
	margin:'auto',
	position:'relative'
}


const lightMuiTheme = getMuiTheme(lightBaseTheme);

export default class Services extends React.Component {
	render() {
		return (
			<div>
			  <MuiThemeProvider muiTheme={lightMuiTheme}>
				<section style={servicesstylesection}>
					 <div style={servicesstylediv}>
					 	<List>
					 		<ListItem
						        primaryText="Accounting, audit and financial advisory services"
						      />

					 		<ListItem
						        primaryText="Management consulting services"
						      />	

					 		<ListItem
						        primaryText="Tax and Legal services"
						      />

					 		<ListItem
						        primaryText="Human Resource Development services "
						      />	

					 		<ListItem
						        primaryText="IT consultancy services "
						      />				      					      

					 		<ListItem
						        primaryText="Forensic Investigations"
						      />

					 		<ListItem
						        primaryText="Forensic Technology and Discovery Services"
						      />

					 		<ListItem
						        primaryText="Forensic Data Analytics Dispute Advisory"
						      />

					 		<ListItem
						        primaryText="Computer Forensics and E-Discovery"
						      />

					 		<ListItem
						        primaryText="Internal Audit, Risk & Compliance Services"
						      />


					 		<ListItem
						        primaryText="Business Intelligence"
						      />


					 		<ListItem
						        primaryText="Unclaimed Financial Assets Solutions"
						      />	

					 		<ListItem
						        primaryText="Anti-money laundering advisory services"
						      />

					 		<ListItem
						        primaryText="Company Secretarial Services"
						      />
					 	</List>
					 </div>
				</section>
			  </MuiThemeProvider>
			</div>
		)
	}
}