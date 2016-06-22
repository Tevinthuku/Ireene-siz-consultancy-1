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
import SocialNotificationsActive from 'material-ui/svg-icons/social/notifications-active';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import ActionBugReport from 'material-ui/svg-icons/action/bug-report';
import ActionWork from 'material-ui/svg-icons/action/work';
import ActionSearch from 'material-ui/svg-icons/action/search'
import CommunicationBusiness from 'material-ui/svg-icons/communication/business';
import Avatar from 'material-ui/Avatar';
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
	backgroundColor: '#263238'
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
				    iconElementRight={<IconButton style={{position:'fixed', top:10, right:5}}><ActionSearch /></IconButton>}
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

		              {/*the projects link*/}
						  <Link to="projects" style={{textDecoration:'none', position:'relative'}}>
							          <ListItem
							            key={2}
							            primaryText="Projects"
							            leftIcon={<ActionWork />}
							            onTouchTap={this.handleClose}
							            linkButton={true}
							        /></Link> 

		                 {/*the activity link*/}
		                    <List>
							      <ListItem
							      key={1}
							        primaryText="Activities"
							        leftIcon={<SocialNotificationsActive />}
							        initiallyOpen={true}
							        primaryTogglesNestedList={true}
							        nestedItems={[
,

							          <ListItem
							            key={3}
							            primaryText="Debug Code"
							            leftIcon={<ActionBugReport />}
							            onTouchTap={this.handleClose}
							          />		 
				      					]}
				      				/>			                    	
		                    </List>

		                  <MenuItem leftIcon={<CommunicationChatBubble/>} linkButton={true} href="#" onTouchTap={this.handleClose}>Forum</MenuItem>


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