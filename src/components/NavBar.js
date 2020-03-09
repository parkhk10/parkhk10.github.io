import React from 'react';
import Logo from './Logo';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className="nav-bar">
            <a href="/"><Logo /></a>
            <div className="">
                <a href="/about">
                    <Link to="/about">about</Link>
                </a> 
                <a href="/work">
                    <Link to="/work">work</Link>
                </a> 
                <a href="/play">
                    <Link to="/play">play</Link>
                </a> 
            </div>
        </nav>
    )
}

export default NavBar;