import React from 'react'
import './styles/login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Register = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        axios.post("http://localhost:4000/register", data)
            .then(result => {
                console.log(result);
                navigate("/login");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (

        <div>
            <div className="adduser">
                <h3 className='text-primary'>register</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="adduserform">
                    <div className="inputgroup">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            {...register('name', { required: 'Name is required' })}
                            autoComplete='off'
                            placeholder='Enter your name'
                        />
                        {errors.name && <p className="text-danger">{errors.name.message}</p>}
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            {...register('email', { required: 'Email is required' })}
                            autoComplete='off'
                            placeholder='Enter your email'
                        />
                        {errors.email && <p className="text-danger">{errors.email.message}</p>}

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            {...register('password', { required: 'Password is required' })}
                            autoComplete='off'
                            placeholder='Enter your password'
                        />
                        {errors.password && <p className="text-danger">{errors.password.message}</p>}

                        <button type="submit" className='btn btn-primary mt-3'>Register</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Register

