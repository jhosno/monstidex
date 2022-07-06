import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import BgList from "../assets/main_bg.png";
import BgImg from "../assets/navi_line_block.png";
import { Link, useLocation } from "react-router-dom";


const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 75vh;
  width: 100%;
`;
const HomeList = styled.div`
  max-width: 48%;
  width: 45%;
  background: url(${BgList});
  background-size: contain;
  background-repeat: repeat-y;
  padding: 1rem 3rem;
  height: 100%;
`;
const HomeListThumbnail = styled.img`
  background: #62442c;
  border-radius: 12px;
  padding: 0.2rem;
  max-width: 3rem;
`;
const HomeListH1 = styled.h1`
  text-transform: uppercase;
  color: #5b381e;
  text-align: center;
`;
const HomeListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HomeListContent = styled.div`
display: grid ;
align-items: center ;
grid-auto-flow: row ;
grid-auto-rows: 25% ; // play with this to change height of the children, 50% will fill half
grid-template-columns: unset; // do not set template columns and rows
grid-template-rows: unset;
overflow: scroll;
`;
const HomeImg = styled.div`
  max-width: 48%;
  width: 45%;
  background: url(${BgImg});
  background-repeat: no-repeat;
  background-position: center;
  &::before {
    background: rgb(89, 54, 30);
    background: radial-gradient(
      circle,
      rgba(89, 54, 30, 1) 4%,
      rgba(137, 80, 38, 1) 19%,
      rgba(192, 158, 103, 1) 42%,
      rgba(192, 158, 103, 0) 84%
    );
    content: "";
    display: block;
    width: 46vw;
    height: 42vw;
    z-index: -1;
    position: absolute;
  }
`;
const Home = () => {
  const [monsties, setMonsties] = useState([]);
  useEffect(async () => {
    const url = "https://monstidex.herokuapp.com/monsties";

    const response = await fetch(url);
    const result = await response.json();
    setMonsties(result);
  }, []);
  return (
    <HomeContainer>
      <HomeImg>
        <h1>monsties</h1>
      </HomeImg>
      <HomeList>
        <HomeListH1>monsties</HomeListH1>
        <HomeListContent>
          {monsties.map((monstie) => (
            <Link
              to={"/monstie/" + monstie.id}
              key={monstie.id}
            >

              <HomeListItem>
                <HomeListThumbnail
                  src={`https://monstidex.herokuapp.com/${monstie.thumbnail}`}
                  alt={monstie.descrip}
                />
                <p>{monstie.monster}</p>
              </HomeListItem>
            </Link>
          ))}
        </HomeListContent>
      </HomeList>
    </HomeContainer>
  );
};

export default Home;
