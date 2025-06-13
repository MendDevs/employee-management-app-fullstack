import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService';

const EmployeeComponent = () => {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const { id } = useParams(); // If present, we're editing
  const navigator = useNavigate();
  const isEditing = Boolean(id);

  useEffect(() => {
    if (isEditing) {
      getEmployee(id).then((response) => {
        setEmployee(response.data);
      }).catch(error => {
        console.error("Error fetching employee:", error);
      });
    }
  }, [id, isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee(prev => ({ ...prev, [name]: value }));
  }

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    if (isEditing) {
      updateEmployee(id, employee).then(() => {
        navigator('/employees');
      }).catch(err => console.error(err));
    } else {
      createEmployee(employee).then(() => {
        navigator('/employees');
      }).catch(err => console.error(err));
    }
  }

  return (
    <div className="container">
      <h2>{isEditing ? 'Edit Employee' : 'Add Employee'}</h2>
      <form onSubmit={saveOrUpdateEmployee}>
        <div className="form-group mb-3">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            value={employee.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            value={employee.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={employee.email}
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn btn-success" type="submit">
          {isEditing ? 'Update' : 'Save'}
        </button>
      </form>
    </div>
  );
}

export default EmployeeComponent;
