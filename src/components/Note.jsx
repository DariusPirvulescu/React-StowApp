import React from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import PropTypes from 'prop-types';

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

Note.defaultProps = {
  title: "",
  content: ""
};

Note.propTypes = {
  onComplete: PropTypes.func.isRequired,
  title: PropTypes.string,
  content: PropTypes.string
};

export default Note;
