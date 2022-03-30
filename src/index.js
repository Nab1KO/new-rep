import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  {id:1, post: 'hi', like: 10},
  {id:2, post: 'how are you', like: 20}
]
let dialogsData = [
  { id: 'luka', name: 'luka' },
  { id: 'zaza', name: 'zaza' },
  { id: 'dato', name: 'dato' },
  { id: 'dima', name: 'dima' },
  { id: 'achiko', name: 'achiko' }
]
let massages = [
  { id: '1', massage: 'how are you' },
  { id: '2', massage: 'im good' },
  { id: '3', massage: 'and you' },
  { id: '4', massage: 'im fine' }
]

ReactDOM.render(
  <React.StrictMode>
    <App  postsData={postsData} massages={massages} dialogsData={dialogsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
