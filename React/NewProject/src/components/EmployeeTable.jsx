import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const EmployeeTable = ({ employees, handleDelete, handleEdit, handleCreate }) => {
  const formatDate = (dateString) => {
    if (!dateString) return ""; 
  
    let formattedDate;
    if (dateString.includes("/")) {
      const [day, month, year] = dateString.split('/');
      formattedDate = `${day}-${month}-${year}`;
    } else if (dateString.includes("-")) {
      const [year, month, day] = dateString.split('-');
      formattedDate = `${day}-${month}-${year}`;
    } else {
      formattedDate = ""; 
    }
    
    return formattedDate;
  };

  
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th style={{ whiteSpace: 'nowrap' }}>Full Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Age</th>
          <th style={{ whiteSpace: 'nowrap' }}>DOB</th> 
          <th>Salary</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td style={{ whiteSpace: 'nowrap' }}>{employee.Name}</td>
           
            <td>{employee.email}</td>
            <td>{employee.contactNumber}</td>
            <td>{employee.age}</td>
            <td style={{ whiteSpace: 'nowrap' }}>{formatDate(employee.dob)}</td> 
            <td>{employee.salary}</td>
            <td>
              <div className="custom-btn">
                <Button onClick={() => handleEdit(employee.id)} variant="warning">
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
              <Button variant="primary" onClick={handleCreate}>Create</Button>{" "}
            </div>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default EmployeeTable;
