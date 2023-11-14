import React, { useRef, useState } from "react"
import { Form, Button, Card } from 'react-bootstrap';
import './Signup.css';
import { useAuth } from "../Config/AuthContext";
import { Link, useNavigate } from "react-router"

const Signup = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()


  async function handleSubmit(e) {
    e.preventDefault()
  }
  

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <Card className="w-75 w-md-100 text-center mt-3">
            <Card.Body className="mb-4">
            <h2 className="text-center mb-4">Sign Up</h2>
            <Form className="text-start">
                <Form.Group id="email" className="mt-4">
                <Form.Label>Email</Form.Label>
                <Form.Control placeholder='Please enter your mail' type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password" className="mt-4">
                <Form.Label>Password</Form.Label>
                <Form.Control placeholder="Please enter your password" type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="password-confirm" className="mt-4">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control placeholder="please re-enter your password" type="password" ref={passwordConfirmRef} required />
                </Form.Group>
                <Button className="w-100 mt-4 submitButton" type="submit">
                Sign Up
                </Button>
            </Form>
            </Card.Body>
        </Card>
        <div className="w-50 text-center mt-5">
            Already Have an Account? Log In
        </div>
    </div>

  
    )
} 

export default Signup;

