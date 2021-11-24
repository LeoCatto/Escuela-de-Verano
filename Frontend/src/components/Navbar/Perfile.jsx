import React from "react";
import { NavLink } from "react-router-dom";
import { LoginButton } from "../Login/Login";
import { LogoutButton } from "../LogOut/logOut";
import { useAuth0 } from "@auth0/auth0-react";
import { Profil } from "../Auth0/Profil";

export default function Perfile() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <NavLink className="text" exact to="/">
        Home
      </NavLink>
      <div>
        <header>
          {isAuthenticated ? (
            <>
              <Profil />
              <LogoutButton />
            </>
          ) : (
            <LoginButton />
          )}
        </header>
      </div>
    </div>
  );
}
