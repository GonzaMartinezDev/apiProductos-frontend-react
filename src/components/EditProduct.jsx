import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = () => {

  const endPoint = 'http://apiproductos-backend-laravel.test/api';
  const {id} = useParams();
  const navigate = useNavigate();
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const store = async (e)=> {
    e.preventDefault();
    await axios.put(`${endPoint}/product/${id}`, {
      description: description,
      price: price,
      stock: stock
    });
    navigate('/')
  }

  useEffect(() => {
    const getProductById = async () => {
      const response = await axios.get(`${endPoint}/product/${id}`);
      setDescription(response.data.description);
      setPrice(response.data.price);
      setStock(response.data.stock);
    }
    getProductById();
  }, [])
  


  return (
    <div className="container-sm">
      
      Edit Product
      
      <form onSubmit={store}>
        <div className="mb-2">
          <label className="form-label">Description</label>
          <input
          value={description}
            type="text"
            className="form-control"
            onChange={ (e) => setDescription(e.target.value) }
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
          value={price}     
            type="text"
            className="form-control"
            onChange={ (e) => setPrice(e.target.value) }
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input
          value={stock}
            type="text"
            className="form-control"
            onChange={ (e) => setStock(e.target.value) }
          />
        </div>

        <button type="submit" className="btn btn-success">
          Save
        </button>
      </form>
    </div>
  );
}

export default EditProduct