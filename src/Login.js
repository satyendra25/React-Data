import React, { useState } from 'react';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log(email);
    }
  
    return (
        <>       
            <div className='auth-container'>
                <h2>Login Form </h2>
                <form className='login-form' onSubmit={handleSubmit} >
                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='bebaghel@gmail.com' name='email' />

                    <label htmlFor="password">Password</label>
                    <input type="password" value={pass} onChange={(e) => setPassword(e.target.value)} placeholder='*********' name='password' />
                    <button className='btn' type='submit'>submit</button>
                </form>
                <button className='link-btn' onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
            </div>
        </>
    )
}

