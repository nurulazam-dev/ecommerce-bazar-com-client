import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { delItem } from '../redux/actions/index';

const Cart = () => {
    const state = useSelector((state) => state?.addItem)
    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(delItem(item))
    }
    const cartItems = (cartItem) => {
        return (
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem?.id}>
                <div className="container">
                    <h2 className='text-center'>Cart</h2>
                    <hr />
                    <button onClick={() => handleClose(cartItem)} className="btn-close float-end" aria-label='Close'></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem?.image} alt={cartItem?.phone_name} height='200px' width='180px' />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem?.phone_name}</h3>
                            <h5>{cartItem?.brand}</h5>
                            <h5 className='lead fw-bold'>Price: ${cartItem?.price}</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container">
                    <div className="row">
                        <h3 className='text-center'>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }

    const button =()=>{
        return(
            <div className="container my-3 py-3">
                <div className="row">
                    <NavLink to='/checkout' className="btn btn-outline-success my-5 w-25 mx-auto">Proceed To Checkout</NavLink>
                </div>
            </div>
        )
    }
    return (
        <>
            {state?.length === 0 && emptyCart()}
            {state?.length !== 0 && state?.map(cartItems)}
            {state?.length !== 0 && button()}
        </>
    );
};

export default Cart;