import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import DropDownMenu from 'material-ui/DropDownMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import SocialPersonOutline from 'material-ui/svg-icons/social/people-outline';
import SocialNotificationsActive from 'material-ui/svg-icons/social/notifications-active';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import ActionWork from 'material-ui/svg-icons/action/work';
import ActionAssessment from 'material-ui/svg-icons/action/assessment';
import CommunicationBusiness from 'material-ui/svg-icons/communication/business';
import Avatar from 'material-ui/Avatar';
import HardwareSecurity from 'material-ui/svg-icons/hardware/security';
import EditorAttachMoney from 'material-ui/svg-icons/editor/attach-money';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
const lightMuiTheme = getMuiTheme(lightBaseTheme);
import FlatButton from 'material-ui/FlatButton';
const darkMuiTheme = getMuiTheme(darkBaseTheme);

var MediaQuery = require('react-responsive');



//making the toolbar fixed
const mainlayouttoolbarstyle = {
	position:'fixed',
	width: '100%',
	zIndex: 100,
	backgroundColor:'#03A9F4'
}

//const for the toolbar title
const thetoolbartitlestyle = {
	position: 'fixed',
	margin:'auto',
	top:-3,
	right:'50%'
}

// for the services



// for the width of the dropdown
const dropdownwidthlayout = {
	width: 200,
	position:'fixed',
	right: 10,
	top: 5
}


class MainLayout extends React.Component {
	constructor(props) {
		super(props);
		this.handleToggle = this.handleToggle.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {open: false};
		this.state = {value: 1};
	}

	handleToggle() {
		this.setState({open: !this.state.open});
	}

	handleClose() {
      this.setState({open: false});
    }

     handleChange(event, index, value){
     	this.setState({value});
     }

   render() {
      return (
         <div style={{margin:0}}>
     {/*the app bar*/}
            <MuiThemeProvider muiTheme={lightMuiTheme}>
              <div>
              	      <Toolbar style={mainlayouttoolbarstyle}>
					        <ToolbarGroup firstChild={true}>
					    {/*for the navigation toggle*/}
					          <MediaQuery query='(max-width: 768px)'>
					            <IconButton onTouchTap={this.handleToggle}><NavigationMenu /></IconButton>
					          </MediaQuery>
					    {/*fore the home button*/}
					          <MediaQuery query='(min-width: 769px)'>
					            <FlatButton label="Home" style={{marginLeft:5, top: 10, position:'fixed'}}/>
					            <FlatButton label="About Us" style={{left:120, top: 10, position:'fixed'}}/>
					          </MediaQuery>				    

					        </ToolbarGroup>

					        <ToolbarGroup>

						         <MediaQuery query='(min-width: 769px)'>
						        	 <ToolbarTitle text="Nelson & Francis" style={thetoolbartitlestyle}/>
						         </MediaQuery> 

					        </ToolbarGroup>


					        <ToolbarGroup>

					            <MediaQuery query='(min-width: 769px)'>
								        <DropDownMenu
								          value={this.state.value}
								          onChange={this.handleChange}
								          style={dropdownwidthlayout}
								          autoWidth={false}
								        >
								          <MenuItem value={1} primaryText="Services" />
								          <MenuItem value={2} primaryText="Advisory" />
								          <MenuItem value={3} primaryText="Assuarance" />
								          <MenuItem value={4} primaryText="Forensic" />
								          <MenuItem value={5} primaryText="Taxes" />
								        </DropDownMenu>

								</MediaQuery>
								        
					        </ToolbarGroup>
					      </Toolbar>
			      
              </div>



            </MuiThemeProvider>
 {/*the drawer*/}
             <MuiThemeProvider muiTheme={darkMuiTheme}>       
             
                <Drawer
                  docked={false}
                  width={310}
                  open={this.state.open}
                  swipeAreaWidth={30}
                  onRequestChange={(open) => this.setState({open})}
                >
					<div style={{marginLeft:5}}>
						{/*home link*/}
		                  <MenuItem leftIcon={<CommunicationBusiness />} linkButton={true} href="#" onTouchTap={this.handleClose}> Home</MenuItem>

		              {/*the About Us link*/}
						  <Link to="projects" style={{textDecoration:'none', position:'relative'}}>
							          <ListItem
							            key={1}
							            primaryText="About Us"
							            leftIcon={<SocialPersonOutline />}
							            onTouchTap={this.handleClose}
							            linkButton={true}
							        /></Link> 

		                       {/*the services link*/}
		                       <List>    
							      <ListItem
							      key={2}
							        primaryText="Services"
							        leftIcon={<ActionWork />}
							        initiallyOpen={true}
							        primaryTogglesNestedList={true}
							        nestedItems={[

							          <ListItem
							            key={3}
							            primaryText="Advisory"
							            leftIcon={<CommunicationChatBubble/>}
								        initiallyOpen={false}
								        primaryTogglesNestedList={true}
								        nestedItems={[

							          <ListItem
							            key={4}
							            primaryText="Mngt Consulting"
							            onTouchTap={this.handleClose}
							          />,

							          <ListItem
							            key={5}
							            primaryText="Corporate Finance"
							            onTouchTap={this.handleClose}
							          />,

							          <ListItem
							            key={6}
							            primaryText="Financial Planning"
							            onTouchTap={this.handleClose}
							          />,

							          <ListItem
							            key={7}
							            primaryText="IT Consulting"
							            onTouchTap={this.handleClose}
							          />,

							          <ListItem
							            key={3}
							            primaryText="Network Penetration Testing"
							            onTouchTap={this.handleClose}
							          />,
									<ListItem
							            key={8}
							            primaryText="Reconstructing"
							            onTouchTap={this.handleClose}
							          />,

							          <ListItem
							            key={9}
							            primaryText="Transaction Support"
							            onTouchTap={this.handleClose}
							          />,

							          <ListItem
							            key={10}
							            primaryText="Hotel Consulting"
							            onTouchTap={this.handleClose}
							          />							          						          	          						          						          							          


								        ]}
							          />,

							          <ListItem
							            key={11}
							            primaryText="Assuarance"
							            leftIcon={<ActionAssessment />}
							            onTouchTap={this.handleClose}
							          />,		

							          <ListItem
							            key={12}
							            primaryText="Forensic"
							            leftIcon={<HardwareSecurity />}
							            onTouchTap={this.handleClose}
							          />,

							          <ListItem
							            key={13}
							            primaryText="Taxes"
							            leftIcon={<EditorAttachMoney />}
							            onTouchTap={this.handleClose}
							          />

				      					]}
				      				/>			                    	
		                </List>

					</div>
                </Drawer>
            </MuiThemeProvider>

{/*for the children components height b4 they get seen*/}

         {this.props.children}
         </div>
      );
   }
}

export default MainLayout;