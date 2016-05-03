/* @flow */
/* This could be regarded as container of DashBorad component */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { increment, doubleAsync, gettotal, testYourDaye} from '../../redux/modules/counter'
import DuckImage from './Duck.jpg'
import classes from './HomeView.scss'
import Dashboard from '../../components/Dashboard.js'

// We can use Flow (http://flowtype.org/) to type our component's props
// and state. For convenience we've included both regular propTypes and
// Flow types, but if you want to try just using Flow you'll want to
// disable the eslint rule `react/prop-types`.
// NOTE: You can run `npm run flow:check` to check for any errors in your
// code, or `npm i -g flow-bin` to have access to the binary globally.
// Sorry Windows users :(.

/* const Link = ({txt, onClick}) => (<div><p><a href='#' onClick = {e => {
         e.preventDefault()
         onClick()
       }}>aa {txt} </a></p></div>)
	   */

// We avoid using the `@connect` decorator on the class definition so
// that we can export the undecorated component for testing.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
export class HomeView extends React.Component<void, Props, void> {
  render () {
    return (
      <div className='container text-center'>
        <div className='row'>
          <div className='col-xs-2 col-xs-offset-5'>
            /*			
			<img className={classes.duck}
              src={DuckImage}
              alt='This is a duck, because Redux.' />
			*/
          </div>
        </div>
        <h1>Welcome to the React Redux Starter Kit!!!</h1>
		<h2>{this.props.counter.subTitle} </h2>
        <h2>
          Sample Counter:
          {' '}
          <span className={classes['counter--green']}>{this.props.counter.number}</span>  
        </h2>
        <button className='btn btn-default' onClick={this.props.increment}>
          Increment
        </button>
		<button className='btn btn-default' onClick={this.props.increment2}>
          Increment + 2
        </button>
        <button className='btn btn-default' onClick={this.props.testYourDaye}>
          Double (Async)
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter// 第一个counter是HomeView组件(after connect())需要用到的props， 第二个counter是在combinReducer的时候取的名字，那里定义什么这里就要写成什么， 那里定义abc， 这里也要state.abc!
})

export default connect((mapStateToProps), {
  increment: () => increment(1),
  increment2: () => gettotal(2),
  doubleAsync,
  testYourDaye
})(HomeView)

HomeView.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  increment2: PropTypes.func.isRequired,
  testYourDaye: PropTypes.func.isRequired
}
