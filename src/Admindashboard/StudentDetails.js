import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StudentDetails.css';
import logo1 from "../img/logo1.png"; 
import { useNavigate } from 'react-router-dom';
import Footer from '../Admin/footer';
const StudentDetails = () => {
    const navigate = useNavigate();
    const next = () => {
        navigate('/');
    }

    const [students, setStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8080/api/students')
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => console.error('Error fetching students:', error));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/api/students/${id}`)
            .then(() => {
                setStudents(students.filter(student => student.id !== id));
            })
            .catch(error => console.error('Error deleting student:', error));
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div >
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
                <h1>Student Details</h1>
                <input
                    type="text"
                    id="s34rchB4r"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <table id="studentT4ble">
                    <thead>
                        <tr>
                        
                            <th name="name">Student Name</th>
                            <th  name="courses">Courses Joined</th>
                            <th name="degree">Degree</th>
                            <th name="year">Year of Study</th>
                            <th name="institution">Institution</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.map(student => (
                            <tr key={student.id}>
                                <td name="name">{student.name}</td>
                                <td  name="courses">{student.courses}</td>
                                <td name="degree">{student.degree}</td>
                                <td name="year">{student.year}</td>
                                <td name="institution">{student.institution}</td>
                                <td>
                                    <button onClick={() => handleDelete(student.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer/>
        </div>
    );
};

export default StudentDetails;
