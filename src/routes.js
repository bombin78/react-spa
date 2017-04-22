/**
 * Created by acer on 16.04.2017.
 */

import React from 'react';
//Импортируем отдельный Route
import { Route } from 'react-router';
import App from './app';


//По умолчанию экспортируем JSX объект Route у которого будет
//компонент App и путь path
export default  (
	<Route component={ App } path={ App.path } >

	</Route>
);
