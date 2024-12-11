import React from 'react';
import { Link } from 'react-router-dom'; 
import HeaderLogo from '../Components/HeaderLogo';
import InputField from '../Components/InputField';
import LoginButton from '../Components/LoginButton';

const LoginPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f8f9fa',
      }}
    >
      <div
        style={{
          width: '300px',
          padding: '40px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <HeaderLogo />
        <InputField type="email" placeholder="Email" />
        <InputField type="password" placeholder="Password" />
        <LoginButton />
        <p style={{ textAlign: 'center', marginTop: '10px' }}>
          New Voter? <Link to="/signup">Register Here</Link> {}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
