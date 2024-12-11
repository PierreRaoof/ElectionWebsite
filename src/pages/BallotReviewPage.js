import React from "react";
import Header from "../Components/Header";
import BallotTable from "../Components/BallotTable";
import Footer from "../Components/Footer";

const BallotReviewPage = () => {
  const ballotChoices = [
    { id: 1, position: "President", selection: "Your Choice" },
    { id: 2, position: "Vice President", selection: "Your Choice" },
    { id: 3, position: "State Senator", selection: "Your Choice" },
    { id: 4, position: "Measure 872", selection: "Yes" },
    { id: 5, position: "Measure 874", selection: "No" },
  ];

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
      <Header />
      <BallotTable choices={ballotChoices} />
      <Footer />
    </div>
  );
};

export default BallotReviewPage;
