import React from 'react';

const Note = (props) => (
  <div className="note">
    {/* <h1>Note title</h1>
      <p>Note description</p> */}
    
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <button className="delete-btn">Delete</button>
  </div>
);

export default Note;
