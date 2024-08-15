import React from 'react';
import './page1.css';
import logo1 from "../img/logo1.png";
import Footer from '../Admin/footer';
const CoursesPage3 = () => {
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
                    <button className="logout-btn" onClick={() => window.location.href = '/'}>Logout</button>
                </div>
            </nav>
            <div className="course-content">
            <h1 className="course-title">Week 3: Advanced Applications</h1>
            <div className="course-item">
                <h2 className="topic-title">Day 7: Integrations</h2>
                <p className="topic-content">How to integrate DALL-E with other tools and platforms for enhanced functionalities.</p>
            </div>
            <div className="course-item">
                <h2 className="topic-title">Day 8: Creative Projects</h2>
                <p className="topic-content">Ideas for creative projects using DALL-E, including marketing, art, and design.</p>
            </div>
            <div className="course-item">
                <h2 className="topic-title">Day 9: Final Review</h2>
                <p className="topic-content">Recap of everything learned, with tips and best practices for using DALL-E effectively.</p>
            </div>
            <button className="nav-button" onClick={() => window.location.href = '/Coursesdet'}>Finish</button>
        </div>
        <Footer/>
            </div>
    );
};

export default CoursesPage3;
