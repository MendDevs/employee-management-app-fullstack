import React, { useEffect, useState } from 'react'
import { listEmployees, deleteEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([])
  const [search, setSearch] = useState('')
  const navigator = useNavigate();

  useEffect(() => {
    listEmployees().then((response) => {
      console.log("Fetched employees:", response.data);
      setEmployees(response.data);
    }).catch(error => {
      console.error(error);
    })
  }, [])

  function addNewEmployee() {
    navigator('/add-employee')
  }

  function handleDeleteEmployee(id) {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      deleteEmployee(id).then(() => {
        setEmployees(employees.filter(employee => employee.id !== id));
      }).catch(error => {
        console.error(error);
      });
    }
  }

  // Filter employees by search term
  const filteredEmployees = employees.filter(
    (employee) =>
      employee.firstName.toLowerCase().includes(search.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(search.toLowerCase()) ||
      employee.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='container'>
      <h2>List of Employees</h2>
      {/* Add Employee Button */}
      <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
      {/* Search Input */}
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Search employees..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {/* Employee Table */}
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map(employee =>
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                {/* Edit Button */}
                <button
                  className="btn btn-info me-2"
                  onClick={() => navigator(`/edit-employee/${employee.id}`)}
                >
                  Edit
                </button>
                {/* Delete Button */}
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteEmployee(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponent;
