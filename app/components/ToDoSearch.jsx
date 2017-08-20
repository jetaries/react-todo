var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var ToDoSearch = React.createClass({
	render: function () {
		var {dispatch, showCompleted, searchText} = this.props;

		return (
			<div className="container__header">
				<div>
					<input type="search" ref="searchText" placeholder="Search todos" value={searchText} onChange={() => {
						var searchText = this.refs.searchText.value;
						dispatch(actions.setSearchText(searchText));
					}} />
				</div>
				<div>
					<label><input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
						var showCompleted = this.refs.showCompleted.checked;
						dispatch(actions.toggleShowCompleted());
					}} /> Show completed To-dos</label>
				</div>
			</div>
		);
	}
});

export default connect((state) => {
	return {showCompleted:state.showCompleted, searchText: state.searchText};
})(ToDoSearch);