import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//store 을 불러오는 부분
import { createStore} from 'redux';
import reducers from './reducers';
//provider를 가져온다.

import { Provider} from 'react-redux';


//store
const store = createStore(reducers);

//subscribe -> 값이 변화 되었는지 보고 있는 것

//store.subscribe(() => )

//dispatcher -> action을 보내는 역할

console.log(store.getState());

//provider ->
//connect -> 컴포넌트를 리덕스에 연결하는 함수이다. 새로운 컴포넌트 클래스를 반환한다. 기존의 컴포넌트가 변화되지는 않는다.

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById("root")

);
