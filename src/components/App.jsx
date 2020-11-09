import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NoteForm from "./NoteForm";

const App = () => {
  const [notesArr, setNotesArr] = useState([{
    title: "default",
    text: "defaut note to check stuff"
  }]);

  const handleSubmit = (inputNote) => {
    setNotesArr((prevValue) => [...prevValue, inputNote]);
  };

  const deleteNote = (noteId) => {
    setNotesArr((prevValue) => {
      return prevValue.filter((item, ix) => {
        return ix !== noteId;
      });
    });
  };

  return (
    <div>
      <Header />
      <NoteForm onSubmit={handleSubmit} />
      <div className="notes-area">
        {notesArr.map((noteItem, index) => {
          return (
            <Note
              key={index + Math.random()}
              id={index}
              title={noteItem.title}
              content={noteItem.text}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default App;
