import React, { useState } from 'react';

const NoteFrom = (props) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');

  const handleTitle = (e) => {
    const title = e.target.value;
    setNoteTitle(title);
  };

  const handleText = (e) => {
    const text = e.target.value;
    setNoteText(text);
  };

  return( 
    <div>
      <form 
      onSubmit={(e) => {
        props.onSubmit(noteTitle, noteText)
        e.preventDefault();
        setNoteTitle('')
        setNoteText('')
      }} 
      className="note-form">
        <input onChange={handleTitle} value={noteTitle} name="title" placeholder="Title" />
        <textarea onChange={handleText} value={noteText} name="content" placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  )
};

export default NoteFrom;
