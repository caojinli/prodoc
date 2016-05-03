/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const COMPUTE_TOTAL = 'COMPUTE_TOTAL'
export const CHANGE_SUBTITLE = 'CHANGE_SUBTITLE'
// ------------------------------------
// Actions
// ------------------------------------
// NOTE: "Action" is a Flow interface defined in https://github.com/TechnologyAdvice/flow-interfaces
// If you're unfamiliar with Flow, you are completely welcome to avoid annotating your code, but
// if you'd like to learn more you can check out: flowtype.org.
// DOUBLE NOTE: there is currently a bug with babel-eslint where a `space-infix-ops` error is
// incorrectly thrown when using arrow functions, hence the oddity.

export function gettotal (value: number = 1): Action {
	console.log('value: ' + value)
  return {
    type: COMPUTE_TOTAL,
    payload: value
  }
}
export function increment (value: number = 1): Action {
  return {
    type: COUNTER_INCREMENT,
    payload: value
  }
}
export const testYourDaye = (): Function => {
	return (dispatch: Function, getState: Function): Promise => {
    return new Promise((resolve: Function): void => {
      setTimeout(() => {
        dispatch(gettotal(getState().counter))
        resolve()
      }, 200)
    })
  }
}
// This is a thunk, meaning it is a function that immediately
// returns a function for lazy evaluation. It is incredibly useful for
// creating async actions, especially when combined with redux-thunk!
// NOTE: This is solely for demonstration purposes. In a real application,
// you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
// reducer take care of this logic.
export const doubleAsync = (): Function => {
  return (dispatch: Function, getState: Function): Promise => {
    return new Promise((resolve: Function): void => {
      setTimeout(() => {
        dispatch(increment(getState().counter))
        resolve()
      }, 200)
    })
  }
}
export const actions = {
  increment,
  doubleAsync,
  gettotal
}
// ------------------------------------
// Action Handlers It must be a process newState = xxApp(previousState, action)
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]: (state: number, action: {payload: number}): number => state + action.payload,
  [COMPUTE_TOTAL]: (state: number, action: {payload: number}): number => {console.log(action.payload); return Object.assign({}, state, {number: state.number + action.payload * 2, subTitle: state.subTitle + state.number})}
}
// const toatal=0;
// ------------------------------------
// Reducer
// ------------------------------------
// const initialState =1;
const initData = {
		number: 1,
		subTitle: 'Index'
	}
export default function counterReducer (state = initData, action: Action): number {
  const handler = ACTION_HANDLERS[action.type]	
  return handler ? handler(state, action) : state
}
