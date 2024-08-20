import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Modal from 'react-bootstrap/Modal';


const SignupPage = ({ setIsLoggedIn }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showCPassword, setCShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);


  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (!email && !password) {
      showAlertMessage("Please enter email and password");
      return;
    }
    if (!email) {
      showAlertMessage("Please enter email");
      return;
    }
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();
  
    const existingAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
    const emailExists = existingAccounts.some(account => account.email.toLowerCase() === trimmedEmail);
  
    if (emailExists) {
      showAlertMessage("Email already exists");
      return;
    }
    if (!password) {
      showAlertMessage("Please enter password");
      return;
    }
    if (!passwordRegex.test(password)) {
      showAlertMessage("Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character (@$!%*?&) and cannot include space");
      return;
    }
    if (password !== confirmPassword) {
      showAlertMessage("Passwords do not match");
      return;
    }
  

  
    const newAccount = { email: trimmedEmail, password: trimmedPassword,name };
    const updatedAccounts = [...existingAccounts, newAccount];
    localStorage.setItem("accounts", JSON.stringify(updatedAccounts));
  
    navigate("/login");
  };
  
  const showAlertMessage = (message) => {
    setAlertMessage(message);
    setShowAlert(true);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div style={{ width: "400px", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", backgroundColor: "red", color: "blue" }}>
        <h2>Sign Up</h2>
        <Form onSubmit={handleSignup}>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group> 
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <FormControl type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <Button variant="outline-secondary" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </Button>
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <InputGroup>
            <Form.Control type={showCPassword ? "text" : "password"} placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <Button variant="outline-secondary" onClick={() => setCShowPassword(!showCPassword)}>
                {showCPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </Button>
            
            </InputGroup>
          </Form.Group>

          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </div>
      <Modal centered show={showAlert} onHide={() => setShowAlert(false)}>
        <Modal.Body>{alertMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowAlert(false)}>Close</Button>
        </Modal.Footer>
      </Modal>  
    </Container>
  );
};

export default SignupPage;
