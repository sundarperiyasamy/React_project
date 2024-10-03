import React from 'react'
import { Link } from 'react-router-dom'
// import { Outlet } from 'react-router-dom'
import  './admin.css'
const Adminpage = () => {
    return (
        <div className=' sidebar d-flex flex-column  p-5 vh-100 bg-dark text-light'>
            <ul className='nav nav-pills flex-column p-0 m-0'>
                <li className='nav-item p-3'>
                    <Link to="/admin/productlist" className='text-white text-decoration-none'>
                        <span className='fs-5'>All Products</span>
                    </Link>
                </li>
                
                <li className='nav-item p-3'>
                    <Link to="/admin/addproducts" className='text-white text-decoration-none'>
                        <span className='fs-5'>Add Products</span>
                    </Link>
                </li>
                <li className='nav-item p-3'>
                    <Link to="/admin/orders" className='text-white text-decoration-none'>
                        <span className='fs-5'>Orders</span>
                    </Link>
                </li>
            </ul>
           
        </div>
    )
}

export default Adminpage