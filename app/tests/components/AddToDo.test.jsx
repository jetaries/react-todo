var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddToDo = require('AddToDo');

describe('AddToDo', () => {
	it('should exist', () => {
		expect(AddToDo).toExist();
	});

	it('should call handleAddToDo if new todo entered', () => {
		var toDoText = 'new todo item';
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddToDo onAddToDo={spy} />);
		var $el = $(ReactDom.findDOMNode(addTodo));

		addTodo.refs.todoText.value = toDoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(toDoText);
	});

	it('should not call handleAddToDo when invalid input', () => {
		var toDoText = '';
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddToDo onAddToDo={spy} />);
		var $el = $(ReactDom.findDOMNode(addTodo));

		addTodo.refs.todoText.value = toDoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();
	});
});