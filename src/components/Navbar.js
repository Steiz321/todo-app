import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => (
    <nav style={{paddingLeft: '20px'}} className='navbar navbar-dark navbar-expand-lg bg-success '>
        <div className='navbar-brand'>
            Todo App
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink className="nav-link" to='/about'>About</NavLink>
            </li>
        </ul>
    </nav>
);