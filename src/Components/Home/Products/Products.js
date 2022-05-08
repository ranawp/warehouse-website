import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    })
    return (
        <div id='inventory' className='container'>
            <h1 className="text-center">Inventory</h1>
            <div className='row'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}

                    ></Product>)
                }

            </div>
        </div>
    );
};

export default Products;