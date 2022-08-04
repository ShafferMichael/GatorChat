import React from 'react';
import './Header.css';
import logoUrl from '../../assets/gatorchat3.png'


const Header = () => (
    
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img src={logoUrl} alt="Gator Chat" />
            </a>
        
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://sites.google.com/view/gator-chat/home">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
            </ul>
        </div>
        </div>
    </nav>
    
    
)
export default Header;