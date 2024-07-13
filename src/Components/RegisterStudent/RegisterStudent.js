import React from 'react';
import './RegisterStudent.css';
const RegisterStudent = ({ registerStudent }) => {
    return (
        <div id="register" className="section">
            <h2>Register Student</h2>
            <form onSubmit={registerStudent}>
                <label htmlFor="studentName">Student Name:</label>
                <input type="text" id="studentName" name="studentName" required />
                
                <label htmlFor="studentEmail">Student Email:</label>
                <input type="email" id="studentEmail" name="studentEmail" required />
                
                <label htmlFor="studentClass">Class:</label>
                <input type="text" id="studentClass" name="studentClass" required /><br></br><br></br><hr></hr>
                
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterStudent;
