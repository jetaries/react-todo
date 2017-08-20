var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
import ConnectedAddToDo, {AddToDo} from 'AddToDo';

describe('AddToDo', () => {
	it('should exist', () => {
		expect(AddToDo).toExist();
	});

	it('should dispatch ADD_TODO when valid todo text is entered', () => {
		var toDoText = 'new todo item';
		var action = actions.startAddTodo(toDoText);
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddToDo dispatch={spy} />);
		var $el = $(ReactDom.findDOMNode(addTodo));

		addTodo.refs.todoText.value = toDoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(action);
	});

	it('should not dispatch when invalid input', () => {
		var toDoText = '';
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddToDo dispatch={spy} />);
		var $el = $(ReactDom.findDOMNode(addTodo));

		addTodo.refs.todoText.value = toDoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();
	});
});