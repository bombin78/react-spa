import React from 'react';
//Импортируем отдельный Route и компонент для обработки ощибок
import { Route, IndexRoute } from 'react-router';
import App from './app';
import { HomePage, HomeRoutes } from './pages/home/index';
import { ContactRoutes } from './pages/contact/index';
import ErrorPage from './pages/error/index';


//По умолчанию экспортируем JSX объект Route у которого будет
//компонент App и путь path
export default  (
	<Route component={ App } path={ App.path } >
		{/*
			Конструкция для грамматной загрузки домашней
			старницы по умолчанию
		*/}
		<IndexRoute component={ HomePage } />

		{/*
		 	Конструкция для того, чтобы каждый роутер лежал отдельно
		 	и чтобы их легко было достать
		*/}
		{ HomeRoutes }
		{ ContactRoutes }
		{/*
			На этот Route будут пеереходить все страницы, которые не имееют
		 	собственных Routes
		*/}
		<Route path='*' component={ ErrorPage } />
	</Route>
);
