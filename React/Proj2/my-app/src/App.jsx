import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "react-bootstrap/Card";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeEditModal from "./components/EmployeeEditModal";
import EmployeeCreateModal from "./components/employeeCreateModal";

function App() {
  const [error, setError] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editedEmployeeData, setEditedEmployeeData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    age: "",
    dob: "",
    salary: "",
  });
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
      setEmployees(data);
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
      setEditedEmployeeData(editingItem);
      setShowEditModal(true);
    }
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployeeData({
      ...editedEmployeeData,
      [name]: value,
    });
  };

  const handleSaveChanges = () => {
    setEmployees(
      employees.map((employee) =>
        employee.id === editedEmployeeData.id ? editedEmployeeData : employee
      )
    );
    setShowEditModal(false);
  };

  const handleSaveCreate = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
    setShowCreateModal(false);
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
            handleCreate={() => setShowCreateModal(true)}
          />
        )}
      </div>
      <EmployeeEditModal
  showEditModal={showEditModal}
  handleCloseEditModal={handleCloseEditModal}
  handleInputChange={handleInputChange} 
  handleSaveChanges={handleSaveChanges}
  editedEmployeeData={editedEmployeeData}
/>


      <EmployeeCreateModal
        showCreateModal={showCreateModal}
        handleCloseCreateModal={() => setShowCreateModal(false)}
        handleSaveCreate={handleSaveCreate}
      />
    </div>
  );
}

export default App;
