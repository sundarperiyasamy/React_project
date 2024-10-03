import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button'; // Assuming Bootstrap is properly configured

const AdminformData = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:4000/admin/login", formData);

            if (response.status === 200) {

                // redirect to the admin page
                navigate("/admin"); 
            } else {
                alert("Login failed. Please check your credentials."); 
            }
        } catch (error) {
            console.error("Error logging in:", error);
            alert("Failed to login. Please try again.");
        }
    };

    return (
        <div className="login-container">
            <div className="adduser">
                <h3 className='text-primary'>Admin Login</h3>
                <form onSubmit={handleSubmit} className="adduserform">
                    <div className="inputgroup">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            autoComplete='off'
                            placeholder='Enter your username'
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            autoComplete='off'
                            placeholder='Enter your password'
                        />

                        <Button type="submit" className='btn btn-primary mt-3'>Login</Button>
                    </div>
                    {/* <div className="login mt-3">
                        <p>Don't have an account? <Link to='/register'>Register</Link></p>
                    </div> */}
                </form>
            </div>
        </div>
    );
};

export default AdminformData;
