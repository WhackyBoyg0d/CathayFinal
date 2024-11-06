import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const MilestoneSuccess = ({ onClose }) => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: Add a semi-transparent background
        zIndex: 1000, // Ensure the container is above other elements
      }}
    >
      <Confetti
        width={windowDimensions.width}
        height={windowDimensions.height}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          textAlign: "center",
          backgroundColor: "#ffffff", // Background color for the content
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          zIndex: 1001, // Ensure the content is above the background container
        }}
      >
        <h2 style={{ fontSize: "24px", fontWeight: "700", margin: "20px 0" }}>
          You have successfully collected an AsiaMilestone!
        </h2>

        {/* Recent Collected Milestones */}
        <div style={{ marginTop: "20px", width: "100%" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#265b62" }}>
            Recent Collected Milestones
          </h3>
          <div style={milestoneIconsContainerStyle}>
            <div style={milestoneIconStyle}>🌸</div>
            <div style={milestoneIconStyle}>🌺</div>
            <div style={milestoneIconStyle}>🌻</div>
          </div>
        </div>

        <button onClick={onClose} style={closeButtonStyle}>
          Close
        </button>
      </div>
    </div>
  );
};

const milestoneIconsContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  marginTop: "15px",
};

const milestoneIconStyle = {
  fontSize: "36px",
  borderRadius: "50%",
  backgroundColor: "#F5F5F5",
  padding: "15px",
  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
};

const closeButtonStyle = {
  marginTop: "20px",
  padding: "10px 20px",
  borderRadius: "25px",
  backgroundColor: "#265b62",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
  border: "none",
  fontFamily: "'Readex Pro', sans-serif",
};

export default MilestoneSuccess;
