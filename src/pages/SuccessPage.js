import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const SuccessPage = () => {
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
                    top: '350px',
                    left: '350px',
                    textAlign: 'center'
                }}>
                <h1>Congratulations<br />Your Vote Has Been Casted</h1>
            </div>

            <div
                style={{
                    position: 'absolute',
                    bottom: '400px',
                    left: '500px'
                }}>
                <button>
                    <a href="home"
                        style={{
                            fontSize: '30px',
                        }}>
                        HOME
                    </a>
                </button>
            </div>

            <Footer />
        </div>
    );
};

export default SuccessPage;
