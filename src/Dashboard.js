import React from 'react';
import './css/Dashboard.css';

export const Dashboard = () => {
  return (
    <body className='DashboardBody'>
        <nav className='sidebar'>
            <ul className='sidebarUL' id='sidebarUL'>
                <li>
                    <a href='#' >
                        <img src= {require('./css/svg/Ellipse 11.png')} id='Ellipse11'></img>
                        <img src= {require('./css/svg/Group378.png')} id='group378'></img>
                    </a>
                </li>
                <li>
                    <a href='#'>
                    <img src= {require('./css/svg/Group377.png')} id='group377'></img>
                    </a>
                </li>
                <li>
                    <a href='#'>
                    <img src= {require('./css/svg/VectorD1.png')} id='vectorD1'></img>
                    </a>
                </li>
                <li>
                    <a href='#'>
                    <img src= {require('./css/svg/Group40.png')} id='group40'></img>
                    </a>
                </li>
                <li>
                    <a href='#'>
                    <img src= {require('./css/svg/Group375.png')} id='group375'></img>
                    </a>
                </li>
            </ul>
        </nav>

    </body>
  )
}
