import  * as types from '../actions/ActionTypes';

// 처음에 사용할 초기 상태를 작성한다.

const initialState = {
  number: 0//초기 값을 선언한다.
}

//es6의 init 문법 사용
export default function counter (state = initialState,action){
  // if(typeof state === 'undefined'){
  //   return initialState;
  // }
  switch(action.type){
    case types.INCREMENT: return {...state, number: state.number + 1};
    case types.DECREMENT: return {...state, number: state.number - 1};
    default: return state;
  }

  return state;
}
