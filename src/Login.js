import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

function Login() {

   const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className='container mt-sm-4'>
        <center>
        <br/>
        <label>User ID </label> &nbsp;
        <input type='text' placeholder='Enter Username...' />
        <br/>
        <br/>
        <label>Password </label> &nbsp;
        <input  placeholder='Enter Password...' type={passwordShown ? "text" : "password"}
        {... register('Password',{ required: "This is required." })} />
         <i onClick={togglePasswordVisiblity}>{eye}</i>{" "}
        <br/>
        <br/>
       <button type="submit" onClick={handleSubmit(onSubmit)}>
        Login
      </button>
        <br/>
        <span>Don't have an account? </span> 
          <Link to='/Signup'>SignUp</Link>
        </center>
    </div>
  )
}

export default Login