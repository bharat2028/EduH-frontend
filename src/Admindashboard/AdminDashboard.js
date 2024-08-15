import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';
import './AdminDashboard.css';
import  Footer  from '../Admin/footer';
import logo1 from "../img/logo1.png"; // Ensure the correct path to your logo image
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);
const AdminDashboard = () => {
    
    const navigate = useNavigate();
    const next = () => {
        navigate('/');
    }
    const barData = {
        labels: ['Jan-Feb', 'Mar-Apr', 'May-Jun', 'Jul-Aug', 'Sept-Oct', 'Nov-Dec'],
        datasets: [
            {
                label: 'Website Visits',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: ['DodgerBlue'],
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    const barOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                    },
                },
            },
        },
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    const pieData = {
        labels: ['City A', 'City B', 'City C', 'City D','City E','City D'],
        datasets: [
            {
                label: 'Students Location',
                data: [120,120,60, 50, 100, 150,],
                backgroundColor: ['DodgerBlue', 'red','brown', 'green', 'orange','yellow'],
                borderColor: ['white'],
                borderWidth: 3,
            },
        ],
    };

    const pieOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw}`;
                    },
                },
            },
        },
    };
    const [topInstitutions, setTopInstitutions] = useState([]);
    const [topAchievers, setTopAchievers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/topins/top')
            .then(response => setTopInstitutions(response.data))
            .catch(error => console.error('Error fetching institutions:', error));

        axios.get('http://localhost:8080/api/topach/top')
            .then(response => setTopAchievers(response.data))
            .catch(error => console.error('Error fetching achievers:', error));
    }, []);

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
                <div className="content">
                    <div className="bar-chart">
                        <h2>Website Visits</h2>
                        <Bar data={barData} options={barOptions} />
                    </div>
                    <div className="pie-chart">
                        <h2>Students Location</h2>
                        <Pie data={pieData} options={pieOptions} />
                    </div>
                    <div>
                    <div className="institutions">
                        <h2 name="name">Top Institutions</h2>
                        <ul name="name">
                            {topInstitutions.map(institution => (
                                <li key={institution.id}>{institution.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="top-performers">
                        <h2 name="name">Top Achievers</h2>
                        <ul name="name">
                            {topAchievers.map(achiever => (
                                <li key={achiever.id}>{achiever.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                </div>
                <Footer/>
                </div>
    );
};

export default AdminDashboard;
