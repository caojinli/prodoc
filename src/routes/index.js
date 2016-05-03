import React from 'react'
import { Route, IndexRoute } from 'react-router'

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import HomeView from 'views/HomeView/HomeView'
import teacherView from 'views/HomeView/teachers'
import docs from 'views/HomeView/docView'

// const mySelf = () => (<div style={{height:400}}><h2>Teachers List</h2></div>)
const general = () => (<div style= {{height: 400}}><h2>General!!</h2></div>)
const admin = () => (<div style= {{height: 400}}><h2>Admin!!</h2></div>)
export default (store) => (
  <Route path='/' component={CoreLayout}>
	<IndexRoute component={docs} />
	<Route path='/docs' component = {docs}/>
	<Route path='/teachers' component = {teacherView}/>
	<Route path='/career' component = {HomeView}/>
	<Route path='/general' component = {general}/>
	<Route path='/admin' component = {admin}/>
  </Route>
)
