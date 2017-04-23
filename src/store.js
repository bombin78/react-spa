//Импортируем несколько методов из redux
//createStore - позволяет создать store
//applyMiddleware - позволяет подключить дополнительные
//инструменты для работы с store, например devtool, методы
//для логирования и т.д.
//compose - позволит из rootReducer-ов создать store
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { DevTools } from './utils/index';


//Вспомогательная функция, добавляющая инструменты для store
function _applyMiddleware() {
	//массив, в который будем помещать необходимые интрументы
	const middleware = [

	];

	return applyMiddleware(...middleware);
}

//Экспортируем функцию configureStore с параметром initialState,
//отвечающим за начальное состояние приложения. Допустим
//пользователь зашел на сайт, сделал какие-то действия изменив
//тем самым состояние приложения. Это состояние записалось в БД.
//В следующий раз, когда пользователь зайдет на сайт, он получит
//начальное состояние записанное в БД.
export default function configureStore(initialState) {
	//В объект store положим результат выполнеия функции compose
	const store = compose(
		_applyMiddleware(),
		DevTools.instrument()
	)(createStore)(rootReducer,initialState);

	return store;
}