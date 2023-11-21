import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { Link, useNavigate } from "react-router-dom";
import MainLogo from '../Dorm-Logos/Dorm-no-bg.png';
import { Form, Button, Card } from 'react-bootstrap';
import './Login.css'; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/userdashboard');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container justify-content-between">
          <a className="navbar-brand" href="/">
            <img src={MainLogo} alt="Bootstrap" width="60" height="54"/>
          </a>
          <div className="d-flex justify-content-center aligh-items-center text-center mt-2">
            <p>Don't Have an Account? <Link className="link-signin" to="/signin"><div className="login-link">Sign Up</div></Link></p>
          </div>
        </div>
      </nav>
      <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <Card className="w-75 w-md-100 text-center mt-3">
          <Card.Body className="mb-4">
            <h2 className="text-center mb-4">Log In</h2>
            <Form className="text-start" onSubmit={signIn}>
              <Form.Group id="email" className="mt-4">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group id="password" className="mt-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Button className="w-100 mt-4 submitButton" type="submit">
                Log In
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Login;
