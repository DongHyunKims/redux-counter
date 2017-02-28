//똑똑한 컴포넌트
import React, { Component, PropTypes } from 'react';
import Control from './Control';
import Value from './Value';
//import { connect, bindActionCreators} from 'react-redux';
import { connect} from 'react-redux';
import * as actions from '../actions';



//state는 redux state를 칭한다. 각각의 reducers의 내용을 연결한다.

const mapStateToProps = (state) => {
  return {
    number: state.counter.number,
    color: state.ui.color
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrement: ()=>{dispatch(actions.increment())},
    handleDecrement: ()=>{dispatch(actions.decrement())},
    handleSetColor: (color)=>{dispatch(actions.setColor(color))}
  }
  //return bindActionCreators(actions, dispatch);

}

class Counter extends Component {
    constructor(props) {
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);
    }
    setRandomColor(){
      const color = [
        Math.floor((Math.random()*55) + 200),
        Math.floor((Math.random()*55) + 200),
        Math.floor((Math.random()*55) + 200)
      ];
      this.props.handleSetColor(color);
    }

    render() {
      const color = this.props.color;
      const style = {
        background: `rgb(${color[0]},${color[1]},${color[2]})`
      };
        return(
          <div style={style}>
            <Value number={this.props.number}/>
            <Control
              onPlus= {this.props.handleIncrement}
              onSubtract = {this.props.handleDecrement}
              onRandomizeColor = {this.setRandomColor}
              />
          </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
