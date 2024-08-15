import React, { useState } from 'react';
import './AdminLogin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AdminLogin = () => {
  const Navigate=useNavigate();
  const next = () =>{
      Navigate('/AdminDashboard');
  }
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
      });
      const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = loginData;
        if (email && password) {
          try {
            const response = await axios.get('http://localhost:8080/api/auth');
            const userExist = response.data.some(
              (data) => data.email === email && data.password === password
            );
            if (userExist) {
              Navigate("/AdminDashboard")
            } else {
              alert('User Not Found');
            }
          } catch (error) {
            console.error('Error fetching users', error);
            alert('Error logging in');
          }
        } else {
          alert('Please fill all the fields');
        }
      };
    
    return (
        <div className="body5">
        <div className="login-container">
            <div className="login-box">
                <h1 className='b'>Admin Login</h1>
                <form>
                    <div className="input-group">
                        <label className="bh" >Email</label>
                        <input type="text" id="username" name="email" required onChange={handleLoginChange}/>
                    </div>
                    <div className="input-group">
                        <label className="bh">Password</label>
                        <input type="password" id="password" name="password" required onChange={handleLoginChange}/>
                    </div>
                    <button type="submit" className="login-btn" onClick={handleLoginSubmit}>Login</button>
                    <p className='b'>Don't have an account? <a href="/AdminSignup">Create one here</a>.</p>
                </form>
            </div>
        </div>
        </div>
    );
};

export default AdminLogin;
