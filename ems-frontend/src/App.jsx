import './App.css'
import React, { useState } from 'react';
import ListEmployeeComponent from './components/ListEmployeeComponent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListEmployeeComponent />
    </>
  )
}

export default App
