//멍청한 컴포넌트 -> 계산을 해주는 컴포넌트
import React, { Component, PropTypes } from 'react';
//더하기 , 뺴기 , 랜덤하게 색 바꾸기.
const propTypes = {
    onPlus: PropTypes.func,
    onSubtract: PropTypes.func,
    onRandomizeColor: PropTypes.func,

};

//createWarning 함수를 만들어 warning console 을 할수 있도록 만들어 준다.
function createWarning (funcName){
  return ()=> console.warn(funcName + " is a not defined.");
}
const defaultProps = {
    onPlus: createWarning("onPlus"),
    onSubtract: createWarning("onSubtract"),
    onRandomizeColor: createWarning("onRandomizeColor")
};





export default class Control extends Component {
    //여기에 onClick을 붙여야 한다.
    render() {
        return(
            <div>

              <button onClick={this.props.onPlus}>+</button>
              <button onClick={this.props.onSubtract}>-</button>
              <button onClick={this.props.onRandomizeColor} >Randomize Color</button>
            </div>
        );
    }
}
Control.propTypes = propTypes;
Control.defaultProps = defaultProps;
