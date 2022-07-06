import React from "react";
import styled from "@emotion/styled";
import SearchIcon from "../assets/search.png";

const InputSearch = styled.div`
  background: red;
  padding: 0.5rem;
`;

const SearchBtn = styled.img`
  max-height: 1.5rem;
  max-width: 1.5rem;
  padding: 0.5rem;
  background: #ca2f3d;
  &:hover {
    padding: 0.7rem;
  }
`;
const SearchSelect = styled.select``;

const Search = ({ monsties }) => {
  return (
    <InputSearch>
      <SearchSelect>
        <option value="">selecciona tu mosntie</option>

      </SearchSelect>
      <SearchBtn src={SearchIcon} />
    </InputSearch>
  );
};

export default Search;
