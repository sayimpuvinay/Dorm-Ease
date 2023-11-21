import React, { useState } from "react"
import { Form, Button, Card } from 'react-bootstrap';
import './Signup.css';
import MainLogo from '../Dorm-Logos/Dorm-no-bg.png';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { Link } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log(userCredential);
          })
          .catch((error) => {
            console.log(error);
          });
      };
  

  return (
    <div>
    <nav class="navbar bg-body-tertiary fixed-top">
    <div class="container justify-content-between">
      <a class="navbar-brand" href="/">
        <img src={MainLogo} alt="Bootstrap" width="60" height="54"/>
      </a>
      <div className=" d-flex justify-content-center aligh-items-center text-center mt-2">
            <p>Already Have an Account? <Link className="link-signin" to="/login"><div className="login-link">Log In</div></Link></p>
        </div>
    </div>
  </nav>
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <Card className="w-75 w-md-100 text-center mt-3">
            <Card.Body className="mb-4">
            <h2 className="text-center mb-4">Sign Up</h2>
            <Form className="text-start" onSubmit={signUp}>
                <Form.Group id="email" className="mt-4">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} required />
                </Form.Group>
                <Form.Group id="password" className="mt-4">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} required />
                </Form.Group>
                <Form.Group id="password-confirm" className="mt-4">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control 
                    type="password"
                    placeholder="Re-enter your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} required />
                </Form.Group>
                <Button className="w-100 mt-4 submitButton" type="submit">
                Sign Up
                </Button>
            </Form>
            </Card.Body>
        </Card>
    </div>
    </div>
  
    )
} 

export default Signup;

