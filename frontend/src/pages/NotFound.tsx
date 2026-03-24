import { Link } from "react-router-dom";
import React from "react";

const NotFound: React.FC = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "80px", margin: 0 }}>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for doesn't exist.</p>

      <Link
        to="/"
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#22c55e",
          color: "black",
          textDecoration: "none",
          borderRadius: "8px",
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;