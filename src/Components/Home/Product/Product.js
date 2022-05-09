import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'
const Product = ({ product }) => {
    const { _id, name, quantity, description, supplierName, img, Price } = product;
    const navigate = useNavigate();

    const inventoryDetail = id => {
        navigate(`/inventory/${id}`)
    }


    return (
        <div className='g-2 col-sm-12 col-md-6 col-lg-4 '>
            <div style={{ width: '15rem' }} className="card p-3 ">

                <img src={img} className="card-img-top image" alt="..." style={{ width: '12rem' }} />
                <h5 className="card-title" style={{ color: 'green' }}>{name}</h5>
                <div className="card-body">
                    <p> <span style={{ color: 'green' }}>Description:</span> {description}</p>
                    <p><span style={{ color: 'green' }}> Quantity:</span>{quantity}</p>

                    <p><span style={{ color: 'green' }}>Supplier-Name: </span>{supplierName}</p>
                    <p><span style={{ color: 'green' }}>Price: </span> {Price}</p>
                    <button onClick={() => inventoryDetail(_id)

                    } className="btn button-color">Update</button>
                </div>
            </div>
        </div>
    );
};

export default Product;