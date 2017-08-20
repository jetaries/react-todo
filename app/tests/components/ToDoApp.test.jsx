var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var {Provider} = require('react-redux');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var configureStore = require('configureStore');
import ToDoList from 'ToDoList';
var ToDoApp = require('ToDoApp');

describe('ToDoApp', () => {
	it('should exist', () => {
		expect(ToDoApp).toExist();
	});

	it('should render TodoList', () => {
		var store = configureStore.configure();
		var provider = TestUtils.renderIntoDocument(<Provider store={store}><ToDoApp /></Provider>);

		var todoApp = TestUtils.scryRenderedComponentsWithType(provider, ToDoApp)[0];
		var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, ToDoList);

		expect(todoList.length).toEqual(1);
	});
});