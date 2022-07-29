import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, googleUser, googleLoading] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (googleUser || githubUser) {
        navigate(from, { replace: true })
    }
    if (googleLoading || githubLoading) {
        <Loading />
    }
    console.log(googleUser);
    
    return (
        <div className='w-75 mx-auto'>
            <div className="text-center text-warning my-2">OR</div>
            <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline-success w-100 mx-auto mb-2 fs-5"> 
               <span className='fa fa-google me-2'></span> Login with Google
            </button>
            <button
                onClick={() => signInWithGithub()}
                className="btn btn-outline-primary w-100 mx-auto fs-5">
                <span className='fa fa-github me-2'></span> Login with Github
            </button>
        </div>
    );
};

export default SocialLogin;