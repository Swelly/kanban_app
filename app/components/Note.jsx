import React from 'react';

export default class Note extends React.Component {
  render() {
    return <div className="task">{this.props.task}</div>;
  }
}
