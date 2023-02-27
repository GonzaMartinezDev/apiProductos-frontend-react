import axios from 'axios';
import React, { useState, useEffect } from 'react'

const ShowProducts = () => {


    const endPoint = 'http://backend-laravel.test/api/products';
    const [products, setProducts] = useState([]);



    useEffect( () => {getProducts();}, []);

    const getProducts = async () => {
        const response = await axios.get(endPoint);
        setProducts(response.data);
    };


  return (
    <div>

<h1>Show products</h1>

    <h1>Show products</h1>
    <table className='table table-striped'> 
        <thead>
          <tr>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <button type="button" className="btn btn-primary">Edit</button>
                  <button type="button" className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
    </table>

    </div>
  )
}

export default ShowProducts