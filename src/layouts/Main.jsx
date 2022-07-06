import styled from '@emotion/styled';
import React from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";

import Footer from '../components/Footer';
import Nav from '../components/Nav';
//import Search from '../components/Search';


const Content = styled.section`
display:grid;
grid-template-rows : 6% 1fr 15%;
height: 100vh;
`


const Main = () => {
    return (
        <Content>
            <Nav></Nav>
           {/* <Search monsties = {monsties}></Search>*/}
            <Outlet></Outlet>
            
            <Footer></Footer>
        </Content>
    );
};

export default Main;