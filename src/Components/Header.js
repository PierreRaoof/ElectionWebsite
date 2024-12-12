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
      <nav style={{ display: 'flex', alignItems: 'center' } }>
        <a href="home"
          style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              padding: '5px 5px'
          }}>
          <img
          src="https://cdn-icons-png.flaticon.com/512/2673/2673003.png"
          alt="Ballot Box Logo"
          style={{ height: "40px", marginRight: "10px" }}
          />
          Ballot Box
        </a>
      </nav>

      {/* Navigation Links */}
      <nav style={{ display: "flex", gap: "20px" }}>
        <a
          href="electionresults"
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
          href="review"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "16px",
            padding: "5px 10px",
          }}
        >
          Ballot Review
        </a>
        <a
          href="castvote"
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
          href="login"
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
