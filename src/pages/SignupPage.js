import React from 'react';
import HeaderLogo from '../Components/HeaderLogo';
import InputField from '../Components/InputField';
import LoginButton from '../Components/LoginButton';

const SignupPage = () => {
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
          width: '400px',
          padding: '40px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <HeaderLogo />
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
          <InputField type="text" placeholder="First Name" />
          <InputField type="text" placeholder="Last Name" />
        </div>
        <InputField type="email" placeholder="Email" />
        <InputField type="text" placeholder="Address" />
        <InputField type="date" placeholder="Birthday" />
        <InputField type="password" placeholder="Password" />
        <LoginButton text="Register" /> {}
        <p style={{ textAlign: 'center', marginTop: '10px' }}>
          Already Registered? <a href="/">Login Here</a> {}
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
