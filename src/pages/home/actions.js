//Экспортируем action ADD_TODO
export const ADD_TODO = 'ADD_TODO';

//Функция для создания action (action creator)
export function addTodo(id, name) {
	let error = '';
	if (!name) {
		error = 'Необходимо ввести название'
	}
	return {
		type: ADD_TODO,
		id, name, error
	}
}
