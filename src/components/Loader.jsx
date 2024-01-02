import React from "react";
import loadingImage from "../assets/assets/79328284-f97b-489f-924c-eb3b17e34b56_image2.avif"; 
const CanvasLoader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <img src={loadingImage} alt="Loading..." />
    </div>
  );
};

export default CanvasLoader;