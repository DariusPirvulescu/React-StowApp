import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import keeps from '../keeps';

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
      { keeps.map(createNotes) }
      <Footer />
    </div>
  );
};

export default App;
