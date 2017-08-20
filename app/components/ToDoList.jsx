var React = require('react');
var {connect} = require('react-redux');

import ToDo from 'ToDo';
var TodoApi = require('TodoApi');

export var ToDoList = React.createClass({
	render: function () {
		var {todos, showCompleted, searchText} = this.props;
		var filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);

		var renderTodos = () => {
			if (todos.length === 0) {
				return (
					<p className="container__message">Nothing to do!</p>
				);
			}
			return filteredTodos.map((todo) => {
				return (<ToDo key={todo.id} {...todo} />);
			});
		};

		return (
			<div>
				{renderTodos()}
			</div>
		);
	}
});

export default connect(
	(state) => {
		return state;
	}
)(ToDoList);