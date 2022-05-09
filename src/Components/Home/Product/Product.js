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
            <div className="card">

                <img src={img} className="card-img-top img-fluid image" alt="..." />
                <h5 className="card-title">{name}</h5>
                <div className="card-body">
                    <p>Description:{description}</p>
                    <p>Quantity:{quantity}</p>

                    <p>Supplier-Name: {supplierName}</p>
                    <p>Price:{Price}</p>
                    <button onClick={() => inventoryDetail(_id)

                    } className="btn button-color">Update</button>
                </div>
            </div>
        </div>
    );
};

export default Product;