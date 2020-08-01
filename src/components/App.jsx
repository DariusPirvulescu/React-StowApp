/* eslint-disable quotes */
/* eslint-disable arrow-body-style */
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NoteForm from "./NoteForm";

const App = () => {
  const [notesArr, setNotesArr] = useState([]);

  const handleSubmit = (inputNote) => {
    setNotesArr((prevValue) => [...prevValue, inputNote]);
  };

  return (
    <div>
      <Header />
      <NoteForm onSubmit={handleSubmit} />
      <Note
        title="default"
        content="defaut note for check stuff"
      />
      <div className="notes-area">
        {notesArr.map((noteItem, index) => {
          const key = index + Math.floor(Math.random() * 70);
          return (
            <Note
              key={key}
              title={noteItem.title}
              content={noteItem.text}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default App;
