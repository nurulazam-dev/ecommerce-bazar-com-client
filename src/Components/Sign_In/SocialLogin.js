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

        <div>
            <div className="text-center text-danger my-2">OR</div>
            <button
                onClick={() => signInWithGoogle()}
                className="btn btn-primary w-75 mb-2 d-flex mx-auto fs-5">
                <div><img className='w-10' src="https://i.ibb.co/JqhBJYJ/google.png" alt="" /></div>
                Login with Google
            </button>
            <button
                onClick={() => signInWithGithub()}
                className="btn btn-success w-75 d-flex mx-auto fs-5">
                <div><img className='w-10' src="https://i.ibb.co/3Wjh3wv/github.png" alt="" /></div>
                Login with Github
            </button>
        </div>
    );
};

export default SocialLogin;