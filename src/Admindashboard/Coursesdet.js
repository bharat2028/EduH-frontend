import React from 'react';
import './styles.css'; // Ensure you include the correct path
import logo1 from "../img/logo1.png"; 
// import { useNavigate } from 'react-router-dom';
import Footer from '../Admin/footer';

const Coursesdet = () => {
    // const Navigate = useNavigate();
    // const next = () => {
    //     Navigate('/');
    // }
    return (
        <div>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo1} alt="Logo" style={{ height: '100px' }} />
                    <h2 className="Ed">EduH</h2>
                </div>
                <div className="nav-link">
                    <a href="/AdminDashboard">Home</a>
                    <a href="/CoursesPage">Courses</a>
                    <a href="/StudentDetails">Student Details</a>
                    <a href="/InstitutionDetails">Institutions</a>
                     <button className="logout-btn" >Logout</button>
                </div>
            </nav>
            <div className="course-details">
                <h1 className="course-title">DALL-E : Art Generation Insider Tips and Tricks</h1>
                <div className="course-content">
                    <div className="course-item">
                        <span>Duration:</span>
                        <p className="font">3 Weeks</p>
                        <div className="tabs">
                            <a href="/CoursesPage1" className="tab-link">Week 1</a>
                            <a href="/CoursesPage2" className="tab-link">Week 2</a>
                            <a href="/CoursesPage3" className="tab-link">Week 3</a>
                        </div>
                    </div>
                    <div className="course-item">
                        <span>Instructor:</span>
                        <p className="font">Aditya Varma</p>
                    </div>
                    <div className="course-item">
                        <span>Description:</span>
                        <p className="font">OpenAI's AI art generator remains one of the best known, and it allows anyone to generate images of practically anything by writing a text description.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Coursesdet;
