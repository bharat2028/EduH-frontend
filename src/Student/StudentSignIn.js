import React from 'react';
import './StudentSignIn.css'; // Ensure this CSS file is updated
import { useNavigate } from 'react-router-dom';
const StudentSignIn = () => {
    const Navigate=useNavigate();
    const next = () =>{
        Navigate('/AboutUs')
    }
    return (
        <div className="body3">        
        <div className="signin-container">
            <div className="signin-box">
                <h2>Student Sign In</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit" className="signin-btn" onClick={next}>Sign In</button>
                </form>
                <div className="additional-info">
                    <p>Don't have an account? <a href="/StudentSignUp">Create one here</a>.</p>
                </div>
            </div>
        </div>
        </div>

    );
};

export default StudentSignIn;
