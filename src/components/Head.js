import React from 'react'
import { connect } from 'react-redux'
import AppBar from 'material-ui/lib/app-bar'
import IconMenu from 'material-ui/lib/menus/icon-menu'
import MenuItem from 'material-ui/lib/menus/menu-item'
import IconButton from 'material-ui/lib/icon-button'
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert'
import Menu from 'material-ui/lib/menus/menu'
// import { routerMiddleware, push } from 'react-router-redux'
import {changeSubTitle} from '../redux/modules/counter'
const UserInfo = () => (<div><p>Welcome, <a href='#'>Cao Jinli</a> [jinli]</p></div>);
type Props = {
    subTitle: subTitle
};

export default class Head extends React.Component {
	static contextTypes = {router: React.PropTypes.object.isRequired};
	// const { dispatch } = this.props;
  forward = (e, value) => {
	  console.log('go forward:' + e.target + ' context : ' + this.context);
	// this.props.history.pushState(null, '/health');
	// browserHistory.replace('/health');
	
	// this.context.router.push('/health');success
	// How to forward to health URL??
	// dispatch.push('/health'); failed
	
	this.context.router.push(value);
	};
	render () {
		return (
			<AppBar
			title='培训文档管理系统后台'
			iconElementRight={<UserInfo/>}
			iconElementLeft={
				 <IconMenu
				iconButtonElement={
				  <IconButton><MoreVertIcon /></IconButton>
				}
				targetOrigin={{horizontal: 'right', vertical: 'top'}}
				anchorOrigin={{horizontal: 'right', vertical: 'top'}}
			  >
				<MenuItem primaryText='培训文档管理' onTouchTap = {(e) => {this.forward(e, '/docs')}}/>
				<MenuItem primaryText='讲师管理' onTouchTap = {(e) => {this.forward(e, '/teachers')}}/>
				<MenuItem primaryText='其他' onTouchTap = {(e) => {this.forward(e, '/career')}}/>
				
				<MenuItem primaryText='General' onTouchTap = {(e) => {this.forward(e, '/general')}}/>
				<MenuItem primaryText='Admin' onTouchTap = {(e) => {this.forward(e, '/admin')}}/>
			  </IconMenu>
			}
		/>);
 }
  
}
const mapStateToProps = (state) => ({
  subTitle: state.counter.subTitle
})

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: (subTitle) => {
		dispatch(changeSubTitle(subTitle))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Head)
