import React, { useState } from "react";
import './css/Login.css';

export const Login = (props) => {

    const [cashtag, setCashtag] = useState('');
    const [pin, setPIN] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(cashtag);}

  return (
    <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <input value={cashtag} onChange={(e) => setCashtag(e.target.value)}type="text" placeholder="$YourCashtag" id="cashtag" name="cashtag" />
                <input value={pin} onChange={(e) => setPIN(e.target.value)} type="password" placeholder="PIN" id="pin" name="pin" />
                <button type="submit">Login</button>
                <a href="#">Forgot Email / Password</a>
            </form>
        </div>
  )
}
