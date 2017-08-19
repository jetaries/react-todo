var $ = require('jquery');

module.exports = {
	setTodos: function(todos) {
		if ($.isArray(todos)) {
			localStorage.setItem('todos', JSON.stringify(todos));
			return todos;
		}
	},
	getTodos: function() {
		var todoStr = localStorage.getItem('todos');
		var todos = [];

		try {
			todos = JSON.parse(todoStr);
		} catch(e) {

		}

		return $.isArray(todos) ? todos : [];
	},
	filterTodos: function(todos, showCompleted, searchText) {
		var filteredTodos = todos;

		// filter by showCompleted
		filteredTodos = filteredTodos.filter((todo) => {
			return !todo.completed || showCompleted;
		});

		// filter by searchText
		filteredTodos = filteredTodos.filter((todo) => {
			return searchText.length === 0 || todo.text.toLowerCase().indexOf(searchText) > -1;
		});

		// Sort todos with non-completed first
		filteredTodos.sort((a, b) => {
			if (!a.completed && b.completed)
				return -1;
			else if (a.completed && !b.completed)
				return 1;
			else
				return 0;
		});

		return filteredTodos;
	}
}