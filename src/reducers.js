// Импортируем метод combineReducers из redux, который
// позволяет объеденять несеколько reducer-ов в один
import { combineReducers } from 'redux';
// Импортируем стандартный reducer, отвечающий за роутинг
import { routerReducer } from 'react-router-redux';

import { HomeReducer } from './pages/home/index';
import { ListReducer } from './pages/list/index';
import { ContactReducer } from './pages/contact/index';

import { ModalReducer } from './components/modal/index';


// Экспортируем метод combineReducers в который передаем
// объект с перечнем полей содеражщимх названия корневых
// reducer-ов
export default combineReducers({
	routing: routerReducer,
	...HomeReducer,
	...ListReducer,
	...ContactReducer,
	...ModalReducer
});
