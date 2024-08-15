import React, { useEffect, useState } from 'react';
import './My.css';
import { useNavigate } from 'react-router-dom';
import logo from "../img/logo1.png";
import Footer from './footer';

const Coursesstd = () => {
    const [courses, setCourses] = useState([]);
    const imageBasePath = '../img/'; // Update the base path according to your setup

    useEffect(() => {
        fetch('http://localhost:8080/api/courses')
            .then(response => response.json())
            .then(data => setCourses(data))
            .catch(error => console.error('Error fetching courses:', error));
    }, []);

    const navigate = useNavigate();
    const next = () => {
        navigate('/');
    };

    return (
        <div className="asb">
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="Logo" style={{ height: '100px' }} />
                    <h2 className="Ed">EduH</h2>
                </div>
                <div className="nav-link">
                    <a href="/AboutUs">About us</a>
                    <a href="/Coursesstd">Courses</a>
                    <a href="/My">MyCourses</a>
                    <button className="logout-btn" onClick={next}>Logout</button>
                </div>
            </nav>
            <div className="courses-container1">
                <h2>Courses</h2>
                <div className="course-grid1">
                    {courses.map(course => (
                        <div key={course.id} className="course-card1" name="id">
                            <img src={`${imageBasePath}${course.image}`} alt={course.title} className="course-image1" name="image" />
                            <div className="course-details">
                                <h3><a href="/Coursesdet" name="title">{course.title}</a></h3>
                                <p name="description">{course.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Coursesstd;
