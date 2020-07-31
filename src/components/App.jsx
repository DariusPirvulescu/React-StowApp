import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import keeps from '../keeps';
import NoteForm from './NoteForm';

const App = () => {
  const [notesArr, setNotesArr] = useState([]);

  const createNotes = (keep) => (
    <Note
      key={keep.key}
      title={keep.title}
      content={keep.content}
    />
  );
  
  const handleSubmit = (title, text) => {
    const newNote = (
      <Note
        key={Math.floor(Math.random() * 70)}
        title={title}
        content={text}
      />
    );
    setNotesArr((prevValue) => {
      return [...prevValue, newNote]
    });
    console.log(notesArr);
  };

  return (
    <div>
      <Header />
      <NoteForm onSubmit={handleSubmit} />
      <div className="notes-area">
        {/* { keeps.map(createNotes) } */}
        {/* {notesArr.forEach()} */}
        {notesArr}
        <Note />
      </div>
      <Footer />
    </div>
  );
};

export default App;
