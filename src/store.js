/**
 * Created by acer on 16.04.2017.
 */

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';


//Вспомогательная функция, добавляющая инструменты для store
function _applyMiddleware() {
	const middleware = [

	];

	return applyMiddleware(...middleware);
}


export default function configureStore(initialState) {
	const store = compose(
		_applyMiddleware()
	)(createStore)(rootReducer,initialState);

	return store;
}