/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { increment, doubleAsync } from '../../redux/modules/counter'
import DuckImage from './Duck.jpg'

import Dashboard from '../../components/Dashboard.js'

// We can use Flow (http://flowtype.org/) to type our component's props
// and state. For convenience we've included both regular propTypes and
// Flow types, but if you want to try just using Flow you'll want to
// disable the eslint rule `react/prop-types`.
// NOTE: You can run `npm run flow:check` to check for any errors in your
// code, or `npm i -g flow-bin` to have access to the binary globally.
// Sorry Windows users :(.
type Props = {
  counter: number,
  doubleAsync: Function,
  increment: Function
};

// We avoid using the `@connect` decorator on the class definition so
// that we can export the undecorated component for testing.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
export class YahooView extends React.Component<void, Props, void> {


  render () {
    return (
      <div className='container text-center'>
		<Dashboard links={this.props.first.links} onTodoClick={e => { alert('ee'+ this.props.first.links) } }/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
  first: state.first
})


export default connect((mapStateToProps), {
  increment: () => increment(1),
  doubleAsync
})(YahooView)
