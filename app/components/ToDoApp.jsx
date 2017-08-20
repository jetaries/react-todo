var React = require('react');
var moment = require('moment');
var uuid = require('node-uuid');

import ToDoList from 'ToDoList';
import AddToDo from 'AddToDo';
import ToDoSearch from 'ToDoSearch';
var TodoApi = require('TodoApi');

var ToDoApp = React.createClass({
	getInitialState: function() {
		return {
			showCompleted: false,
			searchText: "",
			todos: TodoApi.getTodos()
		};
	},
	componentDidUpdate: function() {
		TodoApi.setTodos(this.state.todos);
	},
	handleSearch: function(showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase(),
		});
	},
	render: function () {
		var {todos, showCompleted, searchText} = this.state;
		var filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);

		return (
			<div>
				<h1 className='page-title'>ToDo App</h1>

				<div className='row'>
					<div className='column small-centered small-11 medium-6 large-5'>
						<div className="container">
							<ToDoSearch onSearch={this.handleSearch} />
							<ToDoList />
							<AddToDo />
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = ToDoApp;