import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setNum } from 'actions/testActions'
import { Button } from 'antd';

interface IProps {
  num: number,
  setNum: () => void,
  history: any
}

interface IState {}
interface IDispatch {
  (args: any): void;
}

class Home extends Component<IProps, IState> {
  render() {
    return(
      <div>
        <div className='content'>{this.props.num}</div>
        <Button onClick={this.props.setNum}>button</Button>
        <Button onClick={() => this.props.history.push('/about')}>go about</Button>
      </div>
    )
  }
}

const mapStateToProps = (state: { test: { num: number; }; }, ownProps: any) => {
  return {
    num: state.test.num
  }
}

const mapDispatchToProps = (dispatch: IDispatch, ownProps: any) => {
  return {
    setNum: () => {
      dispatch(setNum())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)