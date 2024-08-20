import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const EmployeeEditModal = ({
  showEditModal,
  handleCloseEditModal,
  handleInputChange,
  handleSaveChanges,
  editedEmployeeData,
}) => {
  const [errors, setErrors] = useState({});

  const handleSaveChangesClick = () => {
    if (validateForm()) {
      handleSaveChanges();
      handleCloseEditModal();
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Check if any field is empty
    for (const key in editedEmployeeData) {
      if (!editedEmployeeData[key]) {
        newErrors[key] = "This field is required";
        valid = false;
      }
    }

    if (!/^\S+@\S+\.\S+$/.test(editedEmployeeData.email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    if (
      isNaN(editedEmployeeData.age) ||
      editedEmployeeData.age < 18 ||
      editedEmployeeData.age > 70
    ) {
      newErrors.age = "Age must be between 18 and 70";
      valid = false;
    }

    if (!/^\d{10}$/.test(editedEmployeeData.contactNumber)) {
      newErrors.contactNumber = "Phone number must be 10 digits";
      valid = false;
    }

    const dob = new Date(editedEmployeeData.dob);
    const currentYear = new Date().getFullYear();
    if (
      isNaN(dob.getTime()) ||
      dob.getFullYear() < currentYear - 70 ||
      dob.getFullYear() > currentYear - 18
    ) {
      newErrors.dob = "Please enter a valid date of birth";
      valid = false;
    }

    if (
      isNaN(editedEmployeeData.salary) ||
      editedEmployeeData.salary < 0
    ) {
      newErrors.salary = "Please enter a valid salary";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <Modal show={showEditModal} onHide={handleCloseEditModal}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicId">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              name="id"
              value={editedEmployeeData.id}
              onChange={handleInputChange}
              readOnly
            />
          </Form.Group>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={editedEmployeeData.firstName}
              onChange={handleInputChange}
              isInvalid={!!errors.firstName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={editedEmployeeData.lastName}
              onChange={handleInputChange}
              isInvalid={!!errors.lastName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.lastName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={editedEmployeeData.email}
              onChange={handleInputChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicContactNumber">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="text"
              name="contactNumber"
              value={editedEmployeeData.contactNumber}
              onChange={handleInputChange}
              isInvalid={!!errors.contactNumber}
            />
            <Form.Control.Feedback type="invalid">
              {errors.contactNumber}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              name="age"
              value={editedEmployeeData.age}
              onChange={handleInputChange}
              isInvalid={!!errors.age}
            />
            <Form.Control.Feedback type="invalid">
              {errors.age}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicDob">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              name="dob"
              value={editedEmployeeData.dob}
              onChange={handleInputChange}
              isInvalid={!!errors.dob}
            />
            <Form.Control.Feedback type="invalid">
              {errors.dob}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicSalary">
            <Form.Label>Salary</Form.Label>
            <Form.Control
              type="number"
              name="salary"
              value={editedEmployeeData.salary}
              onChange={handleInputChange}
              isInvalid={!!errors.salary}
            />
            <Form.Control.Feedback type="invalid">
              {errors.salary}
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseEditModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveChangesClick}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EmployeeEditModal;
