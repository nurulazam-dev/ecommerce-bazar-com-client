import React from 'react';
import { Link } from 'react-router-dom';
import ContactUs from '../Assets/Contact Us/ContactUs.jpg'

const Contact = () => {
    return (
        <div>
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className='text-center'>Contact Us</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 d-flex justify-contrnt-center">
                        <img src={ContactUs} alt="Contact Us" height='420px' width='500px' />
                    </div>
                    <div className="col-md-7 fs-5">
                        <form className="row g-3">
                            <div className="col-md-12">
                                <label for="inputName" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="inputName" placeholder='Your Full Name' />
                            </div>
                            <div className="col-md-6">
                                <label for="inputEmail4" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder='Email Address' />
                            </div>
                            <div className="col-md-6">
                                <label for="inputContact4" className="form-label">Contact Number</label>
                                <input type="number" className="form-control" id="inputContact" placeholder='Contact Number' />
                            </div>
                            <div className="col-12">
                            <label for="message" className="form-label">Your Message</label>
                            <textarea className="form-control" id="message" rows="4"  placeholder='Your Message/Comment'></textarea>
                            </div>
                            <div className="col-12">
                                <Link to='/contact' className="btn btn-outline-success">Send Message</Link>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;