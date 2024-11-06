import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";
import jsQR from "jsqr";
import MilestoneSuccess from "./MilestoneSuccess";

const SlidingPanel = ({ placeData, onToggleExpand }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showQrScanner, setShowQrScanner] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [scanError, setScanError] = useState(null);
  const webcamRef = useRef(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    onToggleExpand(!isExpanded);
  };

  const openDirections = () => {
    const { lat, lng } = placeData.coordinates;
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
      "_blank"
    );
  };

  const handleCollectMilestone = () => {
    setShowQrScanner(true);
    setScanError(null);
  };

  const scanQrCode = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      const img = new Image();
      img.src = imageSrc;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0, img.width, img.height);
        const imageData = context.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        );
        const qrCode = jsQR(imageData.data, canvas.width, canvas.height);
        if (qrCode) {
          console.log("QR Code Scanned:", qrCode.data);
          setShowQrScanner(false); // Close scanner
          setShowSuccessMessage(true); // Show success message on successful scan
          setScanError(null);
        } else {
          setScanError("No QR code detected. Try again.");
        }
      };
    }
  };

  useEffect(() => {
    if (showQrScanner) {
      const interval = setInterval(scanQrCode, 1000);
      return () => clearInterval(interval);
    }
  }, [showQrScanner]);

  // Display MilestoneSuccess component if a milestone is collected
  if (showSuccessMessage) {
    return <MilestoneSuccess onClose={() => setShowSuccessMessage(false)} />;
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: isExpanded ? "0" : "0",
        left: 0,
        right: 0,
        width: "100vw",
        height: isExpanded ? "100vh" : "50vh",
        backgroundColor: "#ffffff",
        padding: "20px",
        boxShadow: "0 -2px 10px rgba(0,0,0,0.3)",
        borderRadius: "15px 15px 0 0",
        transition: "height 0.3s ease-in-out",
        overflowY: "auto",
        zIndex: 2,
        color: "#265b62",
        fontFamily: "'Readex Pro', sans-serif",
      }}
    >
      <button
        onClick={toggleExpand}
        style={{
          position: "absolute",
          top: "15px",
          right: "25px",
          background: "transparent",
          border: "none",
          fontSize: "28px",
          cursor: "pointer",
          color: "#265b62",
          fontWeight: "700",
        }}
      >
        {isExpanded ? "⬇️" : "⬆️"}
      </button>

      {/* Title and Rating Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <div>
          <h2
            style={{
              margin: "0 0 10px",
              fontSize: "24px",
              color: "#265b62",
              fontWeight: "700",
            }}
          >
            {placeData.name}
          </h2>
          <p
            style={{
              margin: "0",
              color: "gray",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            {placeData.category} • 4.7⭐ on 百度地图
          </p>
          <p
            style={{
              color: placeData.isOpen ? "#4CAF50" : "#FF5252",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            {placeData.isOpen ? "Open" : "Closed"} · Opens{" "}
            {placeData.openingTime}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <button style={actionButtonStyle} onClick={openDirections}>
          Directions
        </button>
        <button style={actionButtonStyle}>Website</button>
        <button style={actionButtonStyle}>Call</button>
      </div>

      {/* Collect Milestone Button */}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <button style={milestoneButtonStyle} onClick={handleCollectMilestone}>
          Collect Milestone
        </button>
      </div>

      {/* Image Gallery */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          marginTop: "15px",
          flexWrap: "wrap",
        }}
      >
        {placeData.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            style={{
              width: "calc(50% - 10px)",
              height: "auto",
              borderRadius: "8px",
            }}
          />
        ))}
      </div>

      {/* QR Code Scanner Modal */}
      {showQrScanner && (
        <div style={qrScannerOverlayStyle}>
          <button
            onClick={() => setShowQrScanner(false)}
            style={closeButtonStyle}
          >
            ✖
          </button>

          {/* Camera Frame */}
          <div style={cameraFrameStyle}></div>

          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/png"
            style={{ width: "100%", height: "auto", borderRadius: "15px" }}
            videoConstraints={{
              facingMode: "environment",
            }}
          />

          {scanError && (
            <p style={{ color: "red", fontSize: "16px", marginTop: "10px" }}>
              {scanError}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

const actionButtonStyle = {
  padding: "10px 15px",
  borderRadius: "20px",
  border: `1px solid #265b62`,
  backgroundColor: "#ffffff",
  color: "#265b62",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "500",
  fontFamily: "'Readex Pro', sans-serif",
};

const milestoneButtonStyle = {
  padding: "15px 30px",
  borderRadius: "30px",
  background: "linear-gradient(90deg, #000000, #265b62)",
  color: "#ffffff",
  fontSize: "18px",
  fontWeight: "700",
  border: "none",
  cursor: "pointer",
  fontFamily: "'Readex Pro', sans-serif",
  boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
};

const qrScannerOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 3,
};

const closeButtonStyle = {
  position: "absolute",
  top: "20px",
  right: "20px",
  background: "transparent",
  border: "none",
  fontSize: "24px",
  color: "#ffffff",
  cursor: "pointer",
};

const cameraFrameStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "250px",
  height: "250px",
  border: "4px solid rgba(255, 255, 255, 0.8)",
  borderRadius: "15px",
  boxShadow: "0px 0px 20px rgba(0,0,0,0.5)",
  zIndex: 3,
  pointerEvents: "none",
};

export default SlidingPanel;
