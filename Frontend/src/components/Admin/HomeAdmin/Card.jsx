import React from "react";
import { NavLink } from "react-router-dom";


export default function Card({ name, years, clienteNro, DNI, quincena, id }) {

  return (
    <div className="card">
      <NavLink to={`/alumnos/${id}`}>
        <h5 className="card-title">{name}</h5>
      </NavLink>
      <div className="card-body">
        <div className="image">
          <p>{years}</p>
        </div>
        <div>
            <p>{clienteNro}</p>
        </div>
        <div>
            <p>{DNI}</p>
        </div>
        <div>
            <p>{quincena}</p>
        </div>
      </div>
    </div>
  );
}