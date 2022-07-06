import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import styled from "@emotion/styled";

import Main from "./layouts/Main";

import Monstie from "./pages/Monstie";
import Home from "./pages/Home";
import Doc from "./pages/Doc";
import About from "./pages/About";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route index element={<Home  />}/>
          <Route path="doc" element={<Doc />}></Route>
          <Route path="monstie/:id" element={<Monstie />}/>

          <Route path="about" element={<About />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
