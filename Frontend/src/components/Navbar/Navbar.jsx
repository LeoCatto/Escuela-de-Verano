import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"


export default function NavBar() {
  return (
    <div className='navbar'>
          <NavLink className="text" exact to="/">
            Sobre nosotros
          </NavLink>
          <NavLink className='text' exact to="/">
            Home
          </NavLink>
          <NavLink className='text' exact to="/miperfil">
           Mi perfil
          </NavLink>
    </div>
  );
}

