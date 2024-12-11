import React from "react";

const BallotTable = ({ choices }) => {
  return (
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
      <h2 style={{ textAlign: "center", color: "#3366CC" }}>Ballot Review</h2>
      <p style={{ textAlign: "center" }}>
        Please review your selections below before proceeding.
      </p>
      <table
        style={{
          width: "100%",
          margin: "20px auto",
          borderCollapse: "collapse",
          textAlign: "left",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2", color: "#333" }}>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Position</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Selection</th>
          </tr>
        </thead>
        <tbody>
          {choices.map((choice) => (
            <tr key={choice.id}>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  backgroundColor: "white",
                }}
              >
                {choice.position}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  backgroundColor: "white",
                }}
              >
                {choice.selection}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default BallotTable;
