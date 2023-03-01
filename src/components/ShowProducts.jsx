import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ShowProducts = () => {
  
    const endPoint = 'http://apiproductos-backend-laravel.test/api';
    const [products, setProducts] = useState([]);

    useEffect( () => {getAllProducts();}, []);

    const getAllProducts = async () => {
        const response = await axios.get(`${endPoint}/products`);
        setProducts(response.data);
    };

    const deleteProduct = async (id) => {
      await axios.delete(`${endPoint}/product/${id}`);
      getAllProducts();
    }

  return (
    <div className='container-sm'>
      <div className="d-grid gap-2">
        <Link
          to="/create"
          className="btn btn-success btn-lg mt-2 mb-2 text-white"
        >
          Create
        </Link>
      </div>

      <h2>Show products</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>
                <Link className="btn btn-primary" to={`/edit/${product.id}`}>Edit</Link>
                <button type="button" className="btn btn-danger" onClick={() => deleteProduct(product.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowProducts