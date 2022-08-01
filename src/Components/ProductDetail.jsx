import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import {useDispatch} from 'react-redux';
import {addItem, delItem} from '../redux/actions/index';
import useProducts from '../hooks/useProducts';

const ProductDetail = () => {
    const [products] = useProducts();

    const [cartBtn, setCartBtn] = useState("Add to Cart")
    /* we need a product id, which is pass from the product page. */
    const proid = useParams();
    const proDetail = products.filter(x => x._id === proid._id)
    const product = proDetail[0];
    console.log(products);
    console.log(product);
    // console.log(DATA);

    // we need to store useDispatch in a variable
    const dispatch =useDispatch();

    const handleCart = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(product))
            setCartBtn("Remove from Cart")
        }
        else {
            dispatch(delItem(product))
            setCartBtn("Add to Cart")
        }
    }
    return (
        <>
            <div className="container my-3 py-2">
                <div className="row">
                    <h2 className='text-center'>{product?.phone_name} Detail</h2>
                    <hr />
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                        <img src={product?.image} alt={product?.phone_name} height='400px' />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className='my-3'>{product?.phone_name}</h2>
                        <h4 className='my-3'><span className='fw-bold'>Brand: </span>{product?.brand}</h4>
                        <h4 className='my-3'><span className='fw-bold'>Price: </span>${product?.price}</h4>
                        <p className='lead my-1'><span className='fw-bold'>Product ID: </span>{product?._id}</p>
                        <p className='lead my-1'><span className='fw-bold'>Chip Set: </span>{product?.chipSet}</p>
                        <p className='lead my-1'><span className='fw-bold'>Release Date: </span>{product?.releaseDate}</p>
                        <p className='lead my-1'><span className='fw-bold'>Slug: </span>{product?.slug}</p>
                        <p className='lead my-1'><span className='fw-bold'>Storage: </span>{product?.storage}</p>
                        <p className='lead my-1'><span className='fw-bold'>Memory: </span>{product?.memory}</p>
                        <p className='lead my-1'><span className='fw-bold'>Display Size: </span>{product?.displaySize}</p>
                        <button onClick={() => handleCart(product)} className="btn btn-outline-success my-4 fw-bold">{cartBtn}</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;