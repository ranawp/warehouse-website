import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://secret-castle-07996.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setProducts(data))
    })
    return (
        <div id='inventory' className='container'>
            <h1 className="text-center mt-5 mb-4" style={{ color: 'green' }}>Inventory</h1>
            <div className='row'>
                {
                    products.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}

                    ></Product>)
                }

            </div>
            <Link className='mt-3 mx-auto text-decoration-none d-flex justify-content-center button-color' to='/manageInventory'>Manage All inventory</Link>
        </div>
    );
};

export default Products;