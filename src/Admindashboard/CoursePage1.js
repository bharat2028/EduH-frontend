import React from 'react';
import './page1.css';
import logo1 from "../img/logo1.png";
import Footer from '../Admin/footer';
const CoursesPage1 = () => {
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
            <div className="course-page">
                <div className="course-content">
                    <h1 className="course-title">Week 1: Introduction to DALL-E</h1>
                    <div className="course-item day-section">
                        <h2 className="topic-title">Day 1: Overview</h2>
                        <p className="topic-content">Introduction to DALL-E and its capabilities. Learn the basics of how it works and its potential applications.</p>
                    </div>
                    <div className="course-item day-section">
                        <h2 className="topic-title">Day 2: Getting Started</h2>
                        <p className="topic-content">Setting up your DALL-E account, exploring the interface, and understanding the main features.</p>
                    </div>
                    <div className="course-item day-section">
                        <h2 className="topic-title">Day 3: Basic Techniques</h2>
                        <p className="topic-content">Introduction to basic techniques for generating images with text prompts. Practice with simple examples.</p>
                    </div>
                    <button className="nav-button" onClick={() => window.location.href = '/CoursesPage2'}>Next</button>
                </div>
            </div>
            <Footer/>
        </div>
        
    );
};

export default CoursesPage1;
