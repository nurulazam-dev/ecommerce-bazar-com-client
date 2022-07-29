import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import SignInWithSocial from './SocialLogin';
import login_img from "../../Assets/Social Logo/login_img.webp"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        error
    ] = useSignInWithEmailAndPassword(auth);
    let errorMessage;
    if (error) { errorMessage = <p className='text-danger'>{error?.message}</p> }
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"

    const handleEmail = event => {
        const emailValue = event.target.value;
        setEmail(emailValue)
    }
    const handlePassword = event => {
        const passwordValue = event.target.value;
        setPassword(passwordValue)
    }

    const handleLogin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate(from, { replace: true })
    }

    return (
        <div className='container bg-white mx-auto border p-3 rounded mt-5 shadow'>
            <div className="row">
                <h2 className='text-primary text-center my-3 py-3'>Please Login</h2>
                <div className="col-md-5  mx-4">
                <img src={login_img} alt="About Us" height='450px' width='500px' />
                </div>
                <div className="col-md-6 mt-3">
                    <form onSubmit={handleLogin} className='w-75 mx-auto'>
                        <div className="mb-3">
                            <input type="email" className="p-2 form-control fs-5" onBlur={handleEmail} id="exampleInputEmail1" placeholder='Email Address' required />
                        </div>
                        <div className="mb-3">
                            <input type="password" onBlur={handlePassword} className="p-2 form-control fs-5" id="exampleInputPassword1" placeholder='Password' required />
                        </div>

                        {errorMessage}
                        <button type="submit" className="btn btn-primary w-100 mx-auto fs-5">Login</button>
                    </form>
                    <p className='text-center mt-3 mb-0'>If you new ? <Link className='text-info text-decoration-none' to='/register'>Please Register</Link> </p>
                    <SignInWithSocial />
                </div>

            </div>

        </div>
    );
};

export default Login;