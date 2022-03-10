import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "@emotion/styled";


import Main from "./layouts/Main";

import Monstie from "./pages/Monstie";
import Home from "./pages/Home";
import Doc from "./pages/Doc";
import About from "./pages/About";


function App() {
  const [monsties, setMonsties] = useState({});
  useEffect(async () => {
    const url = "https://monstidex.herokuapp.com/monsties";

    const response = await fetch(url);
    const result = await response.json();
    setMonsties(result);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Main  />}>
          <Route index element={<Home />} ></Route> 
          <Route path="doc" element={<Doc />}></Route> 
          <Route path="about" element={<About />}></Route> 
          <Route path=":id" element={<Monstie />}></Route> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
