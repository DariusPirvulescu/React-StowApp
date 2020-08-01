/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const NoteFrom = (props) => {
  const [note, setNote] = useState({
    title: '',
    text: ''
  });
  const [expanded, setExpanded] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  };

  const handleFocus = () => {
    setExpanded(true);
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
        {expanded ? (
          <input
            onChange={handleChange}
            value={note.title}
            name="title"
            placeholder="Title"
          />
        ) : null}
        <textarea
          onFocus={handleFocus}
          onChange={handleChange}
          value={note.text}
          name="text"
          placeholder="Take a note..."
          rows={expanded ? 3 : 1}
        />
        <Zoom in={expanded}>
          <Fab>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default NoteFrom;
