import React, { useState } from "react";

const SlidingPanel = ({ placeData, onToggleExpand }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    onToggleExpand(!isExpanded);
  };

  // Function to open Google Maps with directions from the current location to the destination
  const openDirections = () => {
    const { lat, lng } = placeData.coordinates;
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
      "_blank"
    );
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: isExpanded ? "0" : "0",
        left: 0,
        right: 0,
        height: isExpanded ? "100vh" : "50vh",
        backgroundColor: "white",
        padding: "20px",
        boxShadow: "0 -2px 10px rgba(0,0,0,0.3)",
        borderRadius: "10px 10px 0 0",
        transition: "height 0.3s ease-in-out",
        overflowY: "auto",
        zIndex: 2,
        color: "#333",
      }}
    >
      {/* Expand/Collapse Button in the Top Right */}
      <button
        onClick={toggleExpand}
        style={{
          position: "absolute",
          top: "10px",
          right: "20px",
          background: "transparent",
          border: "none",
          fontSize: "24px",
          cursor: "pointer",
        }}
      >
        {isExpanded ? "⬇️" : "⬆️"}
      </button>

      {/* Header with Place Name, Location, and Description */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h4>{placeData.name}</h4>
        <p>{placeData.location}</p>
        <p>{placeData.description}</p>

        {/* Buttons for Directions and Collect Asia Milestone */}
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={openDirections} style={buttonStyle}>
            Directions
          </button>
          <button
            onClick={() => alert("Collect Asia Milestone function")}
            style={buttonStyle}
          >
            Collect Asia Milestone
          </button>
        </div>
      </div>

      {/* Image Gallery */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {placeData.images &&
          placeData.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              style={{
                width: "100%",
                maxWidth: "250px",
                height: "auto",
                borderRadius: "5px",
              }}
            />
          ))}
      </div>
    </div>
  );
};

// Custom button style
const buttonStyle = {
  padding: "10px 15px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  backgroundColor: "#007BFF",
  color: "#fff",
  cursor: "pointer",
};

export default SlidingPanel;
