
import { useState } from 'react';




const RegistrationForm = () => {
   
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
       
    };
    return (
        <div>
           <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={username}  required onChange={(e) => setName(e.target.value)}/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email}  required onChange={(e) => setEmail(e.target.value)}/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} required onChange={(e) => setPassword(e.target.value)}/>
                <button>Submit</button>

            </form>

        </div>

      );
};

export default RegistrationForm;