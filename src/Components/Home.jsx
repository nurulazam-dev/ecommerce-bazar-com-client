import React from 'react';
import Banner from '../Assets/Banner/Banner.jpg'

const Home = () => {
    return (
        <div className="hero">
            <div class="card bg-dark text-white border-0">
                <img src={Banner} class="card-img" alt="Background" height='500px' />
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                    <h5 class="card-title display-3 fw-bold mb-0 fs-1">Ecommarce Bazar.Com</h5>
                    <h5 class="card-title display-3 mb-0">NEW SEASON ARRIVALS</h5>
                    <p class="card-text lead fs-2">CHECK OUT ALL THE TRENDS.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;