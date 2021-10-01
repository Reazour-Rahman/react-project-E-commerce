import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './OrderReview.css'

const OrderReview = () => {
    const [products] = useProducts()
    const [cart, setCart] = useCart(products)
//remove cart
    const handleRemove =(key) =>{
        console.log(key)
        const newCart = cart.filter(product => product.key !== key)
        setCart(newCart);
        deleteFromDb(key)
    }
    return (
        <div className="cart-information">
            <div>
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewItem>)
                }
            </div>
            </div>
            <div className="">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    )
};

export default OrderReview;