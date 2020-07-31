/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import NoteForm from './NoteForm';

const App = () => {
  const [notesArr, setNotesArr] = useState([]);

  const handleSubmit = (inputNote) => {
    setNotesArr((prevValue) => [...prevValue, inputNote]);
  };

  return (
    <div>
      <Header />
      <NoteForm onSubmit={handleSubmit} />
      <div className="notes-area">
        {notesArr.map((noteItem, index) => {
          return (
            <Note
            key={index}
            title={noteItem.title}
            content={noteItem.text}
            />
          )
        })}
      </div>
      <Footer />
    </div>
  );
};

export default App;
