//Импортируем(подключаем) React
import React, { PropTypes } from 'react';
//Импортируем(подключаем) компоненты
import { Header } from './components/index';
//Импортируем(подключаем) вспомогательные файлы:
//инструменты разработчика и т.д.???
import { DevTools } from './utils/index';

//Экспортируем по умолчанию компонент App,
//который будет наследоватся от компонета React
export default class App extends React.Component {

	//Статическое поле отвечающее за валидацию
	static propTypes = {
		children: PropTypes.any.isRequired
	};
	//Статическое поле в котором хранится routе нашего
	//компонента.
	static path = '/';

	//Метод render который будет возвращать содержимое
	render() {
		return (
			<div>
				<Header />
				{/*
					Вывод содержимого создаваемых страниц. Передача
				 	содержимого осуществляется с помощью файла routes.js
				 */}
				{ this.props.children }
				{ process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
			</div>
		);
	};

}
