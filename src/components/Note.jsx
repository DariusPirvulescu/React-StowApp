import React from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const Note = (props) => {
  const handleDelete = () => {
    props.onComplete(props.id);
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        type="button"
        onClick={handleDelete}
        className="delete-btn"
      >
        <HighlightOffIcon />
      </button>
    </div>
  );
};

export default Note;
