import React from 'react';
import Logo from './Logo';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className="nav-bar">
            <a href="/"><Logo /></a>
            <div className="">
                <a className="nav-bar-item" href="/about">
                    <Link to="/about">about</Link>
                </a> 
                <a className="nav-bar-item" href="/">
                    <Link to="/">work</Link>
                </a> 
                <a className="nav-bar-item" href="/play">
                    <Link to="/play">play</Link>
                </a> 
            </div>
        </nav>
    )
}

export default NavBar;