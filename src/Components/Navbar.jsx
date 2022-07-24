import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
            <div className="container">
                <a className="navbar-brand fw-bold fs-4" href="home">Ecommarce Bazar.Com</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="products">Produces</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact">Contact</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="down" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="action">Action</a></li>
                                <li><a className="dropdown-item" href="ac">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="here">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <div className="buttons">
                        <a href="chart" className="btn btn-outline-dark ms-2">
                            <i className="fa fa-shopping-cart me-1"></i>Cart (0)
                        </a>
                        <a href="register" className="btn btn-outline-dark ms-2">
                            <i className="fa fa-user-plus me-1"></i>Register
                        </a>
                        <a href="login" className="btn btn-outline-dark ms-2">
                            <i className="fa fa-sign-in me-1"></i>Login
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;