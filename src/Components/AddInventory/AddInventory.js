import React from 'react';
import { useForm } from "react-hook-form";


const AddInventory = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `https://secret-castle-07996.herokuapp.com/inventory/`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    };
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-success text-center mt-5'>Add Your inventory item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Product Name' className='mb-2' {...register("name", { required: true, maxLength: 20 })} />
                <input placeholder='Supplier Name' className='mb-2' {...register("supplierName", { required: true, maxLength: 20 })} />
                <input placeholder='Product Code' className='mb-2' {...register("Product code")} />
                <input placeholder='Description' className='mb-2' {...register("description")} />
                <input placeholder='Price' className='mb-2' type="number"  {...register("Price")} />
                <input placeholder='Quantity' className='mb-2' {...register("quantity")} />
                <input placeholder='Photo url' type='text' className='mb-2' {...register("img")} />

                <input className='button-color mx-auto' type="submit" value="Add New Inventory" />
            </form>

        </div>
    );
};

export default AddInventory;