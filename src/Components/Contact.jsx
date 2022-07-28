import React from 'react';
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
                        <form class="row g-3">
                            <div class="col-md-12">
                                <label for="inputName" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="inputName" placeholder='Your Full Name' />
                            </div>
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder='Email Address' />
                            </div>
                            <div class="col-md-6">
                                <label for="inputContact4" class="form-label">Contact Number</label>
                                <input type="number" class="form-control" id="inputContact" placeholder='Contact Number' />
                            </div>
                            <div class="col-12">
                            <label for="message" class="form-label">Your Message</label>
                            <textarea class="form-control" id="message" rows="4"  placeholder='Your Message/Comment'></textarea>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-outline-success">Send Message</button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;