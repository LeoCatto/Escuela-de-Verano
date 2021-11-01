import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";


export default function NavBar() {
  return (
    <div className={s.navBar}>
      <ul className={s.ulNav}>
        
          <NavLink className={s.text} exact to="/">
            Sobre nosotros
          </NavLink>
          <NavLink className={s.text} exact to="/">
            Home
          </NavLink>
          <NavLink className={s.text} exact to="/">
           Mi perfil
          </NavLink>
      </ul>
    </div>
  );
}

