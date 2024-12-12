import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const HomePage = () => {
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
                    left: '40px',
                    textAlign: 'center'
                }}>
                    <h2>State Governor Candidates</h2>
                    <div
                        style={{
                            backgroundColor: "rgba(0, 0, 135, 0.8)",
                            padding: '20px 20px',
                            borderRadius: '30px'
                        }}
                    >
                        <h3>Democratic</h3>
                        <ui>Governor: Thomas Hawke | Lieutenant Governor: Jessica Moore</ui>
                        <h3>Republican</h3>
                        <ui>Governor: Sarah Leighton | Lieutenant Governor: Kyle Daniels</ui>
                        <h3>Independent</h3>
                        <ui>Governor: Marcus Thornton | Lieutenant Governor: Angela Brooks</ui>
                    </div>
            </div>

            <div
                style={{
                    position: 'absolute',
                    top: '460px',
                    left: '40px',
                    textAlign: 'center'
                }}>
                    <h2>Measure 872</h2>
                    <div
                        style={{
                            backgroundColor: "rgba(0, 0, 135, 0.8)",
                            padding: '20px 20px',
                            borderRadius: '30px',
                            height: '200px',
                            width: '200px'
                        }}>
                    <p><em>The Universal Healthcare Access Act</em> seeks to establish
                           a state-funded healthcare program providing free, comprehensive
                           healthcare services to all residents</p>
                    </div>
            </div>

            <div
                style={{
                    position: 'absolute',
                    top: '460px',
                    left: '300px',
                    textAlign: 'center'
                }}>
                <h2>Measure 874</h2>
                <div
                    style={{
                        backgroundColor: "rgba(0, 0, 135, 0.8)",
                        padding: '20px 20px',
                        borderRadius: '30px',
                        height: '200px',
                        width: '200px'
                    }}>
                    <p><em>The Clean Energy Infrastructure Act</em> proposes a state-wide
                        initiative to invest $5 billion into renewable energy
                        infrastructure over the next 10 years and reduce the
                        state's carbon footprint</p>
                </div>
            </div>

            <div
                style={{
                    position: 'absolute',
                    top: '100px',
                    left: '580px',
                    textAlign: 'center'
                }}>
                <h2>Presidential Candidates</h2>
                <div
                    style={{
                        backgroundColor: "rgba(0, 0, 135, 0.8)",
                        padding: '20px 20px',
                        borderRadius: '30px',
                        height: '570px',
                        width: '400px',
                        fontSize: '20px',
                        lineHeight: '44px',
                    }}>
                    <h3>Democratic</h3>
                    <ui>President: Maximus Caldwell<br /></ui>
                    <ui>Vice President: Eleanor Cross</ui>
                    <h3>Republican</h3>
                    <ui>President: Olivia Sinclair<br /></ui>
                    <ui>Vice President: Javier Delgado</ui>
                    <h3>Independent</h3>
                    <ui>President: Jonathan Drake<br /></ui>
                    <ui>Vice President: Mario Lopez</ui>
                </div>
            </div>
           
            <div
                style={{
                    color: 'rgba(0,0,0,0.5)',
                    position: 'absolute',
                    right: '220px',
                    fontSize: '55px',
                    textAlign: 'center'
                }}>
                <h1>MAKE</h1>
                <h1>YOUR</h1>
                <h1>VOICE</h1>
                <h1>HEARD</h1>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
