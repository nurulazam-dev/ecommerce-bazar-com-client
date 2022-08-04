import React from 'react';
import Typewriter from 'typewriter-effect';
import Loading from './Shared/Loading';

const Blogs = () => {
    return (
        <div className='container my-2 py-2'>
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Blogs</h1>
                    <hr />
                    <Loading />
                    <h2 className='text-center text-primary'>
                        <span>
                            <Typewriter
                                options={{
                                    strings: ['Please wait for our new Blog . . .', 'New Blog is coming soon . . .'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </h2>
                </div>
            </div>

        </div>
    );
};

export default Blogs;