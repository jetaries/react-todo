var React = require('react');

var AddToDo = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();
		var text = this.refs.todoText.value;

		if (text.length > 0) {
			this.refs.todoText.value = "";
			this.props.onAddToDo(text);
		} else {
			this.refs.todoText.focus();
		}
	},
	render: function () {
		return (
			<div>
				<form ref="form" onSubmit={this.handleSubmit}>
					<input type="text" ref="todoText" placeholder="What do you need to do?" />
					<button className="button">Add</button>
				</form>
			</div>
		);
	}
});

module.exports = AddToDo;