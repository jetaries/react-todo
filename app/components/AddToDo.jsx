var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddToDo = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();
		var {dispatch} = this.props;
		var text = this.refs.todoText.value;

		if (text.length > 0) {
			this.refs.todoText.value = "";
			dispatch(actions.addToDo(text));
		} else {
			this.refs.todoText.focus();
		}
	},
	render: function () {
		return (
			<div className="container__footer">
				<form ref="form" onSubmit={this.handleSubmit}>
					<input type="text" ref="todoText" placeholder="What do you need to do?" />
					<button className="button expanded">Add Todo</button>
				</form>
			</div>
		);
	}
});

export default connect()(AddToDo);