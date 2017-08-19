var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var ToDoApp = require('ToDoApp');

describe('ToDoApp', () => {
	it('should exist', () => {
		expect(ToDoApp).toExist();
	});

	it('should add todo to the todo state on handleAddToDo', () => {
		var todoText = "Sleep!";
		var todoApp = TestUtils.renderIntoDocument(<ToDoApp />);

		todoApp.setState({todos: []});
		todoApp.handleAddToDo(todoText);

		expect(todoApp.state.todos[0].text).toBe(todoText);
	});

	it('should toggle completed value when handleToggle called', () => {
		var todo = {id: 11, text: "test features", completed: false};
		var todoApp = TestUtils.renderIntoDocument(<ToDoApp />);

		todoApp.setState({todos: [todo]});

		expect(todoApp.state.todos[0].completed).toBe(false);
		
		todoApp.handleToggle(11);

		expect(todoApp.state.todos[0].completed).toBe(true);
	});
});