import './App.css';
import React from 'react';
import ResumeEdit from './pages/ResumeEdit';
import Resumes from './pages/Resumes';
import {content} from './component/data';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Resumes data={content} />} />
          <Route path="/edit/:id/:tagId" element={<ResumeEdit data={content} />} />
          {/* <Route path="/resumes" element={<Resumes data={content} />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
