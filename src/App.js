import Welcomepage from './Welcome'
import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import QuizFormpage from './QuizForm';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Welcomepage /> } />
      <Route path="/qf" element={<QuizFormpage /> } />
      
    </Routes>
    </>
  );
}

export default App;
