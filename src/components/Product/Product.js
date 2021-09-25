import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    const {name,img, seller, price, stock, star} = props.product
    const element = <FontAwesomeIcon icon={faCartArrowDown} />
    return (
        <div className="product-inside-display">
        {/* product   */}
            <div>
                <img src={img} alt="" />
            </div>
            <div className="shopping-details">
                <p style={{color:"blue", fontWeight:"550", fontSize:"20px"}}>{name}</p>
                {/* titles */}
                <div className="details-inside-display">
                    <div>
                        <p><small>by : {seller}</small></p>
                        <h4>${price}</h4>
                        <p>only {stock} left in stock - order soon</p>
                        <button onClick={()=>props.handleAddToCart(props.product)} className="Add-to-cart-btn"type="submit">{element}Add to cart</button>
                    </div>
                    {/* specification */}
                    <div style={{marginRight:"5px"}}>
                        <ul>
                            <Rating
                            readonly
                            initialRating={star}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            
                            ></Rating>
                            <h2>Features</h2>
                            <small><li></li></small>
                            <small><li></li></small>
                            <small><li></li></small>
                            <small><li></li></small>
                            <small><li></li></small>
                        </ul>                         
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;