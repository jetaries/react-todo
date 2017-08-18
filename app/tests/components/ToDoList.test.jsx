var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var ToDoList = require('ToDoList');
var ToDo = require('ToDo');

describe('ToDoList', () => {
	it('should exist', () => {
		expect(ToDoList).toExist();
	});

	it('should render 1 ToDo component for each todo item', () => {
		var todos = [{
			id: 1,
			text: 'Do something'
		}, {
			id: 2,
			text: 'Do something else'
		}];

		var todoList = TestUtils.renderIntoDocument(<ToDoList todos={todos} />);
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ToDo);

		expect(todosComponents.length).toBe(todos.length);
	});
});