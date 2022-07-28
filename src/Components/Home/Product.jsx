import React from 'react';
import { NavLink } from 'react-router-dom';
import DATA from './Data'

const Product = () => {
    const cardItem = (item) => {
        return (
            <div class="col">
                <div class="card my-4 p-4" style={{ width: '18rem' }}>
                    <img src={item.image} class="card-img-top" alt={item.phone_name} />
                    <div class="card-body">
                        <h4 class="card-title text-center">{item.phone_name}</h4>
                        <h5 className='text-center  text-primary'>{item.brand} </h5>
                        <h5 className='text-center'>Price: $ </h5>
                        <p className='mb-0'>{item.slug} </p>
                    </div>
                    <div class="card-footer">
                        <NavLink to={`/products/${item.id}`} className='btn btn-outline-primary rounded-lg fw-bold nav-link'>Buy Now</NavLink>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="container py-2">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Product</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                {/* <div className="row row-cols-2 row-cols-md-4 g-4"> */}
                <div className="row">
                    {DATA.map(cardItem)}
                </div>
            </div>
        </div>
    );
};

export default Product;