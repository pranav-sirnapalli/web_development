import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const SignupPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const validateEx = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!email && !password) {
      alert("Please enter email and password");
      return;
    }
  
    if (!validateEx.test(password)) {
      alert("Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character (@$!%*?&) and cannot include space");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const trimmedEmail = validateEx.trim();
    const trimmedPassword = password.trim();
    const existingAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
    const newAccount = { email, password: trimmedPassword };
    const updatedAccounts = [...existingAccounts, newAccount];
    localStorage.setItem("accounts", JSON.stringify(updatedAccounts));

    navigate("/login");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div style={{ width: "400px", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", backgroundColor: "black", color: "white" }}>
        <h2>Sign Up</h2>
        <Form onSubmit={handleSignup}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </Form.Group>

        

          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default SignupPage;
