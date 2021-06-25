import React from "react";
import styled from "styled-components";

import house from "../../../Assets/house.jpg";
import house2 from "../../../Assets/house2.jpg";
import house3 from "../../../Assets/house3.jpg";

const StyledListings = styled.div`
  grid-column: 2 / span 1;
  grid-row: 2 / span 2;

  //QUERY
  @media screen and (max-width: 1200px) {
    grid-column: 1;
    grid-row: 5;
  }

  .listingTitle {
    text-align: center;
    margin: 1rem 0;
    font-size: 1.5em;
    color: #03989e;
  }

  .allListings {
    display: grid;
    grid-template-rows: 15vw 15vw 15vw;
    grid-gap: 1rem;
  }

  .listing {
    position: relative;

    .overlay {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      opacity: 0;
      display: flex;
      justify-content: center;
      flex-flow: column;
      align-items: center;
      background: rgba(0, 0, 0, 0.5);
      transition: all 250ms ease;

      &:hover {
        opacity: 1;
      }

      > * {
        transform: translateY(20px);
        transition: all 250ms ease;
      }

      &:hover > * {
        transform: translateY(0);
      }
    }

    h3 {
      text-transform: uppercase;
      color: #03989e;
      font-size: 2rem;
    }

    h4,
    h5 {
      color: white;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const BuyListings = () => {
  return (
    <StyledListings>
      <h3 className="listingTitle">Suggested Listings:</h3>
      <div className="allListings">
        <div className="listing">
          <div className="overlay">
            <h3>White House</h3>
            <h4>Price: $10.00</h4>
            <h5>1000sqft</h5>
          </div>
          <img src={house} alt="" />
        </div>
        <div className="listing">
          <div className="overlay">
            <h3>White House</h3>
            <h4>Price: $10.00</h4>
            <h5>1000sqft</h5>
          </div>
          <img src={house2} alt="" />
        </div>
        <div className="listing">
          <div className="overlay">
            <h3>White House</h3>
            <h4>Price: $10.00</h4>
            <h5>1000sqft</h5>
          </div>
          <img src={house3} alt="" />
        </div>
      </div>
    </StyledListings>
  );
};
export default BuyListings;
