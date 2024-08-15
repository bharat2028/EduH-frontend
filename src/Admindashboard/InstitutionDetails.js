import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './InstitutionDetails.css';
import logo1 from "../img/logo1.png"; 
import { useNavigate } from 'react-router-dom';
import Footer from '../Admin/footer';

const InstitutionDetails = () => {
    const Navigate = useNavigate();
    const next = () => {
        Navigate('/');
    }

    const [institutions, setInstitutions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8080/api/ins')
            .then(response => setInstitutions(response.data))
            .catch(error => console.error('Error fetching institutions:', error));
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredInstitutions = institutions.filter(institution =>
        institution.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
            <button className="logout-btn" on onClick={next}>Logout</button>
        </div>
    </nav>
            <div className="c0nt41ner">
                <h1>Institution Details</h1>
                <input
                    type="text"
                    id="s34rchB4r"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <table id="institutionT4ble">
                    <thead>
                        <tr>
                            <th name="name">Institution Name</th>
                            <th name="location">Location</th>
                            <th name="coursesOffered">Courses Offered</th>
                            <th name="studentsEnrolled">Students Enrolled</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredInstitutions.map(institution => (
                            <tr key={institution.id}>
                                <td name="name"><a name="link" href={institution.link} target="_blank" rel="noopener noreferrer">{institution.name}</a></td>
                                <td name="location">{institution.location}</td>
                                <td name="coursesOffered">{institution.coursesOffered}</td>
                                <td name="studentsEnrolled">{institution.studentsEnrolled}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer/>
        </div>
    );
};

export default InstitutionDetails;
