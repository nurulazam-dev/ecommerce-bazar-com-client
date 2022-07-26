import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';

const Navbar = () => {

    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    const navLinks = <>
        <li><NavLink to='/' className="nav-link fw-bold" aria-current="page">Home</NavLink></li>
        <li><NavLink to='/produces' className='rounded-lg fw-bold nav-link'>Produces</NavLink></li>
        <li><NavLink to='/about' className='rounded-lg fw-bold nav-link'>About</NavLink></li>
        <li><NavLink to='/contact' className='rounded-lg fw-bold nav-link'>Contact</NavLink></li>
        <li><NavLink to='/blogs' className='rounded-lg fw-bold nav-link'>Blogs</NavLink></li>
    </>

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold fs-4" href="home">Ecommarce Bazar.Com</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        {navLinks}
                    </ul>
                    <div className="buttons">
                        <Link className='text-decoration-none btn btn-outline-dark ms-2' to='/chart'>
                            <i className="fa fa-shopping-cart me-1"></i>Cart (0)</Link>

                        {
                            user ?
                                <button className='text-decoration-none btn btn-outline-dark ms-2' onClick={handleSignOut}>Sign out</button>
                                : (<Link className='text-decoration-none btn btn-outline-dark ms-2' to='/login'>
                            <i className="fa fa-user-plus me-1"></i>Login</Link>)
                        }
                        {/* <Link className='text-decoration-none btn btn-outline-dark ms-2' to='/register'>
                            <i className="fa fa-user-plus me-1"></i>Register</Link>
                        <Link className='text-decoration-none btn btn-outline-dark ms-2' to='/login'>
                            <i className="fa fa-sign-in me-1"></i>Login</Link> */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;