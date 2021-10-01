import React from 'react';


const ReviewItem = (props) => {
    const {quantity,name, price, img, key, element} = props.product
    return (
        <div style={{marginLeft:"150px"}} className="main-container">
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
                            <h4>${price}</h4>
                            <p>Quantity {quantity}</p>
                            <button onClick={()=>props.handleRemove(key)} className="Add-to-cart-btn"type="submit">{element}Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;