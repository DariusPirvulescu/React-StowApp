import React from 'react';

function Note(props) {
  return (
    <div className="note">
      {/* <h1>Note title</h1>
      <p>Note description</p> */}
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
