import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ElectionResultsChart from "../Components/ElectionResultsChart";

const ElectionResultsPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1585628774979-8b183a436b9f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "white",
      }}
    >
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          margin: "20px",
          borderRadius: "10px",
          padding: "20px",
          color: "#333",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#3366CC" }}>
          Election Results: Democrats vs Republicans
        </h2>
        <p style={{ textAlign: "center" }}>
          Below is a visual representation of the election results for major positions.
        </p>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <ElectionResultsChart />
        </div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default ElectionResultsPage;
