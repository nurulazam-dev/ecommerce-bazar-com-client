import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import SignInWithSocial from '../Login/SignInWithSocial/SignInWithSocial';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();

    const handleEmail = event => {
        const emailValue = event.target.value;
        setEmail(emailValue)
    }
    const handlePassword = event => {
        const passwordValue = event.target.value;
        setPassword(passwordValue)

    }
    const handleConfirmPassword = event => {
        const confirmPasswordValue = event.target.value;
        setConfirmPassword(confirmPasswordValue)
    };

    const handleRegister = event => {
        event.preventDefault();
        if (password.length < 5) {
            setError("Password is not long than 6 characters")
        }
        if (password !== confirmPassword) {
            setError('Not match Password');
            return
        }
        createUserWithEmailAndPassword(email, password);
    };
    if (user) {
        navigate('/login')
    }
   

    return (
        <div style={{ width: "500px" }} className='container mx-auto border p-3 rounded mt-5 shadow'>
            <h2 className='text-primary text-center mt-2'>Please Register</h2>
            <form onSubmit={handleRegister} className='w-75 mx-auto'>
                <div className="mb-3">
                    <input type="text" className="form-control fs-6" id="exampleInputName1" placeholder='Your Name' />
                </div>
                <div className="mb-3">
                    <input type="email" onBlur={handleEmail} className="form-control fs-6" id="exampleInputEmail1" placeholder='Email Address' required />
                </div>
                <div className="mb-3">
                    <input type="password" onBlur={handlePassword} className="form-control fs-6" id="exampleInputPassword1" placeholder='Password' required />
                </div>
                <div className="mb-3">
                    <input type="password" onBlur={handleConfirmPassword} className="form-control fs-6" id="exampleInputConfirmPassword1" placeholder='Confirm Password' required />
                </div>
                <p className='text-danger'>{error}</p>
                
                <button type="submit" className="btn btn-primary w-100 mx-auto fs-5"
                    onClick={(() => createUserWithEmailAndPassword(email, password)) &&
                        (async () => {
                            await sendEmailVerification();
                            alert('Sent email');
                        })}
                >Register</button>
            </form>



            <p className='text-center mt-3'>If you have already account ? <Link className='text-primary text-decoration-none' to='/login'>Please Login</Link> </p>
            <SignInWithSocial></SignInWithSocial>

        </div>
    );
};

export default Register;