import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const EmployeeCreateModal = ({
  showCreateModal,
  handleCloseCreateModal,
  handleSaveCreate,
}) => {
  const [newEmployee, setNewEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    age: "",
    dob: "",
    salary: "",
  });

  const [errors, setErrors] = useState({});

  const handleCreateClick = () => {
    if (validateForm()) {
      handleSaveCreate(newEmployee);
      setNewEmployee({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        age: "",
        dob: "",
        salary: "",
      });
      setErrors({});
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "dob") {
      const [day, month, year] = value.split("-");
      const formattedDate = `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
      setNewEmployee({
        ...newEmployee,
        [name]: formattedDate,
      });
    } else {
      setNewEmployee({
        ...newEmployee,
        [name]: value,
      });
    }
  };
  

  const validateForm = () => {
    let valid = true;
    const errors = {};

    if (!newEmployee.id) {
      errors.id = "ID is required";
      valid = false;
    }

    if (!newEmployee.firstName) {
      errors.firstName = "First Name is required";
      valid = false;
    }

    if (!newEmployee.lastName) {
      errors.lastName = "Last Name is required";
      valid = false;
    }

    if (!newEmployee.email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(newEmployee.email)) {
      errors.email = "Invalid email address";
      valid = false;
    }

    if (!newEmployee.contactNumber) {
      errors.contactNumber = "Phone is required";
      valid = false;
    }

    const age = parseInt(newEmployee.age);
    if (!newEmployee.age || isNaN(age) || age < 18 || age > 70) {
      errors.age = "Age must be a number between 18 and 70";
      valid = false;
    }

    if (!newEmployee.dob) {
      errors.dob = "Date of Birth is required";
      valid = false;
    }

    if (!newEmployee.salary) {
      errors.salary = "Salary is required";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  return (
    <Modal show={showCreateModal} onHide={handleCloseCreateModal}>
      <Modal.Header closeButton>
        <Modal.Title>Create Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicId">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              name="id"
              value={newEmployee.id}
              onChange={handleInputChange}
              required
            />
            {errors.id && <div className="text-danger">{errors.id}</div>}
          </Form.Group>

          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={newEmployee.firstName}
              onChange={handleInputChange}
              required
            />
            {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={newEmployee.lastName}
              onChange={handleInputChange}
              required
            />
            {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={newEmployee.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </Form.Group>

          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              name="contactNumber"
              value={newEmployee.contactNumber}
              onChange={handleInputChange}
              required
            />
            {errors.contactNumber && <div className="text-danger">{errors.contactNumber}</div>}
          </Form.Group>

          <Form.Group controlId="formBasicAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              name="age"
              value={newEmployee.age}
              onChange={handleInputChange}
              required
            />
            {errors.age && <div className="text-danger">{errors.age}</div>}
          </Form.Group>

          <Form.Group controlId="formBasicDob">
            <Form.Label>DOB</Form.Label>
            <Form.Control
              type="date"
              name="dob"
              value={newEmployee.dob}
              onChange={handleInputChange}
              required
            />
            {errors.dob && <div className="text-danger">{errors.dob}</div>}
          </Form.Group>

          <Form.Group controlId="formBasicSalary">
            <Form.Label>Salary</Form.Label>
            <Form.Control
              type="number"
              name="salary"
              value={newEmployee.salary}
              onChange={handleInputChange}
              required
            />
            {errors.salary && <div className="text-danger">{errors.salary}</div>}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseCreateModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCreateClick}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EmployeeCreateModal;
