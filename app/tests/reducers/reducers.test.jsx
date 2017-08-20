var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('reducers', () => {
	describe('searchTextReducer', () => {
		it('should set searchText', () => {
			var action = {
				type: 'SET_SEARCH_TEXT',
				searchText: 'dog'
			}

			var res = reducers.searchTextReducer(df(''), df(action));

			expect(res).toEqual(action.searchText);
		});
	});

	describe('showCompletedReducer', () => {
		it('should toggle showCompleted', () => {
			var action = {
				type: 'TOGGLE_SHOW_COMPLETED'
			}

			var res = reducers.showCompletedReducer(df(true), df(action));

			expect(res).toEqual(false);
		});
	});

	describe('todosReducer', () => {
		it('should add new todo', () => {
			var action = {
				type: 'ADD_TODO',
				todo: {id: 'abddc', text:'some to do', completed:false, createdAt:24343}
			}

			var res = reducers.todosReducer(df([]), df(action));

			expect(res.length).toEqual(1);
			expect(res[0]).toEqual(action.todo);
		});

		it('should add new todos', () => {
			var todos = [{id: 1, text:'Wake up', completed: false, completedAt: undefined, createdAt:33000}];
			var action = {
				type: 'ADD_TODOS',
				todos
			}

			var res = reducers.todosReducer(df([]), df(action));

			expect(res.length).toEqual(1);
			expect(res[0]).toEqual(todos[0]);
		});

		it('should update todo', () => {
			var todos = [{
				id: 199,
				text: "Play with Buggy",
				completed: true,
				createdAt: 2324,
				completedAt: 2392848
			}];
			var updates = {
				completed: false,
				completedAt: null
			}

			var action = {
				type: 'UPDATE_TODO',
				id: todos[0].id,
				updates
			};

			var res = reducers.todosReducer(df(todos), df(action));

			expect(res[0].completed).toEqual(updates.completed);
			expect(res[0].completedAt).toEqual(updates.completedAt);
			// make sure the todo value is not lost.
			expect(res[0].text).toEqual(todos[0].text);
		});
	});
});