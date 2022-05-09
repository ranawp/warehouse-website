import React from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../Hooks/useInventory';

const ManageInventory = () => {
    const [inventory, setInventory] = useInventory();
    const handleDelete = id => {
        const proceed = window.confirm("Are you sure")
        if (proceed) {
            const url = `https://secret-castle-07996.herokuapp.com/inventory/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = inventory.filter(inventory => inventory._id !== id)
                    setInventory(remaining);

                })


        }
    }

    return (
        <div className='w-50 mx-auto'>
            <h1 className='mt-5 text-center text-success'>Manage inventory </h1>
            <h4 className=' mt-3 text-center text-success'>Total Inventory:{inventory.length}</h4>



            {
                inventory.map(inventory => <div key={inventory._id}>

                    <div className='shadow px-3 py-3 mt-3 d-flex justify-content-between'>


                        <div><h6>{inventory.name}</h6>
                            <p>Supplier Name: {inventory.supplierName}</p>
                        </div>


                        <div>
                            <svg onClick={() => handleDelete(inventory._id)} xmlns="http://www.w3.org/2000/svg" style={{ width: '30px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </div>



                    </div>

                </div>)
            }
            <Link className='mt-4 mx-auto text-decoration-none d-flex justify-content-center button-color' to='/addInventory'>Add New Inventory</Link>
        </div>
    );
};

export default ManageInventory;