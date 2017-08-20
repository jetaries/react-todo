var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');

var ToDoApp = require('ToDoApp');
var actions = require('actions');
var store = require('configureStore').configure();
var TodoApi = require('TodoApi');

store.subscribe(() => {
	var state = store.getState();

	console.log('New state:', state);

	TodoApi.setTodos(state.todos);
});

var initialTodos = TodoApi.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
  	<ToDoApp />
  </Provider>,
  document.getElementById('app')
);
