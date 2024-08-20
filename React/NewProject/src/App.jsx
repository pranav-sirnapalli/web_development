import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "react-bootstrap/Card";
import EmployeeTable from "./components/EmployeeTable";
import ModalComponent from "./components/Modal";

function App() {

  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedEmployeeData, setEditedEmployeeData] = useState(null);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      // Initialize the 'Name' field by combining 'firstName' and 'lastName'
      const employeesWithFullName = data.map(employee => ({
        ...employee,
        Name: `${employee.firstName} ${employee.lastName}`
      }));
      setEmployees(employeesWithFullName);
    } catch (error) {
      setError(error.message);
    }
  };
  
  const handleDelete = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  
  const handleEdit = (id) => {
    const editingItem = employees.find((item) => item.id === id);
    if (editingItem) {
      // Combine first and last names into a single fullName field
      setShowModal(true);
      setEditedEmployeeData(editingItem);
      setIsEditing(true);
    }
  };
  
  
  const handleCreate = () => {
    setIsEditing(false);
    setShowModal(true);
    setEditedEmployeeData(null); 
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditedEmployeeData(null);
  };

  const handleSave = (employee) => {
    if (isEditing) {
      setEmployees(
        employees.map((emp) =>
          emp.id === employee.id ? employee : emp
        )
      );
    } else {
      setEmployees([...employees, employee]);
    }
  };

  return (
    <div className="App">
      <div className="card-container">
        <Card className="custom-card">
          <Card.Body className="custom-data">EMPLOYEE DATA</Card.Body>
        </Card>
      </div>

      <div className="table-container">
        {error ? (
          <div className="error">{error}</div>
        ) : (
          <EmployeeTable
            employees={employees}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleCreate={handleCreate}
          />
        )}
      </div>

      <ModalComponent
        show={showModal}
        handleClose={handleCloseModal}
        handleSave={handleSave}
        employeeData={editedEmployeeData}
        isEditing={isEditing}
        employees={employees}
      />
    </div>
  );
}

export default App;
