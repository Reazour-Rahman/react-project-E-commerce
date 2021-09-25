import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

import './Shop.css'

const Shop = () => {
    const [products , setProducts] = useState([]);
    const [cart , setCart] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setSearch(data)
            })
    },[])
    // local storage 
    useEffect( () =>{
        if (products.length) {
            const savedCart = getStoredCart()
            const storageCard = []
            for (const key in savedCart) {
            const addProduct = products.find(product => product.key === key)
            // console.log(key, addProduct)
            storageCard.push(addProduct)
        }
        setCart(storageCard)
        }
    },[products])

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key)
    }

    // search 
    const [search , setSearch] =  useState([])

    const handleSearch = (event) => {
        const gotSearch = event.target.value;
        const matchedResult = products.filter(product => product.name.toLowerCase().includes(gotSearch.toLowerCase()))
        setSearch(matchedResult)
    }
    return (
        <div>
            <div className="search-area">
                <input onChange={handleSearch} type="search" placeholder="Search product" name="" id="" />
                <button  style={{padding:"3px"}} type="submit">Search</button>
            </div>

           <main className="main-container">
                {/* product   */}
                <div className="shopping">
                {
                    /* used here search for search implement */
                search.map(product => <Product product={product} key={product.key} handleAddToCart={handleAddToCart}></Product>)
                } 
                
                </div>

                {/* cart */}
                <div className="add-to-cart">
                    <Cart cart={cart}></Cart>
                </div>
           </main>
        </div>
    );
};

export default Shop;