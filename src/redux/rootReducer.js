import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import counter from './modules/counter'
// import docManage from './doc'

export default combineReducers({
  counter,
  // docManage,
  router
})
