import React, { useEffect } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

import BuyerInfo from "./BuyDash";
import Messages from "./Messages";
import BuyChecklist from "./BuyChecklist";
import BuyListings from "./BuyListings";
import Notifications from "./Notifications";

const StyledBuy = styled.div`
  //   height: 100vh;

  // Grid Layout
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 700px));
  //   grid-template-rows: 0.25fr 0.25fr 1fr;
  grid-gap: 1rem;

  max-width: 1600px;
  margin: 3rem auto;

  .buyerTitle {
    text-align: center;
    font-family: Poppins, sans-serif;
    font-weight: 700;
    font-size: 4rem;
    color: #03989e;
    margin: 4rem 0;
  }

  //GRID QUERY
  //   display: grid;
  //   grid-template-columns: repeat(2, minmax(330px, 1fr));
  //   grid-template-rows: 0.25fr 0.25fr 1fr;
  //   grid-gap: 1rem;

  @media screen and (max-width: 1200px) {
  }
`;

const BuyMain = () => {
  //Scrolls to Top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <StyledBuy>
      <Fade left>
        <BuyerInfo />
      </Fade>
      <Fade right>
        <Notifications />
      </Fade>
      <Fade up>
        <Messages />
        <BuyChecklist />
      </Fade>
      <BuyListings />
    </StyledBuy>
  );
};

export default BuyMain;
