var expect = require('expect');
var actions = require('actions');

describe('actions', () => {
	it('should generate search text action', () => {
		var action = {
			type: "SET_SEARCH_TEXT",
			searchText: "Some search text"
		};
		var res = actions.setSearchText(action.searchText);

		expect(res).toEqual(action);
	});

	it('should generate add todo action', () => {
		var action = {
			type: "ADD_TODO",
			text: "Some todo text"
		};
		var res = actions.addToDo(action.text);

		expect(res).toEqual(action);
	});

	it('should generate toggle show completed action', () => {
		var action = {
			type: "TOGGLE_SHOW_COMPLETED",
		};
		var res = actions.toggleShowCompleted();

		expect(res).toEqual(action);
	});

	it('should generate toggle todo action', () => {
		var action = {
			type: "TOGGLE_TODO", id: 3
		};
		var res = actions.toggleTodo(action.id);

		expect(res).toEqual(action);
	});

	it('should generated add todos action object', () => {
		var todos = [{id: 1, text:'Wake up', completed: false, completedAt: undefined, createdAt:33000}];
		var action = {type: 'ADD_TODOS', todos};
		var res = actions.addTodos(todos);

		expect(res).toEqual(action);
	})
});