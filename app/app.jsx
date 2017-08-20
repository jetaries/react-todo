var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');

var ToDoApp = require('ToDoApp');
var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
	console.log('New state:', store.getState());
});

store.dispatch(actions.addToDo('Clean kitchen'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());


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
