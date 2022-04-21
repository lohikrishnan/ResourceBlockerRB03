import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const navStyle = {
    color: 'black'
  };
  return (
    <div className='logincss'>
        <Form>
          <h1>
            Login
        </h1>
        <Form.Group className="mb-3">
        <Form.Label>User Type</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Select User Type</option>
          <option value="1">Admin</option>
          <option value="2">User</option>
        </Form.Select>
        <Form.Label>User ID</Form.Label>
        <Form.Control type="id" placeholder="Enter User ID" />
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>
        <Button id='btn-login' variant="primary" type="submit">
          Login
        </Button>
        <h5>Need to Reset Your Password?</h5>
        <Link style={navStyle} to="/resetPassword">
                <h6>Reset Password</h6>
        </Link>
        </Form>
    </div>
  )
}

export default Login;