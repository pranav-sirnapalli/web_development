import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
    const account = storedAccounts.find(acc => acc.email === email && acc.password === password);

    if (!email && !password) {
      alert("Please enter email and password");
      return;
    }
    if(!email){
      alert("Please enter email");
      return;
    }
    if(!password){
      alert("Please enter password");
      return;
    }
  if (account) {
    setIsLoggedIn(true);
    navigate("/");
  } else {
    alert("Invalid email or password!");
  }
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
            <Form.Control type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Show Password" checked={showPassword} onChange={(e) => setShowPassword(e.target.checked)} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default LoginPage;
