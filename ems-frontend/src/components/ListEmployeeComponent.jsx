import React from 'react'

const ListEmployeeComponent = () => {

    const dummyData = [
        {
            "id" : 1,
            "firstName" : "Eman",
            "lastName"  : "Morris",
            "email"     : "emman@gmail.com"
        },
        {
            "id" : 2,
            "firstName" : "J",
            "lastName"  : "Peters",
            "email"     : "j@gmail.com"
        },
        {
            "id" : 3,
            "firstName" : "toby",
            "lastName"  : "Oki",
            "email"     : "toby@gmail.com"
        }
        
    ]

  return (
    <div className='container'>
      <h2>List of Employees</h2>
      <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Employee Id </th>
                <th>Employee First Name</th>
                <th>Employee Last Name </th>
                <th>Employee Email Id </th>
            </tr>
        </thead>
        <tbody>
            {
                dummyData.map(employee => 
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                    </tr>
                )
            }
            <tr>

            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponent
