import React, {useState} from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import SignInWithSocial from '../Sign_In/SocialLogin';

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
        <>
            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="fa fa-user-plus me-1"></i> Login
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Please Login</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={handleLogin} className='w-75 mx-auto'>
                                <div className="mb-3">
                                    <input type="email" className="form-control fs-6" onBlur={handleEmail} id="exampleInputEmail1" placeholder='Email Address' required />
                                </div>
                                <div className="mb-3">
                                    <input type="password" onBlur={handlePassword} className="form-control fs-6" id="exampleInputPassword1" placeholder='Password' required />
                                </div>
                                {errorMessage}
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 mx-auto fs-5">Login</button>
                            </form>
                            <p className='text-center mt-3'>If you new ? <Link className='text-primary text-decoration-none' to='/register'>Please Register</Link> </p>
                            <SignInWithSocial />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;