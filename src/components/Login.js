import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label>Username:</label>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input type="password" placeholder="Password" />
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
