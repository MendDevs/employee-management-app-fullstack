import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employees/";

export const listEmployees = () => axios.get(EMPLOYEE_API_BASE_URL);
export const createEmployee = (employee) => axios.post(EMPLOYEE_API_BASE_URL, employee);
export const getEmployee = (id) => axios.get(`${EMPLOYEE_API_BASE_URL}${id}`);
export const updateEmployee = (id, employee) => axios.put(`${EMPLOYEE_API_BASE_URL}${id}`, employee);
export const deleteEmployee = (id) => axios.delete(`${EMPLOYEE_API_BASE_URL}${id}`);

// Handling the case where the employee ID might be invalid or not found
export const safeDeleteEmployee = async (id) => {
    try {
        await deleteEmployee(id);
        console.log(`Employee with id ${id} deleted successfully.`);
    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.error(`Employee with id ${id} not found.`);
        } else {
            console.error(`Error deleting employee with id ${id}:`, error.message);
        }
    }
};

const saveOrUpdateEmployee = (e) => {
  e.preventDefault();
  if (isEditing) {
    // Add id to the payload if not present
    updateEmployee(id, { ...employee, id }).then(() => {
      navigator('/employees');
    }).catch(err => console.error(err));
  } else {
    createEmployee(employee).then(() => {
      navigator('/employees');
    }).catch(err => console.error(err));
  }
}
