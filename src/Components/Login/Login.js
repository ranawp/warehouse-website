import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {
    const emailRef = useRef('')
    const passwordref = useRef('')
    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const passowrd = passwordref.current.value;

        console.log(email, passowrd)
    }
    const navigateRegister = event => {
        navigate('/register')
    }
    return (
        <div className='container'>
            <h1 className='text-center'>Please Login </h1>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordref} type="password" placeholder="Password" required />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='text-center'>New to Organic? <Link to='/register' className='text-danger text-decoration-none' onClick={navigateRegister}>Please register</Link></p>
        </div>
    );
};

export default Login;