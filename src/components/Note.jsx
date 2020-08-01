import React from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const Note = (props) => (
  <div className="note">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <button
      // type="button"
      onClick={() => {
        props.onComplete(props.id);
      }}
      className="delete-btn"
    >
      <HighlightOffIcon />
    </button>
  </div>
);

export default Note;
