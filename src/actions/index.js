//{}를 사용하여 모든 상수를 가지고 올 수도 있다.

//종류가 많을경우 모듈화를 사용하여 분류한다.

import * as types from './ActionTypes'

export function increment(){
  return{
      type: types.INCREMENT

  }

}

export function decrement(){
  return{
      type: types.DECREMENT

  }

}


export function setColor(color){
  return{
      type: types.SET_COLOR,
      color

  }

}
