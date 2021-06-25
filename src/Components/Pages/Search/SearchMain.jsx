import React from "react";
import styled from "styled-components";

const StyledSearch = styled.div``;

const SearchMain = (props) => {
  console.log(props.location.state);
  return (
    <StyledSearch>
      <h1>
        Searching For Houses In:{" "}
        <span style={{ color: "blue" }}>{props.location.state}</span>
      </h1>
    </StyledSearch>
  );
};

export default SearchMain;
