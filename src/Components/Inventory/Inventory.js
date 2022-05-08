import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Inventory = () => {
    const { inventoryId } = useParams()
    return (
        <div>
            <h2>Inventory page:{inventoryId}</h2>
            {/* <Link to='/checkout'>
                <button className='btn btn-primary'> proceed checkout</button>
            </Link> */}
        </div>
    );
};

export default Inventory;