import React from 'react';

const LoginButton = () => {
  return (
    <button
      style={{
        width: '100%',
        padding: '10px',
        backgroundColor: '#000',
        color: '#fff',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1rem',
      }}
    >
      Login
    </button>
  );
};

export default LoginButton;
