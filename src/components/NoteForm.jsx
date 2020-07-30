import React from 'react';

const NoteFrom = () => (
  <div>
    <form className="note-form">
      <input name="title" placeholder="Title" />
      <textarea name="content" placeholder="Take a note..." rows="3" />
      <button>Add</button>
    </form>
  </div>
);

export default NoteFrom;
