import './App.css'
import React from 'react';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeComponent from './components/EmployeeComponent';
import { createEmployee, getEmployee, updateEmployee } from "./services/EmployeeService";

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
          {/* // http://localhost:3000/add-employees */}
          <Route path='/add-employee' element={<EmployeeComponent/>}></Route>

          {/* // http://localhost:3000/edit-employee/1 */}
          <Route path='/edit-employee/:id' element={<EmployeeComponent/>}></Route>
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App;
