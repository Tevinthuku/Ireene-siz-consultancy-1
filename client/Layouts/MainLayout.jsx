import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
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

const lightMuiTheme = getMuiTheme(lightBaseTheme);

const darkMuiTheme = getMuiTheme(darkBaseTheme);
//styling for the appbar

const appbar = {
	height:70,
	position:'fixed',
	backgroundColor: '#03A9F4'
}



class MainLayout extends React.Component {
	constructor(props) {
		super(props);
		this.handleToggle = this.handleToggle.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.state = {open: false};
	}

	handleToggle() {
		this.setState({open: !this.state.open});
	}

	handleClose() {
      this.setState({open: false});
    }

   render() {
      return (
         <div style={{margin:0}}>
     {/*the app bar*/}
            <MuiThemeProvider muiTheme={lightMuiTheme}>
				  <AppBar
				    style = {appbar}
				    className="mainlayouttopbar"
				    iconElementLeft={<IconButton onTouchTap={this.handleToggle}><NavigationMenu /></IconButton>}
				  />
            </MuiThemeProvider>
 {/*the drawer*/}
             <MuiThemeProvider muiTheme={darkMuiTheme}>       
             
                <Drawer
                  docked={false}
                  width={310}
                  open={this.state.open}
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