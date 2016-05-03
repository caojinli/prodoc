import {combineReducers} from 'redux'
/*

import {
		SELECT_DOC,
		INVALIDATE_DOC,
		REQUEST_POSTS,
		RECEIVE_POSTS} from './actions/manageDoc'

function selectDoc (state = 'reactjs', action) {
	switch (action.type) {
    case SELECT_DOC:
      return action.doc
    default:
      return state
  }
}

function posts (state = {
	isFetching: false,
	didInvalidate: false,
	items: []
	}, action) {
	switch (action.type) {
		case INVALIDATE_DOC:
			return Object.assign({}, state, {didInvalidate: true})// 合并第二个参数和第三个参数，生成一个新的state返回
		case REQUEST_POSTS:
			return Object.assign({}, state, {
					isFetching: true,
					didInvalidate: false
				  })
		case RECEIVE_POSTS:
			return Object.assign({}, state, {
					isFetching: false,
					didInvalidate: false,
					items: action.posts,
					lastUpdated: action.receivedAt
				  })
		default:
			state
	}
}

function postsByDoc (state = {}, action) {
	switch (action.type) {
		case INVALIDATE_DOC:
		case RECEIVE_POSTS:
		case REQUEST_POSTS:
		  return Object.assign({}, state, {
			[action.doc]: posts(state[action.doc], action)
		  })
		default:
		  return state
	}
}
const docManage = combineReducers({
					selectDoc,
					postsByDoc
					})
*/


					
function docManage (state = [], action) {
	switch (action.type) {
		case 'ADD_DOC':
			return [...state, {docName: action.text, teacher: action.teacher}]
		case 'DEL_DOC':
			return [...state.slice(0, action.id), ...state.slice(action.id + 1)]
		case 'UPDATE_DOC':
			return [
				...state.slice(0, action.id),
				Object.assign({}, state[action.id], {
														text: action.newText,
														teacher: action.newTeacher
				}),
				...state.slice(action.id + 1)
			  ]
		default:
			return state
	}
}
/*

function docManage (state = [], action) {
	switch (action.type) {
		case 'ADD_DOC':
			return [...state, {docName: action.text, teacher: action.teacher}]
		case 'DEL_DOC':
			return [...state.slice(0, action.id), ...state.slice(action.id + 1)]
		case 'UPDATE_DOC':
			return [
				...state.slice(0, action.id),
				Object.assign({}, state[action.id], {
														text: action.newText,
														teacher: action.newTeacher
				}),
				...state.slice(action.id + 1)
			  ]
		default:
			return state
	}
}
*/
export default docManage
