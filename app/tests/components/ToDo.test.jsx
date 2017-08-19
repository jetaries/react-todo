var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var ToDo = require('ToDo');

describe('ToDo', () => {
	it('should exist', () => {
		expect(ToDo).toExist();
	});

	it('should call onToggle prop with on click', () => {
		var todoData = {
			id: 199,
			text: "Write todo.test.jsx test",
			completed: true
		};
		var spy = expect.createSpy();
		var todo = TestUtils.renderIntoDocument(<ToDo {...todoData} onToggle={spy} />);
		var $el = $(ReactDom.findDOMNode(todo));

		TestUtils.Simulate.click($el[0]);

		expect(spy).toHaveBeenCalledWith(todoData.id);
	});
});