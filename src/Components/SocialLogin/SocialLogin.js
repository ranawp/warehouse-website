import { Button } from 'bootstrap';
import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    const naviagte = useNavigate()

    let errorElement;
    if (error || githubError) {

        errorElement =
            <p className='text-danger text-center'>Error: {error?.message} {githubError?.massage}</p>


    }
    if (user || githubUser) {
        naviagte('/home')
    }

    return (
        <>
            <div className='d-flex align-items-center w-50 mx-auto'>
                <div style={{ height: '1px' }} className='bg-success w-50'></div>
                <p className='mt-2 mx-2'>or</p>
                <div style={{ height: '1px' }} className='bg-success w-50'></div>

            </div>
            {errorElement}

            <div className='mx-auto w-50'>
                <button onClick={() => signInWithGoogle()} href="" className=' button-color mx-auto ' style={{}}>Google Sign in</button>
            </div>
            <div className='mx-auto w-50 mt-3'>
                <button onClick={() => signInWithGithub()} href="" className='button-color mx-auto ' style={{}}>Github Sign in</button>
            </div>
        </>
    );
};

export default SocialLogin;