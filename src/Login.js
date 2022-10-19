import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='container mt-sm-4'>
        <center>
        <br/>
        <label>User ID </label>
        <input type='text' placeholder='Enter Username...' />
        <br/>
        <br/>
        <label>Password </label>
        <input type='password' placeholder='Enter Password...' />
        <br/>
        <br/>
        <button type='submit'>Login</button>
        <br/>
        <span>Don't have an account? </span> 
          <Link to='/Signup'>SignUp</Link>
        </center>
    </div>
  )
}

export default Login