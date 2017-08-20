var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var {Provider} = require('react-redux');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {configure} from 'configureStore';
import ConnectedTodoList, {ToDoList} from 'ToDoList';
import ConnectedTodo, {ToDo} from 'ToDo';

describe('ToDoList', () => {
	it('should exist', () => {
		expect(ToDoList).toExist();
	});

	it('should render 1 ToDo component for each todo item', () => {
		var todos = [{
			id: 1,
			text: 'Do something',
			completed: false,
			completedAt: undefined,
			createdAt: 500
		}, {
			id: 2,
			text: 'Do something else',
			completed: false,
			completedAt: undefined,
			createdAt: 600
		}];

		var store = configure({todos});
		var provider = TestUtils.renderIntoDocument(<Provider store={store}><ConnectedTodoList /></Provider>);
		var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

		expect(todosComponents.length).toBe(todos.length);
	});

	it('should render empty message if no todo', () => {
		var todos = [];

		var todoList = TestUtils.renderIntoDocument(<ToDoList todos={todos} />);
		var $el = $(ReactDom.findDOMNode(todoList));

		expect($el.find('.container__message').length).toBe(1);
	});
});