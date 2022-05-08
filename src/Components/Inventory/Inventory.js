import React from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { inventoryId } = useParams()
    return (
        <div>
            <h2>Inventory page:{inventoryId}</h2>
        </div>
    );
};

export default Inventory;