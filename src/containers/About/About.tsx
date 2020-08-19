import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAbout } from 'actions/testActions'
import { Button } from 'antd';

interface IProps {
  a: number,
  setNum: () => void,
  history: any
}

interface IState {}
interface IAboutState {
  about: {
    a: number
  }
}
// type IDispatch= (args: any) => void
interface IDispatch {
  (args: any): void;
}

class About extends Component<IProps, IState> {
  render() {
    return(
      <div>
        <div className='content'>{this.props.a}</div>
        <Button onClick={this.props.setNum}>button</Button>
        <Button onClick={() => this.props.history.goBack()}>back</Button>
      </div>
    )
  }
}



const mapStateToProps = (state: IAboutState) => {
  return {
    a: state.about.a
  }
}

const mapDispatchToProps = (dispatch: IDispatch) => {
  return {
    setNum: () => {
      dispatch(setAbout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)