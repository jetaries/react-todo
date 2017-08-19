var React = require('react');
var ToDo = require('ToDo');

var ToDoList = React.createClass({
	render: function () {
		var {todos, onToggle} = this.props;
		var renderTodos = () => {
			if (todos.length === 0) {
				return (
					<p className="container__message">Nothing to do!</p>
				);
			}
			return todos.map((todo) => {
				return (<ToDo key={todo.id} onToggle={onToggle} {...todo} />);
			});
		};

		return (
			<div>
				{renderTodos()}
			</div>
		);
	}
});

module.exports = ToDoList;