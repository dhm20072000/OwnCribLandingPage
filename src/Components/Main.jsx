import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const StyledMain = styled.div`
  padding: 5rem 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  background: #ffc983;

  .topContent {
    padding: 1rem;

    .mainTitle {
      font-family: Poppins, sans-serif;
      font-size: 2em;
    }
  }

  .bottomContent {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    > * {
      flex: 0 1 350px;
      text-align: center;
    }
  }

  .mainLink {
    border: 2px solid #03989e;
    background: white;
    margin: 1rem;
    padding: 2rem;
    text-decoration: none;
    color: inherit;
    transition: all 250ms ease-in;

    &:hover {
      background: #03989e;
      .buySpan,
      .sellSpan {
        color: #ffc983;
      }
    }
  }
  // background: #03989e;

  .buySpan,
  .sellSpan {
    text-transform: uppercase;
    color: #03989e;
  }
`;

const Main = () => {
  return (
    <Fade bottom>
      <StyledMain>
        <div className="topContent">
          <h2 className="mainTitle">
            Join Us In Refactoring The World Of Real Estate, One House At A
            Time.
          </h2>
        </div>
        <div className="bottomContent">
          <Link className="mainLink" to="/buy">
            <div className="buyHouse">
              <h3>
                Looking to <span className="buySpan">Buy</span> a House?
              </h3>
            </div>
          </Link>
          <Link className="mainLink" to="/sell">
            <div className="sellHouse">
              <h3>
                Looking to <span className="sellSpan">Sell</span> a House?
              </h3>
            </div>
          </Link>
        </div>
      </StyledMain>
    </Fade>
  );
};

export default Main;
