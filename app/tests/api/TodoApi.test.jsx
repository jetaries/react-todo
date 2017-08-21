var expect = require('expect');

var TodoApi = require('TodoApi');

describe('TodoApi', () => {
	beforeEach(() => {
		localStorage.removeItem('todos');
	});

	it('should exist', () => {
		expect(TodoApi).toExist();
	});

	describe('filterTodos', () => {
		var todos = [
			{id: 1, text: "some text here", completed: true},
			{id: 2, text: "other text here", completed: false},
			{id: 3, text: "Some text here", completed: true}
		];

		it('should return all todos if showCompleted is true', () => {
			var filterTodos = TodoApi.filterTodos(todos, true, "");

			expect(filterTodos.length).toBe(3);
		});

		it('should return only non-completed todos if showCompleted is false', () => {
			var filterTodos = TodoApi.filterTodos(todos, false, "");

			expect(filterTodos.length).toBe(1);
		});

		it('should sort by completed status', () => {
			var filterTodos = TodoApi.filterTodos(todos, true, "");
			expect(filterTodos[0].completed).toBe(false);
		});

		it('should return all todos for empty searchText', () => {
			var filterTodos = TodoApi.filterTodos(todos, true, "");
			expect(filterTodos.length).toBe(3);
		});

		it('should filter todos by searchText', () => {
			var filterTodos = TodoApi.filterTodos(todos, true, "some");
			expect(filterTodos.length).toBe(2);
		});
	});
});