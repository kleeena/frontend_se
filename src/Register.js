import React, { useState } from "react";
import './css/Register.css';

export const Register = (props) => {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [date, setDate] = useState('');
    const [cashtag, setCashtag] = useState('');
    const [identity_no, setIdentityNo] = useState('');
    const [pin, setPIN] = useState('');

  return (
    <div className='RegisterPage'>
        <h2>Register</h2>
        <form className='RegForm'>
        <input value={first_name} onChange={(e) => setFirstName(e.target.value)}type="text" placeholder="First Name" id="first_name" name="first_name" />
        <input value={last_name} onChange={(e) => setLastName(e.target.value)}type="text" placeholder="Last Name" id="last_name" name="last_name" />
        <input value={date} onChange={(e) => setDate(e.target.value)}type="date" placeholder="Date of Birth" id="dob" name="dob" />
        <input value={cashtag} onChange={(e) => setCashtag(e.target.value)}type="text" placeholder="$YourCashtag" id="cashtag" name="cashtag" />
        <input value={identity_no} onChange={(e) => setIdentityNo(e.target.value)}type="text" placeholder="Identity Number" id="Identity_no"/>
        <input value={pin} onChange={(e) => setPIN(e.target.value)} type="password" placeholder="PIN" id="pin" name="pin" />
        <button type="submit">Register</button>
        </form>
    </div>
  )
}
