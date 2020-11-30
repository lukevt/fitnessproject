import React from 'react'
import './Navbar.css'
import {Link, NavLink} from 'react-router-dom'
import {CgGym} from 'react-icons/cg'
const Navbar = () => (
    <nav className="row bg-dark main-nav">
        <div className="col-2">
            <Link to="/" className="nav-logo-text">
                <CgGym size={35}/>
                <h4>FitBuddy</h4>
            </Link>    
        </div>
        <div className="col-6 offset-2">
            <ul className="main-menu">
                <li>
                    <NavLink to="/" activeClassName="active" exact>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/login" activeClassName="active">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/register" activeClassName="active">Sign Up</NavLink>
                </li>
                <li>
                    <NavLink to="/trainers" activeClassName="active">Trainers</NavLink>
                </li>
                <li>
                    <NavLink to="/profile" activeClassName="active">Profile</NavLink>
                </li>
            </ul>
        </div>
        
    </nav>
);

export default Navbar;