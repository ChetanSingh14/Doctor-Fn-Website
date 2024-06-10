import axios from 'axios';
import React, { useState } from 'react';

export default function SignUp() {
    const [userData, setUserData] = useState({ username: "", password: "", email: "", phone: "" });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });

        const { name, value } = e.target;

        if (name === "username") {
            if (value.length < 3 || value.length > 20) {
                setErrors(prevErrors => ({ ...prevErrors, [name]: "Username must be at least 3 characters and not exceed 20 characters" }));
            } else {
                setErrors(prevErrors => ({ ...prevErrors, [name]: "" }));
            }
        } else if (name === "password") {
            if (value.length < 6 || value.length > 14) {
                setErrors(prevErrors => ({ ...prevErrors, [name]: "Password must be at least 6 characters and not exceed 14 characters" }));
            } else {
                setErrors(prevErrors => ({ ...prevErrors, [name]: "" }));
            }
        } else if (name === "email") {
            const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!regex.test(value)) {
                setErrors(prevErrors => ({ ...prevErrors, [name]: "Please enter a valid email address" }));
            } else {
                setErrors(prevErrors => ({ ...prevErrors, [name]: "" }));
            }
        } else if (name === "phone") {
            const regex = /^\d{10}$/;
            if (!regex.test(value)) {
                setErrors(prevErrors => ({ ...prevErrors, [name]: "Please enter a valid phone number" }));
            } else {
                setErrors(prevErrors => ({ ...prevErrors, [name]: "" }));
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if there are any validation errors
        if (Object.values(errors).some(error => error !== "")) {
            alert("Please fix the validation errors before submitting.");
            return;
        }

        try {
            const res = await axios.post('http://localhost:8000/', userData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (res.data.status === "OK") {
                alert("Success");
                setUserData({ username: "", password: "", email: "", phone: "" });
                setErrors({});
            } else {
                setErrors(res.data.errors);
            }
        } catch (e) {
            if (e.response && e.response.data && e.response.data.errors) {
                setErrors(e.response.data.errors);
            } else if (e.response && e.response.data && e.response.data.message) {
                setErrors({ general: e.response.data.message });
            } else {
                setErrors({ general: e.message });
            }
        }
    };

    return (
        <div className='border-2 w-1/2 m-12 text-black'>
            <form onSubmit={handleSubmit} className='m-6'>
                {errors.general && <div className="text-red-500">{errors.general}</div>}
                <div>
                    <input
                        className='border-2'
                        placeholder='name'
                        type="text"
                        name="username"
                        value={userData.username}
                        onChange={handleChange}
                    />
                    {errors.username && <div className="text-red-500">{errors.username}</div>}
                </div>
                <br />
                <div>
                    <input
                        className='border-2'
                        placeholder='pass'
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <div className="text-red-500">{errors.password}</div>}
                </div>
                <br />
                <div>
                    <input
                        className='border-2'
                        placeholder='email'
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <div className="text-red-500">{errors.email}</div>}
                </div>
                <br />
                <div>
                    <input
                        className='border-2'
                        placeholder='phone'
                        type="text"
                        name="phone"
                        value={userData.phone}
                        onChange={handleChange}
                    />
                    {errors.phone && <div className="text-red-500">{errors.phone}</div>}
                </div>
                <br />
                <button className='border-2' type='submit'>SignUp</button>
            </form>
        </div>
    );
}
