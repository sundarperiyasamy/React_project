import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const AddProduct = () => {
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const { productId } = useParams();
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (productId) {
      setIsEdit(true);
      axios.get(`http://localhost:4000/product/get/${productId}`)
        .then(response => {
          const product = response.data;
          setValue('title', product.title);
          setValue('price', product.price);
          // You might want to show the current image or handle it appropriately
        })
        .catch(error => {
          console.error("There was an error fetching the product!", error);
        });
    }
  }, [productId, setValue]);
  
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('price', data.price);
      if (data.img && data.img[0]) {
        formData.append('img', data.img[0]); // Assuming 'img' is the file input field
      }
  
      const apiUrl = isEdit ? `http://localhost:4000/products/${productId}` : "http://localhost:4000/products";
      const apiMethod = isEdit ? 'put' : 'post';
  
      const response = await axios({
        method: apiMethod,
        url: apiUrl,
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      alert(`Product ${isEdit ? 'updated' : 'added'} successfully!`);
      navigate('/products');
    } catch (error) {
      console.error("There was an error saving the product!", error);
    }
  };
  
  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        <Col md={6}>
          <Card className="mt-5"style={{ width: '18rem' }}>
            <Card.Body>
              <div className="text-center">
                <Card.Title>{isEdit ? 'Edit Product' : 'Add Product'}</Card.Title>
              </div>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" placeholder="Enter product title" {...register('title', { required: true })} />
                </Form.Group>

                <Form.Group controlId="price">
                  <Form.Label>Price</Form.Label>
                  <Form.Control type="number" placeholder="Enter product price" {...register('price', { required: true })} />
                </Form.Group>

                <Form.Group controlId="img">
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="file" {...register('img', { required: !isEdit })} />
                </Form.Group>

                <div className="text-center mt-3">
                  <Button variant="primary" type="submit">
                    {isEdit ? 'Update' : 'Add'}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProduct;
