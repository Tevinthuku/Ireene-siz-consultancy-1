import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

import { Link } from 'react-router';


// the light theme
const lightMuiTheme = getMuiTheme(lightBaseTheme);


const homesectionwidth = {
	maxWidth: 600,
	position:'relative',
	margin:'auto'
}

const homeninetypercent = {
	maxWidth:'90%',
	position:'relative',
	margin:'auto'
}

export default class Home extends React.Component {
	render() {
		return (

			<div>
       <MuiThemeProvider muiTheme={lightMuiTheme}>
			 <section style={homesectionwidth}>
				 <div style={homeninetypercent}>

				 	  <Card>

						    <CardTitle title=" BACKGROUND OF THE CONSULTING FIRM" subtitle="M/S Nelson and Francis Associates" />
						    <CardText>
		 						(Formerly Francis CC and Associates)
		 						is an 18-year-old Accountancy, Tax and Management Consultancy firm with its headquarters in Eldoret and a branch in Nairobi& Mombasa. It is a registered professional firm with the Registrar of Companies, the Institute of Certified Public Accountants of Kenya (ICPAK) and the SACCO Societies Regulatory Authority (SASRA).
								The firm has rich practical experiences working with corporate entities, governmental and non-governmental organizations, SACCOs, microenterprises and specific projects, and a pool of highly qualified and experienced accountants and trainers to fully attend and execute your assignment(s) beyond your expectations. The Managing Partner, Associate Partners and Managers play an active role in ensuring the highest quality standards are met and that client needs are addressed in the most efficient and effective manner. We rely on a strong relationship with our clients in order to provide impeccable service with each client receiving dedicated service throughout the duration of the assignment(s).
								The firm has a number of Associates with vast experience in Information Technology, Business Planning & Control, Accounting & Auditing, Taxation and Management. There is also a back-up team of staff employed by the firm with sound background in Accounting, Financial Management and Auditing.
						    </CardText>
						    <CardActions>
						      <FlatButton label="Contact Us" />
						    </CardActions>
  				      </Card>
  				      <br />
  				      <Divider inset={true} /> <br />

  				      <h3>Work Experience & Related Assignments</h3>
				 	  <Card>

						    <CardTitle title=" KERICHO WATER SANITATION CO LIMITED" />
						    <CardText>
		 						This company is one of the water service providers in the country engaged in provision of clean water. It is the product of Water ACT 2002.Our firm was engaged in provision of tax consultancy services focusing more on VAT refunds and engagement with KRA officials on regular basis  on tax compliance basis. We have since exited in keeping with good corporate governance practices
						    </CardText>
  				      </Card>
  				      		<br />
				 	  <Card>

						    <CardTitle title=" Metkei Multipurpose Co limited" />
						    <CardText>  
Metkei Multi-Purpose Co Limited is engaged in milk bulking in Keiyo South, Elgeyo Markwet County with daily milk intake of over 15000 litres
This is an audit client that has been under our firm belt for close to four years. We exited from audit service in keeping with good corporate governance practices
Revenue Authority slapped firm with tax bill of ksh7million culminating in our appointment as tax consultant to unravel this tax burden.
We successfully defended client, completed investigation putting demand notice to rest calming client anxiety thus taming tide of aggression from tax Authority
Other of Similar assignment are:
Leketeton Farm Dairies, Makongi Dairies, Taragoon Dairies, LELBREN Dairies, Lessos FCS, Cheborgei Dairies, Kokiche and Olenguruone Dairy Farmers ltd.
						    </CardText>
  				      </Card>

  				      <br />
				 	  <Card>

						    <CardTitle title=" Talent Achievers Limited" />
						    <CardText>
								Our client engages in real estate consultancy and has been in business since 2008.The client was slapped with ksh14 tax bill and retained our firm to carry out investigation to unravel this demand. The client was successfully defended and the matter put to rest by Revenue authority
								We have been providing business solutions in tax  consultancy, statutory audits for close to 4 years. 						    </CardText>
  				      </Card>
  				      <br />

  				      <h4>All statutory audits have TAX AUDIT component</h4>
  				      <br />

  				      <Card> 

  				      		<CardTitle title="IFC/ICPAK Africa Schools Projects-Kenya, Program" />

  				      		<CardText> 
The sponsor mandated consultants to provide business support services in financial management, audit, accounting tax covering about 10 schools under watch of Kenya Private Schools Associations in North RIFT and Western Kenya covering a period of three years. This was a life lifting service to the concerned institution in the management of scarce resources.
  				      		</CardText>
  				      </Card>

  				      <br/>

  				      <Card> 
		  				      <CardTitle title="Ministry of Health, Department of Nutrition (GAIN Food fortification Project)  " />
		  				      <CardText> 
		Donor funded US $2.32Million for the food fortification project. Implementation of the project involved a number of players namely Ministry of Health, Nutrition Division; GAIN, Kenya National Farmers Federation Association (KNFFA) and Kenya Food Fortification Alliance. Nelson & Francis Associates were appointed project Auditors to perform Risk based audit for the project. The assignment was undertaken for a period of three years with extension for one year thus the project lasted a period of 4 years.  				      	
		  				      </CardText>
  				      </Card>

  				      <br />

  				      <Card> 
  				      	<CardTitle title="Techno serve SPADE Project (Nyanza & Western), Poverty eradication " />

  				      	<CardText> 
  				      		This is a poverty eradication program covered Ten (10) hubs in Nyanza and Western Kenya called SPADE program. SPADE represents Small Holder Poultry Development. Our firm undertook the assignment under the project sponsor: Techno serve. The project entailed offering business support services namely: financial management, audit, tax systems with strict reporting deadline, among other support services. The project was successfully completed within timeline set by client and has exited.
  				      	</CardText>
  				      </Card>

  				      <br />

  				      <Card> 
  				      	<CardTitle title=" Techno serve Risk based audit Project " />

  				      	<CardText> 
This assignment entailed provision of business support in training financial management Audit, particularly risk based audit, Systems Audit and Tax compliance to community based projects, particularly Dairies subsector in North and South Rift region. The assignment was on a year basis renewable.  				      	</CardText>
  				      </Card>  

  				      <br />

  				      <Card> 
  				      	<CardTitle title="ACTED Kenya " />

  				      	<CardText> 
This is an NGO Active in East Pokot and Baringo. We carried out systems tax & audit for  years 2008 and 2010. 
						</CardText>
  				      </Card>  

  				      <br />

  				      <Card> 
  				      	<CardTitle title="Kerio Centre for Community Development and Human Rights (KCCDHR) " />

  				      	<CardText> 
This assignment among other engagements in various industries was involved in providing business support services for two years in risk based audit. Contract is renewable yearly and the project is still in progress.						</CardText>
  				      </Card>  

  				      <br />

  				      <Card> 
  				      	<CardTitle title="Sikom Peace Network, West Pokot" />

  				      	<CardText> 
We have concluded risk based audit covering two years from 2013 and 2014. This NGO is based in West Pokot and the project is now completed.
  				      	</CardText>
  				      </Card> 


				 </div>		 	
			 </section>
	  </MuiThemeProvider>			
			</div>

		)
	}
}