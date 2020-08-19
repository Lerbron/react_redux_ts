import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import {connect} from 'react-redux';

// import PageLoading from './pageLoading'

class CoreLayout extends Component{

  componentDidMount() {

  }
  componentWillMount() {
  }

  render() {
    return (
      <Route path="/" render={props => {
        return (                  
          <Fragment>{this.props.children}</Fragment>        
        )
      }} />
    )
  }

  
  
}

function mapStateToProps() {
  return {
    
  }
}

function mapDispatchToProps() {
	return {
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout)
