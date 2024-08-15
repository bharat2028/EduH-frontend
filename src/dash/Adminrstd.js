import React from 'react';
import './Admin.css';
import logo1 from "../img/logo1.png";
import { useNavigate } from 'react-router-dom';

const Admin = () => {

    const Navigate=useNavigate();
    const next = () =>{
        Navigate('/AdminLogin')
    
    }
    const next1 = () =>{
        Navigate('/StudentSignIn')
    }
    
    return (
        <div className="body1">
        <div className="container">
                <img src={logo1} alt="Logo" style={{ height: '200px' ,width:'200px'}} />
            <header className="heade">
                <h1 className="heading">EduH</h1>
                <p className="slogan">Live to Learn</p>
                <p className="info">
                    Welcome to Eduh! We provide top-notch educational resources and tools to help you excel in your learning journey. Whether you're an admin or a student, we're here to support your educational needs with ease and efficiency.
                </p>
            </header>
            <div className="cen">
                <div className="top">
                    <button className="Adm" onClick={next}>Admin</button>
                    <button className="Adm" onClick={next1}>Student</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Admin;
