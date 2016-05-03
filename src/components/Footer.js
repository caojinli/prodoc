import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import Toolbar from 'material-ui/lib/toolbar/toolbar'
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group'
import RaisedButton from 'material-ui/lib/raised-button'
const Footer = () => (	
	<Toolbar>	
		<ToolbarGroup float='left'>
			<RaisedButton label='TC Internal' primary={true} />
			<RaisedButton label='Contact us' primary={true} />
			<RaisedButton label='copyright © 2016' primary={true} />
			<RaisedButton label='Release 4.5.2' primary={true} />
		</ToolbarGroup>
	</Toolbar>
)

export default Footer
