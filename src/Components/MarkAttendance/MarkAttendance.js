import React from 'react';
import './MarkAttendance.css';

const MarkAttendance = ({ markAttendance }) => {
    return (
        <div id="mark" className="section">
            <h2>Mark Attendance</h2>
            <form onSubmit={markAttendance}>
                <label htmlFor="studentList">Select Student:</label>
                <select id="studentList" name="studentList" required>
                    {/* Students will be populated here */}
                </select>
                
                <label htmlFor="attendanceStatus">Status:</label>
                <select id="attendanceStatus" name="attendanceStatus" required>
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                    <option value="Late">Late</option>
                </select><br></br><br></br><hr></hr>
                
                <button type="submit">Mark Attendance</button>
            </form>
        </div>
    );
}

export default MarkAttendance;
