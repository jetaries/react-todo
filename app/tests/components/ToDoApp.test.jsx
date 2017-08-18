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
});