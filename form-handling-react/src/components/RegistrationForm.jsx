
import { useState } from 'react';





const RegistrationForm = () => {
   
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
   

    const handleSubmit = (e) => {
        e.preventDefault();
    const errors=validateForm();
    setErrors(errors);
    
      // alert("form submitted successfully!")
    };
    
    const validateForm = () => {

      const errors ={};
       
          const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
          
          if (!username) {
           errors.username = "Username is required!";
          
          }
          
          if (!email) {
             errors.email = "Email is required!";
            } else if (!regex.test(email)) {
           errors.email = "This is not a valid email format!";
            }
          
            if (!password) {
            errors.password = "Password is required";
          } else if (password.length < 4) {
          errors.password = "Password must be more than 4 characters";
            } else if (password.length > 10) {
             errors.password = "Password cannot exceed more than 10 characters";
            }
            return errors;
          };
  

    return (
        <div>
           <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={username}   onChange={(e) => setName(e.target.value)}/>
                </div>
                <p>{ errors.username }</p>
                <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email}   onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <p>{errors.email}</p>

                <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                 <p>{errors.password}</p>
                
                <button>Submit</button>

            

            </form>

        </div>

      );
};

export default RegistrationForm;