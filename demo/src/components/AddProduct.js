// import React, { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// const AddProduct = () => {
//   const { register, handleSubmit, setValue } = useForm();
//   const navigate = useNavigate();
//   const { productId } = useParams();
//   const [isEdit, setIsEdit] = useState(false);

//   useEffect(() => {
//     if (productId) {
//       setIsEdit(true);
//       axios.get(`http://localhost:4000/product/get/${productId}`)
//         .then(response => {
//           const product = response.data;
//           setValue('title', product.title);
//           setValue('price', product.price);
//           // You might want to show the current image or handle it appropriately
//         })
//         .catch(error => {
//           console.error("There was an error fetching the product!", error);
//         });
//     }
//   }, [productId, setValue]);
  
//   const onSubmit = async (data) => {
//     try {
//       const formData = new FormData();
//       formData.append('title', data.title);
//       formData.append('price', data.price);
//       if (data.img && data.img[0]) {
//         formData.append('img', data.img[0]); // Assuming 'img' is the file input field
//       }
  
//       const apiUrl = isEdit ? `http://localhost:4000/products/${productId}` : "http://localhost:4000/products";
//       const apiMethod = isEdit ? 'put' : 'post';
  
//       const response = await axios({
//         method: apiMethod,
//         url: apiUrl,
//         data: formData,
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
  
//       alert(`Product ${isEdit ? 'updated' : 'added'} successfully!`);
//       navigate('/products');
//     } catch (error) {
//       console.error("There was an error saving the product!", error);
//     }
//   };
  
//   return (
//     <div className="container">
//       <h2 className='text-center p-3'>{isEdit ? 'Edit Product' : 'Add Product'}</h2>
//       <Form onSubmit={handleSubmit(onSubmit)}>
//         <Form.Group controlId="title">
//           <Form.Label>Title</Form.Label>
//           <Form.Control type="text" placeholder="Enter product title" {...register('title', { required: true })} />
//         </Form.Group>

//         <Form.Group controlId="price">
//           <Form.Label>Price</Form.Label>
//           <Form.Control type="number" placeholder="Enter product price" {...register('price', { required: true })} />
//         </Form.Group>

//         <Form.Group controlId="img">
//           <Form.Label>Image</Form.Label>
//           <Form.Control type="file" {...register('img', { required: !isEdit })} />
//         </Form.Group>

//         <Button variant="primary" type="submit" className='mt-3'>
//           {isEdit ? 'Update' : 'Add'}
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default AddProduct;
