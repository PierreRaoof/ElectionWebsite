import React from "react";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "rgba(0, 0, 139, 0.8)",
        color: "white",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Logo Section */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2673/2673003.png"
          alt="Ballot Box Logo"
          style={{ height: "40px", marginRight: "10px" }}
        />
        <h1 style={{ fontSize: "24px", margin: 0 }}>Ballot Box</h1>
      </div>

      {/* Navigation Links */}
      <nav style={{ display: "flex", gap: "20px" }}>
        <a
          href="#election-results"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "16px",
            padding: "5px 10px",
          }}
        >
          Election Results
        </a>
        <a
          href="#ballot-review"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "16px",
            padding: "5px 10px",
            borderBottom: "2px solid orange", // Highlight current page
          }}
        >
          Ballot Review
        </a>
        <a
          href="#cast-vote"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "16px",
            padding: "5px 10px",
          }}
        >
          Cast Vote
        </a>
        <a
          href="#logout"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "16px",
            padding: "5px 10px",
          }}
        >
          Log Out
        </a>
      </nav>
    </header>
  );
};

export default Header;
