import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const Orders = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/product/getorders');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h1 className="my-4 text-center">Order Items</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Image</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product._id}>
              <td>{product.Title}</td>
              <td>${product.Price}</td>
              {product.Img ? (
                <img
                  src={`http://localhost:4000/${product.Img}`}
                  alt="Uploaded"
                  className="img-thumbnail"
                  style={{ width: '80px', height: '80px', borderRadius: '50%' }}
                />
              ) : (
                'No Image'
              )}
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Orders;
