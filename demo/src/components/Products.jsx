import React from 'react';
import productdata from '../datas/productdata.json';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../redux/actiontypes';
import { useAuth } from './Auth_Context'; // Assuming AuthContext is in the parent directory
import { Navigate, useNavigate } from 'react-router-dom';

const Products = () => {
    const { authenticated, logout } = useAuth(); // Get logout function
    const dispatch = useDispatch();
    const cartitems = useSelector(state => state.cart.cartitems);
    const navigate = useNavigate(); // Define navigate

    if (!authenticated) {
        return <Navigate to="/login" />;
    }

    const handleaddtocart = (item) => {
        const itemsincart = cartitems.some(cartitem => cartitem.id === item.id);
        if (itemsincart) {
            // alert('Item is already added in the cart');
        } else {
            dispatch(addtocart(item));
            // alert('Item added to cart');
        }
    };

    const cart = productdata.map((data) => (
        <div key={data.id} className='col-sm-12 col-md-6 col-lg-3 mb-4'>
            <Card key={data.id} style={{ width: '100%' }}>
                <div className='text-center'>
                    <Card.Img variant="top" src={data.Img} className='p-3' style={{ width: '100px', height: '130px' }} />
                </div>
                <Card.Body>
                    <Card.Title className='text-center'>{data.Title}</Card.Title>
                    <Card.Text className='text-center'>
                        {data.Price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='text-center'>
                    <Button variant="primary" onClick={() => handleaddtocart(data)}>Add to Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ));

    return (
        <div className="container">
            <div className="row mx-auto">
                <h2 className='text-center p-3 text-uppercase'>Gym Products</h2>
                <div className='d-flex justify-content-between mb-3'>
                    <Button variant='primary' onClick={() => navigate('/add-product')}>Add Product</Button>
                </div>
                <div className='row'>
                    {cart}
                </div>
            </div>
        </div>
    );
};

export default Products;
