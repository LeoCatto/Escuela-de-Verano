import React from "react";
import "./Landing.css";
import travel_01 from "../../Media/travel-01.jpg";
import Navbar from "../Navbar/Navbar";

const navbarLinks = [
  { url: "http://localhost:3000", title: "Iniciar Seccion" },
  { url: "http://localhost:3000/home", title: "Perfil" },
  { url: "#", title: "Novedades" },
  { url: "#", title: "Sobre Nosotros" },
];
// eslint-disable-next-line no-empty-pattern
const Landing = () => {
  return (
    <div className="hero">
      <Navbar navbarLinks={navbarLinks} />
      <img src={travel_01} alt="Travel" className="hero__image" />
      <h1 className="hero__title">Una app sencilla y facil de usar holaa !</h1>
    </div>
  );
};

export default Landing;

