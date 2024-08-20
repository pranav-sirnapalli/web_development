import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ModalComponent = ({
  show,
  handleClose,
  handleSave,
  employeeData,
  isEditing,
  employees,
}) => {
  const [newEmployee, setNewEmployee] = useState({
    id: "",
    Name: "",
    email: "",
    contactNumber: "",
    age: "",
    dob: "",
    salary: "",
  });

  const [errors, setErrors] = useState({});

  const getNextEmployeeId = () => {
    const maxId = Math.max(
      ...employees.map((employee) => parseInt(employee.id)),
      0
    );
    return (maxId + 1).toString();
  };

  useEffect(() => {
    if (isEditing && employeeData) {
      setNewEmployee({
        ...employeeData,
        dob: formatDateForInput(employeeData.dob),
      });
    } else {
      setNewEmployee({
        id: getNextEmployeeId(),
        Name: "",
        email: "",
        contactNumber: "",
        age: "",
        dob: "",
        salary: "",
      });
    }
  }, [show, isEditing, employeeData]);

 

  useEffect(() => {
    const calculateAge = () => {
    if (newEmployee.dob) {
      const dob = new Date(newEmployee.dob);
      const currentDate = new Date();
      
      const dobYear = dob.getUTCFullYear();
      const currentYear = currentDate.getUTCFullYear();
      const dobMonth = dob.getUTCMonth();
      const currentMonth = currentDate.getUTCMonth();
      const dobDay = dob.getUTCDate();
      const currentDay = currentDate.getUTCDate();
  
      let calculatedAge = currentYear - dobYear;
  
      if (currentMonth < dobMonth || (currentMonth === dobMonth && currentDay < dobDay)) {
        calculatedAge--;
      }
        setNewEmployee((prevEmployee) => ({
          ...prevEmployee,
          age: calculatedAge.toString(),
        }));
      }
    };

    calculateAge();
  }, [newEmployee.dob]);




  const formatDateForInput = (dateString) => {
    if (!dateString) return "";
    let formattedDate;
    if (dateString.includes("/")) {
      const [day, month, year] = dateString.split("/");
      formattedDate = `${year}-${month}-${day}`;
    } else if (dateString.includes("-")) {
      const [year, month, day] = dateString.split("-");
      formattedDate = `${year}-${month}-${day}`;
    } else {
      formattedDate = "";
    }
    return formattedDate;
  };

  const handleSaveClick = () => {
    if (validateForm()) {
      handleSave(newEmployee);
      handleClose();
      setErrors(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({
      ...newEmployee,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!newEmployee.Name) {
      newErrors.Name = "Full Name is required";
      valid = false;
    }

    
    if (!newEmployee.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(newEmployee.email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    if (!newEmployee.contactNumber) {
      newErrors.contactNumber = "Phone is required";
      valid = false;
    }

  

    if (!newEmployee.dob) {
      newErrors.dob = "Date of Birth is required";
      valid = false;
    }

    if (!newEmployee.salary) {
      newErrors.salary = "Salary is required";
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };

  const handleCloseClick = () => {
    handleClose();
    setErrors({});
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {isEditing ? "Edit Employee" : "Create Employee"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="entire">
          <Form>
            <Form.Group controlId="formBasicId" className="row mb-3">
              <div className="col form-containeer">
                <Form.Label className="col-auto">ID</Form.Label>
                <div className="input-data">
                  <Form.Control
                    type="text"
                    name="id"
                    value={newEmployee.id}
                    onChange={handleInputChange}
                    required
                    readOnly
                  />
                  {errors.id && (
                    <div className="text-danger">{errors.id}</div>
                  )}
                </div>
              </div>
            </Form.Group>

            <Form.Group
              controlId="formBasicFirstName"
              className="row mb-3"
            >
              <div className="col form-containeer">
                <Form.Label className="col-auto">Full Name</Form.Label>
                <div className="input-data">
                  <Form.Control
                    type="text"
                    name="Name"
                    value={newEmployee.Name}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.Name && (
                    <div className="text-danger">{errors.Name}</div>
                  )}
                </div>
              </div>
            </Form.Group>

            

            <Form.Group controlId="formBasicEmail" className="row mb-3">
              <div className="col form-containeer">
                <Form.Label className="col-auto form-containeer">
                  Email
                </Form.Label>
                <div className="input-data">
                  <Form.Control
                    type="email"
                    name="email"
                    value={newEmployee.email}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.email && (
                    <div className="text-danger">{errors.email}</div>
                  )}
                </div>
              </div>
            </Form.Group>

            <Form.Group controlId="formBasicPhone" className="row mb-3">
              <div className="col form-containeer">
                <Form.Label className="col-auto ">Phone</Form.Label>
                <div className="input-data">
                  <Form.Control
                    type="text"
                    name="contactNumber"
                    value={newEmployee.contactNumber}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.contactNumber && (
                    <div className="text-danger">{errors.contactNumber}</div>
                  )}
                </div>
              </div>
            </Form.Group>

            <Form.Group controlId="formBasicAge" className="row mb-3">
              <div className="col form-containeer">
                <Form.Label className="col-auto">Age</Form.Label>
                <div className="input-data">
                  <Form.Control
                    type="text"
                    name="age"
                    value={newEmployee.age}
                    onChange={handleInputChange}
                    readOnly
                  />
                  {errors.age && (
                    <div className="text-danger">{errors.age}</div>
                  )}
                </div>
              </div>
            </Form.Group>

            <Form.Group controlId="formBasicDob" className="row mb-3">
              <div className="col form-containeer">
                <Form.Label className="col-auto">DOB</Form.Label>
                <div className="input-data">
                  <Form.Control
                    type="date"
                    name="dob"
                    value={newEmployee.dob}
                    onChange={handleInputChange}
                    required
                  />

                  {errors.dob && (
                    <div className="text-danger">{errors.dob}</div>
                  )}
                </div>
              </div>
            </Form.Group>

            <Form.Group controlId="formBasicSalary" className="row mb-3 mt-4">
              <div className="col form-containeer">
                <Form.Label className="col-auto">Salary</Form.Label>
                <div className="input-data">
                  <Form.Control
                    type="number"
                    name="salary"
                    value={newEmployee.salary}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.salary && (
                    <div className="text-danger">{errors.salary}</div>
                  )}
                </div>
              </div>
            </Form.Group>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseClick}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveClick}>
          {isEditing ? "Save Changes" : "Create"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
