//Импортируем метод combineReducers из redux, который
//позволяет объеденять много reducer-ов в один
import { combineReducers } from 'redux';
//Импортируем стандартный reducer, отвечающий за роутинг
import { routerReducer } from 'react-router-redux';
//Импортириуем HomeReducer
import { HomeReducer } from './pages/home/index';


//Экспортируем метод combineReducers в который передаем
//объект с перечнем полей содеражщимх названия корневых
//reducer-ов
export default combineReducers({
	routing: routerReducer,
	...HomeReducer
});
