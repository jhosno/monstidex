import styled from '@emotion/styled';
import { useState, useEffect } from "react";

import BgList from "../assets/main_bg.png";
import BgImg from "../assets/navi_line_block.png";
import { useParams } from 'react-router-dom';

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

const Monstie = () => {
  const { id } = useParams()

  const [monstie, setMonstie] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(!loading)
    const getItem = async () => {
      try {
        const url = `https://monstidex.herokuapp.com/monsties/${id}`
        const consulta = await fetch(url)
        const resultado = await consulta.json()
        setMonstie(resultado)

        console.log(resultado)

      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getItem()
  }, [])
  return (
    <HomeContainer>
      <HomeImg>
        <img
          src={`https://monstidex.herokuapp.com/${monstie.img}`}
          alt={monstie.descrip}
        />

      </HomeImg>
      <HomeList>
        <HomeListH1>        <img
          src={`https://monstidex.herokuapp.com/${monstie.thumbnail}`}
          alt={monstie.descrip}
        /> {monstie.monster} Stats</HomeListH1>
        <p>
          {monstie.tendency}

        </p>
        <p>
          {monstie.size}
        </p>
        <p>

          {monstie.type}
        </p>
        <p>
          {monstie.descrip}

        </p>

      </HomeList>
    </HomeContainer>
  );
};

export default Monstie;