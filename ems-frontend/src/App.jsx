import './App.css'
import React, { useState } from 'react';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        // http://localhost:3000 
        <Route path='/' element = { <ListEmployeeComponent/>}></Route>
        //http:localhost:3000/employees
        <Route path='/employees' element = {<ListEmployeeComponent />}></Route>
      </Routes>
      <ListEmployeeComponent />
      <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
