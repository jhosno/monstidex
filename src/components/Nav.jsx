import styled from "@emotion/styled";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = styled.div`
background: #5B381E;
`

const Nav = () => {
  const location = useLocation();
  const activeUrl = location.pathname;
  const textgray = "color: lightgray;";
  const textpurple = "color: purple;";
  return (
    <Navbar>
      <Link
        to="/"
        className={`enlaces ${
          activeUrl === "/" ? "enlace-activo" : "enlace-normal"
        } `}
      >
        Home
      </Link>
      <Link
        to="/about"
        className={`enlaces ${
          activeUrl === "/about" ? "enlace-activo" : "enlace-normal"
        } `}
      >
        About
      </Link>
      <Link
        to="/Doc"
        className={`enlaces ${
          activeUrl === "/Doc" ? "enlace-activo" : "enlace-normal"
        } `}
      >
        Documentation
      </Link>
    </Navbar>
  );
};

export default Nav;
