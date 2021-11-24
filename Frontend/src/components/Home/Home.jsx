import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import HomeAdmin from "../Admin/HomeAdmin/HomeAdmin";
import Navbar from "../Navbar/Navbar";
import "./home.css";


export default function Home() {

  const { isAuthenticated } = useAuth0();


  return (
    <div className='fondo' >
        <Navbar/>
        <div>
          {isAuthenticated ? (
            <>
              <HomeAdmin/>
            </>
          )
          :(
            <h1 className="titulo">Escuela de verano</h1>
          )}
        </div>
    </div>
  );
}