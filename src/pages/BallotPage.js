import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const BallotPage = () => {
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

            <div
                style={{
                    position: 'absolute',
                    top: '100px',
                    left: '260px',
                    textAlign: 'center'
                }}>
                <h2>State Governor Candidates</h2>
                <ul
                    style={{
                        backgroundColor: "rgba(0, 0, 135, 0.8)",
                        padding: '20px 20px',
                        borderRadius: '30px',
                        width: '600px',
                        height: '340px'
                    }}>
                    <h2>Democratic</h2>
                    <label
                    ><input type="radio" name="question0" value="A" />
                        <span className="choice">Governor: Thomas Hawke | Lieutenant Governor: Jessica Moore</span></label>
                    <h2>Republican</h2>
                    <label
                    ><input type="radio" name="question0" value="B" />
                        <span className="choice">Governor: Sarah Leighton | Lieutenant Governor: Kyle Daniels</span></label>
                    <h2>Independent</h2>
                    <label
                    ><input type="radio" name="question0" value="C" />
                        <span className="choice">Governor: Marcus Thornton | Lieutenant Governor: Angela Brooks</span></label>
                    <h2> </h2>
                    <label
                    ><input type="radio" name="question0" value="D" />
                        <span className="choice">Write In: <input type="text" name="question0" /></span></label>
                </ul>
            </div>

            <div
                style={{
                    position: 'absolute',
                    top: '560px',
                    left: '300px',
                    textAlign: 'center'
                }}>
                <h2>Measure 872</h2>
                <ul
                    style={{
                        backgroundColor: "rgba(0, 0, 135, 0.8)",
                        padding: '20px 20px',
                        borderRadius: '30px',
                        height: '80px',
                        width: '200px',
                        fontSize: '20px',
                        lineHeight: '40px'
                    }}>
                    <label
                    ><input type="radio" name="question1" value="A" />
                        <span className="choice">For<br /></span></label>
                    <label
                    ><input type="radio" name="question1" value="B" />
                        <span className="choice">Against</span></label>
                </ul>
            </div>

            <div
                style={{
                    position: 'absolute',
                    top: '560px',
                    left: '650px',
                    textAlign: 'center'
                }}>
                <h2>Measure 874</h2>
                <ul
                    style={{
                        backgroundColor: "rgba(0, 0, 135, 0.8)",
                        padding: '20px 20px',
                        borderRadius: '30px',
                        height: '80px',
                        width: '200px',
                        fontSize: '20px',
                        lineHeight: '40px'
                    }}>
                    <label
                    ><input type="radio" name="question2" value="A" />
                        <span className="choice">For<br /></span></label>
                    <label
                    ><input type="radio" name="question2" value="B" />
                        <span className="choice">Against</span></label>
                </ul>
            </div>

            <div
                style={{
                    position: 'absolute',
                    top: '100px',
                    right: '260px',
                    textAlign: 'center'
                }}>
                <h2>Presidential Candidates</h2>
                <ul
                    style={{
                        backgroundColor: "rgba(0, 0, 135, 0.8)",
                        padding: '20px 20px',
                        borderRadius: '30px',
                        height: '540px',
                        width: '600px',
                        fontSize: '20px',
                        lineHeight: '48px',
                    }}>
                    <h2>Democratic</h2>
                    <label
                    ><input type="radio" name="question3" value="A" />
                        <span className="choice">President: Maximus Caldwell | Vice President: Eleanor Cross</span></label>
                    <h2>Republican</h2>
                    <label
                    ><input type="radio" name="question3" value="B" />
                        <span className="choice">President: Olivia Sinclair | Vice President: Javier Delgado</span></label>
                    <h2>Independent</h2>
                    <label
                    ><input type="radio" name="question3" value="C" />
                        <span className="choice">President Jonathan Drake | Vice President: Mario Lopez</span></label>
                    <h2>  </h2>
                    <label
                    ><input type="radio" name="question3" value="D" />
                        <span className="choice">Write In: <input type="text" name="question0" /></span></label>
                </ul>
            </div>

            <div
                style={{
                    position: 'absolute',
                    bottom: '70px',
                    left: '900px',
                }}>
                <button>
                    <a href="success"
                        style={{
                            fontSize: '25px'
                        }}>
                    SUBMIT
                    </a>
                </button>
            </div>

            <Footer />
        </div>
    );
};

export default BallotPage;
