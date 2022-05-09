import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Inventory = () => {
    const { inventoryId } = useParams()
    const [inventory, setInventory] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [])

    return (
        <div>
            <h2>Inventory Name:{inventory.name}</h2>
            <div class="card" style={{ width: '18rem' }}>
                <img src={inventory.img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{inventory.name}</h5>
                    <p class="card-text">Description:{inventory.description}</p>
                    <p>Quantity:{inventory.quantity}</p>
                    <p>Supplier Name: {inventory.supplierName}</p>
                    <p>Your Product id is: {inventory._id}</p>
                    <a href="#" class="btn btn-primary">Deliverd</a>
                </div>
            </div>
            {/* <Link to='/checkout'>
                <button className='btn btn-primary'> proceed checkout</button>
            </Link> */}
        </div>
    );
};

export default Inventory;