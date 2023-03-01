import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateProduct = () => {

  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const navigate = useNavigate();

  const endPoint = 'http://apiproductos-backend-laravel.test/api/product';
  
  const store = async (e) => {
    e.preventDefault();
    await axios.post(endPoint, {
      description: description,
      price: price,
      stock: stock
    });
    navigate('/');
  }

  return (
    <div className="container-sm">

      <form action="post" onSubmit={store}>
        <div className="mb-2">
          <label className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            onChange={ (e) => setDescription(e.target.value) }
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            onChange={ (e) => setPrice(e.target.value) }
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Stock
          </label>
          <input
            type="text"
            className="form-control"
            onChange={ (e) => setStock(e.target.value) }
          />
        </div>

        <button type="submit" className='btn btn-success'>Save</button>
      </form>
    </div>
  );
}

export default CreateProduct;