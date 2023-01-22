import { render } from '@testing-library/react';
import React from 'react';
import './css/NavBar2.css';

function NavBar2 () {

  
        

    return (
        <div className='NavBar2'>
            <div className='profile_icon'>
                <img src= {require('./css/svg/Group40.png')} id='profile_vector'></img>
            </div>
            <p id='greetingmsg'>Good Evening!</p>
            <p id='profile-name'>John Doe</p>

            <ul className='navUL' id='navUL'>

                <li>
                    <a href='#'>
                    <img src= {require('./css/svg/Group377.png')} id=''></img>
                    </a>
                </li>
                <li>
                    <a href='#'>
                    <img src= {require('./css/svg/VectorD1.png')} id=''></img>
                    </a>
                </li>
                <li>
                    <a href='#'>
                    <img src= {require('./css/svg/Group40.png')} id=''></img>
                    </a>
                </li>
                <li>
                    <a href='#'>
                    <img src= {require('./css/svg/Group375.png')} id=''></img>
                    </a>
                </li>
            </ul>
        </div>
      );

    }

    
  


export default NavBar2;


