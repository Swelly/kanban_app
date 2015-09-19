import React from 'react';
import Note from './Note.jsx';

export default class Notes extends React.Component {
  render() {
    const notes = this.props.items;

    return <ol className='note-list'>{notes.map(this.renderNote)}</ol>;
  }

  renderNote(note) {
    return (
      <li className='note' key={`note${note.id}`}>
        <Note task={note.task} />
      </li>
    );
  }
}
