var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {ToDoSearch} from 'ToDoSearch';

describe('ToDoSearch', () => {
	it('should exist', () => {
		expect(ToDoSearch).toExist();
	});

	it ('should dispatch SET_SEARCH_TEXT on input change', () => {
		var searchText = "dog";
		var action = {type: 'SET_SEARCH_TEXT', searchText};
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<ToDoSearch dispatch={spy} />);

		todoSearch.refs.searchText.value = searchText;
		TestUtils.Simulate.change(todoSearch.refs.searchText);

		expect(spy).toHaveBeenCalledWith(action);
	})

	it ('should dispatch TOGGLE_SHOW_COMPLETED with proper checked value', () => {
		var action = {type: 'TOGGLE_SHOW_COMPLETED'};
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<ToDoSearch dispatch={spy} />);

		todoSearch.refs.showCompleted.checked = true;
		TestUtils.Simulate.change(todoSearch.refs.showCompleted);

		expect(spy).toHaveBeenCalledWith(action);
	})
});