import React from "react";
import './Header.css'
import logo from '../../assets/image1.png'
const Header=()=>{
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="stories world"/>
            </div>
            <nav>
                <ul className="nav-links">
                <li><a href="#top-stories">Top Stories</a></li>
                <li><a href="#latest-stories">Latest Stories</a></li>
                <li><a href="#popular-stories">Popular Stories</a></li>
                <li><a href="#editors-picks">Editor's Picks</a></li>
                </ul>
            </nav>
        </header>

    );
};
export default Header;