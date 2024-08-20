import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const EmployeeTable = ({ employees, handleDelete, handleEdit, handleCreate }) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Age</th>
          <th>DOB</th>
          <th>Salary</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.email}</td>
            <td>{employee.contactNumber}</td>
            <td>{employee.age}</td>
            <td>{employee.dob}</td>
            <td>{employee.salary}</td>
            <td>
              <div className="custom-btn">
                <Button onClick={() => handleEdit(employee.id)} variant="info">
                  Edit
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => handleDelete(employee.id)}
                >
                  Delete
                </Button>{" "}
              </div>
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan="9">
            <div className="create">
              <Button variant="success" onClick={handleCreate}>Create</Button>{" "}
            </div>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default EmployeeTable;

