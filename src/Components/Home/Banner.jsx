import React from 'react';
import BannerImg from '../../Assets/Banner/Banner.jpg';

const Banner = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img src={BannerImg} className="card-img" alt="Background" height='500px' />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                    <h5 className="card-title display-3 fw-bold mb-0 fs-1">Ecommarce Bazar.Com</h5>
                    <h5 className="card-title display-3 mb-0">NEW SEASON ARRIVALS</h5>
                    <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;