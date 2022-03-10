import styled from "@emotion/styled";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Alink = styled.a`
font-size: 1.5rem;
padding: .3rem 5rem
`


const Nav = () => {
  const location = useLocation();
  const activeUrl = location.pathname;
  const textgray = "color: lightgray;"
  const textpurple = "color: purple;"
  return (
    <div>
      <Link
        to="/"
        className={`${
          activeUrl === "/add" ? "text-violet-400 font-bold" : "text-gray-50"
        } text-md py-3 hover:text-sky-500 hover:font-bold`}
      >
        Home
      </Link>
      <Link
        to="/about"
        className={`${
          activeUrl === "/about" ? "text-violet-400 font-bold" : "text-gray-50"
        } text-md py-3 hover:text-sky-500 hover:font-bold`}
      >
        About
      </Link>
      <Link
        to="/Doc"
        className={`${
          activeUrl === "/add" ? "text-violet-400 font-bold" : "text-gray-50"
        } text-md py-3 hover:text-sky-500 hover:font-bold`}
      >
        Documentation
      </Link>
    </div>
  );
};

export default Nav;
