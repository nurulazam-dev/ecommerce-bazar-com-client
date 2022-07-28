import React from 'react';
import { useParams } from 'react-router'
import DATA from '../Components/Home/Data'

const ProductDetail = () => {
    /* we need a product id, which is pass from the product page. */
    const proid = useParams();
    const proDetail = DATA.filter(x => x.id === proid.id)
    const product = proDetail[0];
    console.log(product);
    // console.log(DATA);

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
                        <button className="btn btn-outline-success">Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;