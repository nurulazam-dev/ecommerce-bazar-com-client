import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import DATA from '../Components/Home/Data'

const ProductDetail = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart")
    /* we need a product id, which is pass from the product page. */
    const proid = useParams();
    const proDetail = DATA.filter(x => x.id === proid.id)
    const product = proDetail[0];
    console.log(product);
    // console.log(DATA);

    const handleCart = (product) => {
        if (cartBtn === "Add to Cart") {
            setCartBtn("Remove from Cart")
        }
        else {
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
                        <h2>{product?.phone_name}</h2>
                        <h4>{product?.brand}</h4>
                        <h5>Price: ${product?.price}</h5>
                        <p className='lead'>{product?.slug}</p>
                        <button onClick={() => handleCart(product)} className="btn btn-outline-success">{cartBtn}</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;