import React from 'react';
import './Header.css';
import logoUrl from '../../assets/gatorchat3.png'
const Header = () => (
    <div className="header">
        <img src={logoUrl} alt="Gator Chat" />
    </div>
)
export default Header;