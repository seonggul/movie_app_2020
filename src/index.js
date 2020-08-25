import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  //<React.StrictMode> 자손들에 대한 부가적인 검사와 경고를 활성화
    <App />,
  //</React.StrictMode>,
  document.getElementById('potato')
);


//render 할수있는건 1개뿐 지금은 <APP />이 사용중이라 potato는 app안에 넣어두면 됨.