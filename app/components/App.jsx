import uuid from 'node-uuid';
import React from 'react';
import Note from './Note.jsx';

const notes = [
  {
    id: uuid.v4(),
    task: "Learn Webpack"
  },
  {
    id: uuid.v4(),
    task: "Learn React"
  },
  {
    id: uuid.v4(),
    task: 'Drink Coffee'
  },
  {
    id: uuid.v4(),
    task: "Text Amigo"
  }
]

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ol className="note-list">{notes.map(this.renderNote)}</ol>
      </div>
    );
  }
  renderNote(note) {
    return (
      <li key={`note${note.id}`}>
        <Note task={note.task} />
      </li>
    );
  }
}