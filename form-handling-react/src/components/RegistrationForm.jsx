// import React from "react";
import { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';




const RegistrationForm = () => {
    const [formData, setFormData] = useState({ username: '', email: '' , password: ''});
    
    const handleChange = (e) => {
        const {  name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));

    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    return (
        <div>
           <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username"  required onChange={handleChange}/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email"  required onChange={handleChange}/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password"  required onChange={handleChange}/>
                <button>Submit</button>

            </form>

        </div>

      );
};

export default RegistrationForm;