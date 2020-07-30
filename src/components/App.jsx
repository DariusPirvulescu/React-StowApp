import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import keeps from '../keeps';
import NoteForm from "./NoteForm";

function createNotes(keep) {
  return (
    <Note
      key={keep.key}
      title={keep.title}
      content={keep.content}
    />
  );
};

function App() {
  return (
    <div>
      <Header />
      <NoteForm />
      { keeps.map(createNotes) }
      <Footer />
    </div>
  );
};

export default App;
