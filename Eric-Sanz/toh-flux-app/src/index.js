import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './TohStyles.css';
// import Header from './components/Header/Header';
// import Dashboard from './components/Dashboard/Dashboard';
import List from './components/List/List';
// import Detail from './components/Detail/Detail';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <Header />
    <Dashboard /> */}
    <List />
    {/* <Detail /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();