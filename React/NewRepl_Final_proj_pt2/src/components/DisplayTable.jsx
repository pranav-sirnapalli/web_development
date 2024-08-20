
import React from 'react';
import { Table } from 'react-bootstrap';

function DisplayTable({ employees }) {
  return (
    <div className="container">
      <h2 className="mt-4">Employee List</h2>
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
                <button className="btn btn-primary btn-sm">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default DisplayTable;
