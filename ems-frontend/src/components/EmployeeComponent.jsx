import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createEmployee } from '../services/EmployeeService';

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const navigator = useNavigate();

  function saveEmployee(e) {
    e.preventDefault();
    const employee = { firstName, lastName, email };
    console.log(employee);

    createEmployee(employee).then((response) => {
      console.log(response.data);
      navigator('/employees');
    });
  }

  function validateForm(){
    let valid = true;

    const errorsCopy = {... errors}
    if(firstName.trim()){
          errorsCopy.firstName='';
    }else{
      errorsCopy.firstName = 'First name is required';
      valid = false;
    }

    if(lastName.trim()){
        errorsCopy.lastName = '';
    } else{
      errorsCopy.lastName = 'Last name is required';
      valid = false;
    }

    if(email.trim()){
      errorsCopy.email = '';
    }else{
        errorsCopy.email = 'Email is required';
        valid = false;
    }
    setErrors(errorsCopy);
    return valid;
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md'>
          <h2 className='text-center'>Add Employee</h2>
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>First Name:  </label>
                <input
                  type='text'
                  placeholder='Enter Employee First Name'
                  name='firstName'
                  value={firstName}
                  className='form-control'
                  onChange={(e)=>setFirstName(e.target.value)}
                />
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Last Name:  </label>
                <input
                  type='text'
                  placeholder='Enter Employee Last Name'
                  name='lastName'
                  value={lastName}
                  className='form-control'
                  onChange={(e)=>setLastName(e.target.value)}
                />
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Email:  </label>
                <input
                  type='email'
                  placeholder='Enter Employee Email'
                  name='email'
                  value={email}
                  className='form-control'
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>

              <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;