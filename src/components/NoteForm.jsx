import React, { useState } from "react";
import PropTypes from "prop-types";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const NoteFrom = (props) => {
  const [note, setNote] = useState({
    title: "",
    text: ""
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

  const submitNote = (e) => {
    props.onSubmit(note);
    e.preventDefault();
    setNote({ title: "", text: "" });
  }

  const handleFocus = () => {
    setExpanded(true);
  };

  return (
    <div>
      <form
        onSubmit={submitNote}
        className="note-form"
      >
        {expanded ? (
          <input
            onChange={handleChange}
            value={note.title}
            name="title"
            placeholder="Title"
            autoComplete="off"
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
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

NoteFrom.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default NoteFrom;
