import React from 'react';
import Typewriter from 'typewriter-effect';

const AdBanner1 = () => {
    return (
        <>
            <div class="position-relative overflow-hidden p-2 p-md-2 m-md-2 text-center bg-light">
                <div class="col-md-5 p-lg-1 mx-auto">
                    <h3>UPTO</h3>
                    <h1 class="display-4 fw-normal">10% OFF</h1>
                    <h2 className='text-center text-success'>
                        <span>
                            <Typewriter
                                options={{
                                    strings: ['Creative Discount', 'Your first purchase '],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </h2>
                    <h4 class="lead fw-normal">Offer ends after 5 days</h4>
                    <button class="btn btn-outline-primary">VIEW OFFER</button>
                </div>
            </div>
        </>
    );
};

export default AdBanner1;