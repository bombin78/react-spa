/**
 * Created by acer on 16.04.2017.
 */

//Импортируем(подключаем) React
import React from 'react';

//Экспортируем по умолчанию компонент App,
//который будет наследоватся от компонета React
export default class App extends React.Component {

	//Статическое поле в котором хранится routе нашего
	//компонента или страницы. У компонета App routе
	//будет инедксный
	static path = '/';

	//Метод render который будет возвращать <h1>Hello world!</h1>
	render() {
		return (
			<h1>Hello world!</h1>
		);
	};

}
