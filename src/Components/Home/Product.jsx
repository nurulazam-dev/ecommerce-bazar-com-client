import React from 'react';
import { NavLink } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import AdBanner1 from './AdBanner1';

const Product = () => {
    const [products] = useProducts();

    const cardItem = (item) => {
        return (
            <div className="col">
                <div className="card product-card my-4 p-4" key={item._id} style={{ width: '19rem' }}>
                    <img src={item.image} className="card-img-top" alt={item.phone_name} />
                    <div className="card-body">
                        <h4 className="card-title text-center">{item.phone_name}</h4>
                        <h5 className='text-center  text-primary'>{item.brand} </h5>
                        <h5 className='text-center'>Price: $ </h5>
                    </div>
                    <NavLink to={`/products/${item._id}`} className='btn btn-outline-primary rounded-lg fw-bold nav-link'>Details</NavLink>
                    {/* <div className="card-footer">
                    </div> */}
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="py-2">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Product</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="mx-2 px-2">
                {/* <div className="row row-cols-2 row-cols-md-4 g-4"> */}
                <div className="row">
                    {products.slice(0,20).map(cardItem)}
                </div>
            </div>
            <AdBanner1 />
            <div className="mx-2 px-2">
                {/* <div className="row row-cols-2 row-cols-md-4 g-4"> */}
                <div className="row">
                    {products.slice(21,40).map(cardItem)}
                </div>
            </div>
        </div>
    );
};

export default Product;