import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer>
            <div className="container-fluid">

                <div className="row  row-no-gutters">
                    <div className="col-xs-12 col-sm-6 col-md-3 fs-5" >
                        <ul>
                            <li className="col-heading">CONTACT US</li>
                            <li>
                                <i className="fa fa-phone" aria-hidden="true"></i><a href="tel:99-999-999-9999">+8801888-888888</a>
                            </li>
                            <li>
                                <i className="fa fa-mobile" aria-hidden="true"></i><a href="sms:+8801888888888">SMS Message</a>
                            </li>
                            <li>
                                <i className="fa fa-map-marker" aria-hidden="true"></i><a href="/home">Chittagong, Bangladesh.</a>
                            </li>
                            <li>
                                <i className="fa fa-envelope-square" aria-hidden="true"></i><a href="mailto:ecommerce@bazar.com">ecommerce@bazar.com</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-3 fs-5" >
                        <ul>
                            <li className="col-heading">FOLLOW UP</li>
                            <li><a href="/home">Facebook</a></li>
                            <li><a href="/home">Instagram</a></li>
                            <li><a href="/home">Twitter</a></li>
                            <li><a href="/home">LinkedIn</a></li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 fs-5" >
                        <ul>
                            <li className="col-heading">RESOURCES</li>
                            <li><a href="/home">Blog</a></li>
                            <li><a href="/home">eBooks</a></li>
                            <li><a href="/home">Comparison Guide</a></li>
                            <li><a href="/home">Website Grader</a></li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 fs-5" >
                        <ul>
                            <li className="col-heading">GET HELP</li>
                            <li><a href="/home">Help Center</a></li>
                            <li><a href="/home">Contact Us</a></li>
                            <li><a href="/home">Terms & Conditions</a></li>
                            <li><a href="/home">Privacy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row row-no-gutters" id="bottom-footer" >
                    <div className="col-xs-12 col-md-12 text-center" >
                        <p className='fs-5'>Copyright © {year} || All Rights Reserved by Ecommerce Bazar.Com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;