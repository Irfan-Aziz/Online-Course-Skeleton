import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className="left">
            <h1>Online Courses for Skill Development</h1>
            </div>
            <div className="right">
            <button className='login'>Log-In</button>
            </div>
        </div>
    );
};

export default Header;