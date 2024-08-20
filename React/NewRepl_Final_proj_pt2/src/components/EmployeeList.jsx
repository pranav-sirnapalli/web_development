
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmployees, deleteEmployee, updateEmployee } from './actions/index.js';
import { Table, Button, Form } from 'react-bootstrap';

function EmployeeList() {
  const employees = useSelector(state => state.employees);
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    contactNumber: '',
    dob: '',
    salary: '',
    address: '',
  });

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleEdit = (employee) => {
    setEditMode(true);
    setFormData(employee);
  };

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nameRegex = /^[a-zA-Z ]*$/;
    const numberRegex = /^[0-9]*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const dobRegex = /^\d{4}-\d{2}-\d{2}$/;

    let newValue = value;
    switch (name) {
      case 'firstName':
      case 'lastName':
        if (!nameRegex.test(value)) {
          newValue = '';
          console.log('Invalid input. Please enter alphabets and spaces only.');
        }
        break;
      case 'email':
        if (!emailRegex.test(value)) {
          newValue = '';
          console.log('Invalid input. Please enter a valid email address.');
        }
        break;
      case 'contactNumber':
      case 'age':
      case 'salary':
        if (!numberRegex.test(value)) {
          newValue = '';
          console.log('Invalid input. Please enter numbers only.');
        }
        break;
      case 'dob':
        if (!dobRegex.test(value)) {
          newValue = '';
          console.log('Invalid input. Please enter date in YYYY-MM-DD format.');
        }
        break;
      default:
        break;
    }

    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateEmployee(formData));
    setEditMode(false);
    setFormData({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      age: '',
      contactNumber: '',
      dob: '',
      salary: '',
      address: '',
    });
  };

  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Age</th>
            <th>DOB</th>
            <th>Salary</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.contactNumber}</td>
              <td>{employee.age}</td>
              <td>{employee.dob}</td>
              <td>{employee.salary}</td>
              <td>{employee.address}</td>
              <td>
                <Button variant="primary" size="sm" onClick={() => handleEdit(employee)}>Edit</Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(employee.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {editMode && (
        <Form onSubmit={handleSubmit}>
          <h2>Edit Employee</h2>
          <Form.Group>
            <Form.Label>ID:</Form.Label>
            <Form.Control type="text" name="id" value={formData.id} readOnly />
          </Form.Group>
          <Form.Group>
            <Form.Label>First Name:</Form.Label>
            <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name:</Form.Label>
            <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Contact Number:</Form.Label>
            <Form.Control type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Age:</Form.Label>
            <Form.Control type="text" name="age" value={formData.age} onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>DOB:</Form.Label>
            <Form.Control type="text" name="dob" value={formData.dob} onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Salary:</Form.Label>
            <Form.Control type="text" name="salary" value={formData.salary} onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Address:</Form.Label>
            <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit">{editMode ? 'Update Employee' : 'Create Employee'}</Button>
        </Form>
      )}
    </div>
  );
}

export default EmployeeList;
