import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import "../dashboard.css";

function StdDash() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);
  const [busSchedule, setBusSchedule] = useState([]);
  const [busLocation, setBusLocation] = useState(null);
  const [hoveredBus, setHoveredBus] = useState(null);

  const busTrackingData = [
    { 
      busNo: "10", 
      departure: "4:00 PM", 
      stops: ["Stop 1: 4:15 PM", "Stop 2: 4:30 PM", "Stop 3: 4:45 PM"] 
    },
    { 
      busNo: "12", 
      departure: "4:15 PM", 
      stops: ["Stop 1: 4:25 PM", "Stop 2: 4:40 PM", "Stop 3: 4:55 PM"] 
    },
    { 
      busNo: "15", 
      departure: "4:30 PM", 
      stops: ["Stop 1: 4:45 PM", "Stop 2: 5:00 PM", "Stop 3: 5:15 PM"] 
    }
  ];
  
  useEffect(() => {
    // Fetch notifications from the backend (dummy data for now)
    setNotifications(["Bus timing updated", "New pass application rule"]);

    // Fetch bus schedule from backend (dummy data for now)
    setBusSchedule([
      { busNo: "10", route: "A to B", time: "8:00 AM" },
      { busNo: "12", route: "C to D", time: "9:00 AM" },
    ]);
  }, []);

  return (
    <>
      <div className="background">
        <div className="dashboard-container">

          <div className="left-section">
            <div className="section-header">
              <h2>E-Pass</h2>
            </div>
            <div className="e-pass-box">
              <div className="photo">
                <img src="../e-pass.jpg" alt="Passport Photo" />
              </div>
              <div className="detail">
                <label>Name:</label>
                <span>John Doe</span>
              </div>
              <div className="detail">
                <label>Year of Study:</label>
                <span>3rd Year</span>
              </div>
              <div className="detail">
                <label>Admission No:</label>
                <span>ABC123456</span>
              </div>
              <div className="detail">
                <label>Pass Valid To:</label>
                <span>31 Dec 2025</span>
              </div>
            </div>
            <button onClick={() => navigate("/apply-pass")}>Download E-Pass</button>
          </div>

          <div className="center-section">
            <section>
              <div className="section-header">
                <h2>Bus Schedule</h2>
              </div>
              <ul>
                {busSchedule.map((bus, index) => (
                  <li key={index}>{`Bus No: ${bus.busNo}, Route: ${bus.route}, Time: ${bus.time}`}</li>
                ))}
              </ul>
            </section>

            <section>
              <div className="section-header">
                <h2>Mark Attendance</h2>
              </div>
              <button onClick={() => navigate("/mark-attendance")}>Mark Now</button>
            </section>

           <section>
      <div className="section-header">
        <h2>Bus Tracking</h2>
      </div>
      <div className="bus-tracking-container">
        <table>
          <thead>
            <tr>
              <th>Bus No</th>
              <th>Departure Time</th>
            </tr>
          </thead>
          <tbody>
            {busTrackingData.map((bus, index) => (
              <tr 
                key={index} 
                onMouseEnter={() => setHoveredBus(index)} 
                onMouseLeave={() => setHoveredBus(null)}
              >
                <td className="bus-number">{bus.busNo}</td>
                <td>{bus.departure}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Hover Box for Stops */}
        {hoveredBus !== null && (
          <div className="hover-box">
            <h4>Stops & Arrival Times</h4>
            <ul>
              {busTrackingData[hoveredBus].stops.map((stop, idx) => (
                <li key={idx}>{stop}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>

          </div>

          <div className="right-section">
            <div className="section-header">
              <h2>Notifications</h2>
            </div>
            <ul>
              {notifications.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default StdDash;