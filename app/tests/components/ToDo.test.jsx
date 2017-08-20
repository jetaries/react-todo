var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
import {ToDo} from 'ToDo';

describe('ToDo', () => {
	it('should exist', () => {
		expect(ToDo).toExist();
	});

	it('should dispatch UPDATE_TODO action on click', () => {
		var todoData = {
			id: 199,
			text: "Write todo.test.jsx test",
			completed: true,
			completedAt: 2332,
			createdAt: 33999
		};
		var action = actions.startToggleTodo(todoData.id, !todoData.completed);

		var spy = expect.createSpy();
		var todo = TestUtils.renderIntoDocument(<ToDo {...todoData} dispatch={spy} />);
		var $el = $(ReactDom.findDOMNode(todo));

		TestUtils.Simulate.click($el[0]);

		expect(spy).toHaveBeenCalledWith(action);
	});
});