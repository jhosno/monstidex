import styled from '@emotion/styled';
import React from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";

import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Search from '../components/Search';


const Content = styled.section`
display:grid;
`


const Main = () => {
    return (
        <Content>
            <Nav></Nav>
            <Search></Search>
            <Outlet></Outlet>
            
            <Footer></Footer>
        </Content>
    );
};

export default Main;