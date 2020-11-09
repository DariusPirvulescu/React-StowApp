import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import PropTypes from "prop-types";

const Note = (props) => {
  const handleDelete = () => {
    props.onDelete(props.id);
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
        <HighlightOffIcon className="delete-icon" />
      </button>
    </div>
  );
};

Note.defaultProps = {
  title: "",
  content: ""
};

Note.propTypes = {
  onDelete: PropTypes.func.isRequired,
  title: PropTypes.string,
  content: PropTypes.string
};

export default Note;
