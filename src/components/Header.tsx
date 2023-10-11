import React from "react";
import logo_vnv from '../images/logo_vnv.png';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img 
          src={logo_vnv} 
          alt="VNV" 
          className="header__logo-img"
          />
      </div>
      <div className="header__items">
          <span className="header__items-vnv">VNV</span>
      </div>
    </header>  
  );
}