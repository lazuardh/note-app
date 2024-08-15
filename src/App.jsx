import React from 'react';
import AddPage from './pages/AddPage'
import NotFoundPage from './pages/NotFound';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import DetailPageWrapper from './pages/DetailPage';
import NotePageWrapper from './pages/NotePage';


function App() {
  return (
    <div className='app-container'>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<NotePageWrapper />} />
          <Route path='/notes/:id' element={<DetailPageWrapper />} />
          <Route path='/notes/add' element={<AddPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;
