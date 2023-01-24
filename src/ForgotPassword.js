import React, { useState } from "react";
import './css/forgotPassword.css';

export const ForgotPassword = (props) => {

    const [newpw, setNewPW] = useState('');
    const [confirmpw, setConfirmPW] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newpw);}

  return (
    <div className="auth-form-container">
            <h2>Forgot Password?</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <input value={newpw} onChange={(e) => setNewPW(e.target.value)}type="password" placeholder="New Password" id="cashtag" name="cashtag" />
                <input value={confirmpw} onChange={(e) => setConfirmPW(e.target.value)} type="password" placeholder="Confirm Password" id="pin" name="pin" />
                <button type="submit">Change Password</button>
                
            </form>
        </div>
  )
}

export default ForgotPassword;