import React from 'react';
import ReactDom from 'react-dom';
//Импортируем роутер, который будем передовать как JSX компонент
//и функцию browserHistory
import { Router, browserHistory } from 'react-router';
//Импортируем из библиотеки react-redux (связывает react-приложение
//с redux-ом) элемент Provider, который позволяет связывать store
//со всеми элементами, чтобы каждый раз не писать лишний код.
import { Provider } from 'react-redux';
//Импортируем метод syncHistoryWithStore, который будет создавать
//историю
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store';
import routes from './routes';


//Создаем объект store
export const  store = configureStore();
//Создаем объект, который судя по названию синхронизирует store с
//историей и позволяет нам потом находить все по навигации
const  history = syncHistoryWithStore(browserHistory, store);


ReactDom.render((
	//Связка redux технологии с роутерами. Provider передается
	//в формате JSX и требует параметр store
	<Provider store={ store }>
		<Router history={ history }>
			{ routes }
		</Router>
	</Provider>
	),
	document.querySelector('#app')
);
