import './App.css'
import React from 'react';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          {/* http://localhost:3000 */}
          <Route path='/' element={<ListEmployeeComponent />} />
          {/* http://localhost:3000/employees */}
          <Route path='/employees' element={<ListEmployeeComponent />} />
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
