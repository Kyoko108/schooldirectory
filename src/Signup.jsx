
//import {FaToggleOn } from 'react-icons/fa';
//import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'react-router-dom';


function Signup() {
  return (
    <div className='container  mt-sm-4'>
        <center>
        <br/>
        <label>User ID</label>
        <input type='text' placeholder='Enter Username...'/>
        <br/>
        <br/>
        <label>Password</label>
         {/* <View>
          <TextInput placeholder="Enter your password " autocorrect={false} secureTextEntry={true} textContentType = 'password'/>
          <FaToggleOn style = {{
            position : 'absolute',
            right : 20 ,
          }} />
         </View> */}
        <input type='password' placeholder='Enter Password...'/>
        <br/>
        <br/>
        <span>Type of account: </span>
        <input type='radio' name='account' id='User' value='User' />
        <label htmlFor='User'><span> User  </span></label>
        <input type='radio' name='account' id='Admin' value='Admin'/>
        <label htmlFor='Admin'><span> Admin  </span></label>
        <br/>
        <br/>
        <button type='submit'>Signup</button>
        <br/>
        <span>Already have an account? </span> 
          <Link to='/'>LogIn</Link>
        </center>
    </div>
  )
}

export default Signup;