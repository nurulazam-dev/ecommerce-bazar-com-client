import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="container my-4 py-3">
                <div className="row">
                    <div className="col-md-8 mx-2">
                        <h2 className='text-center fw-bold text-primary'>About Us</h2>
                        <hr />
                        <p className="lead">
                            Ecommarce Bazar.com is a Online shopping website. It is the largest one-stop shopping destination in Bangladesh. Launched in 2022, the online store offers the widest range of products in categories ranging from electronics to household appliances, latest smart phones, Camera, Computing & accessories fashion, health equipment and makeup.
                        </p>
                        <p className="lead">Get discounts and exclusive deals on popular brands and genuine products. Buy latest mobiles on exclusive offers, get free gift on every purchase.</p>
                        <p className="lead">If you wanted more info about us , then contact with us</p>
                        <NavLink to='/contact' className="btn btn-outline-success my-4">Contact Us</NavLink>
                    </div>
                    <div className="col-md-3 d-flex mx-4">
                        <img src="https://media.istockphoto.com/vectors/about-us-flat-design-style-colorful-illustration-vector-id1086341762?k=20&m=1086341762&s=612x612&w=0&h=0IC9wexJFHfX_pPBFCgnrVC0--aSDg3XKlJjNJmY9E0=" alt="About Us" height='450px' width='500px' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;