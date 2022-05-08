import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const navigate = useNavigate()

    const navigateLogin = event => {
        navigate('/login')
    }

    if (user) {
        console.log(user)
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const displayName = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName });
        alert('Updated profile');
        // console.log(email, password)
        navigate('/home')

    }
    return (
        <div className='container'>
            <h3 className='text-center'>Please register</h3>
            <Form onSubmit={handleRegister} className=' w-50 mx-auto'>
                Name <br />
                <Form.Control type="text" name='name' placeholder="Enter Your Name" />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p className='text-center'>Already have an account? <Link to='/login' className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;