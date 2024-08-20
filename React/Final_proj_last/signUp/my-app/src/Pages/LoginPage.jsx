import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';




const LoginPage = ({ setIsLoggedIn,setUserName }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);


  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
    const account = storedAccounts.find(acc => acc.email === email && acc.password === password);

    if (!email && !password) {
      showAlertMessage("Please enter email and password");
      return;
    }
    if(!email){
      showAlertMessage("Please enter email");
      return;
    }
    if(!password){
      showAlertMessage("Please enter password");
      return;
    }
  
   

  if (account) {
    setIsLoggedIn(true);
    setUserName(account.name)
    navigate("/");
  } else {
    showAlertMessage("Invalid email or password!");
  }
};

const showAlertMessage = (message) => {
  setAlertMessage(message);
  setShowAlert(true);
};
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div style={{ width: "400px", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", backgroundColor: "black", color: "white" }}>
        <h2>Login Page</h2>
        <Form onSubmit={handleLogin}>
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

          

          <Button variant="primary" type="submit">
            Login
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

export default LoginPage;
