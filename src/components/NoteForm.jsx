/* eslint-disable arrow-body-style */
import React, { useState } from 'react';

const NoteFrom = (props) => {
  const [note, setNote] = useState({
    title: '',
    text: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          props.onSubmit(note);
          e.preventDefault();
          setNote({ title: '', text: '' });
        }}
        className="note-form"
      >
        <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange} value={note.text} name="text" placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
};

export default NoteFrom;
