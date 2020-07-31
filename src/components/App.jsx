import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import keeps from '../keeps';
import NoteForm from './NoteForm';

const createNotes = (keep) => (
  <Note
    key={keep.key}
    title={keep.title}
    content={keep.content}
  />
);

const App = () => (
  <div>
    <Header />
    <NoteForm />
    <div className="notes-area">
      { keeps.map(createNotes) }
    </div>
    <Footer />
  </div>
);

export default App;
