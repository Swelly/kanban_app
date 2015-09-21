import React from 'react';

export default class Note extends React.Component {
  constructor(props) {
    super(props);

    // Binding edit functions to Tasks
    this.finishEdit = this.finishEdit.bind(this);
    this.checkEnter = this.checkEnter.bind(this);
    this.edit = this.edit.bind(this);
    this.renderEdit = this.renderEdit.bind(this);
    this.renderTask = this.renderTask.bind(this);

    // Default state = false
    this.state = {
      editing: false
    };
  }

  render() {
    const editing = this.state.editing;

    return (
      <div>
        {editing ? this.renderEdit() : this.renderTask()}
      </div>
    );
  }

  // Visual state for editing task text
  renderEdit() {
    return <input type='text'
      autoFocus={true}
      defaultValue={this.props.task}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />;
  }

  renderDelete() {
    return <button className="delete" title="Click to Remove" onClick={this.props.onDelete}>x</button>
  }

  // Pass task text on click
  renderTask() {
    const onDelete = this.props.onDelete;

    return (
          <div onClick={this.edit}>
            {onDelete ? this.renderDelete() : null}
            <span className="task">{this.props.task}</span>
          </div>
    );
  }

  // edit function changes state constant to true
  edit() {
    this.setState({
      editing: true
    });
  }

  // Check for enter key to finish editing input
  checkEnter(e) {
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  }

  // Set state editing back to default (false)
  finishEdit(e) {
    this.props.onEdit(e.target.value);

    this.setState({
      editing: false
    });
  }
}
