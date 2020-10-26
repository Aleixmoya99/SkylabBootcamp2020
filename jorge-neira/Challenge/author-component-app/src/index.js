import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
 import HeaderAuthor from './headerAuthorComponent/HeaderAuthorComponent';
import DetailAuthor from './detailAuthorComponent/DetailAuthorComponent';
import ListAuthor from './listAuthorComponent/ListAuthorComponent';

ReactDOM.render(
	<React.StrictMode>
		<HeaderAuthor />
		<DetailAuthor />
		<ListAuthor />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
