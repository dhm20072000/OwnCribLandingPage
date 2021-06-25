import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const fadeSlideUp = keyframes`
0%{
    opacity: 0;
    transform: translateY(100%);
},
100%{
    opacity: 1;
    transform: translateY(0);
}`;

const StyledCard = styled.div`
  animation: ${fadeSlideUp} 1s ease-out;
  padding: 2rem;
  border: 1px solid black;
  //   border-radius: 1rem;

  &:nth-child(1) {
    background: #03989e;
    position: relative;

    &:before {
      content: "Best Value";
      font-weight: 900;
      font-size: 1.2em;
      position: absolute;
      top: -10px;
      left: 50%;
      transform: translateX(-50%);
      padding: 5px;
      background: #ffbd59;
      border-radius: 3px;
    }
  }

  .cardTitle {
    font-family: Poppins, sans-serif;
    text-transform: uppercase;
  }

  .cardPrice {
    position: relative;
    font-size: 5rem;
    &:before {
      content: "$";
      font-size: 1rem;
      font-family: Open Sans, sans-serif;
      font-weight: 400;
      position: absolute;
      top: 1rem;
      left: -0.5rem;
    }
  }

  .cardValidation {
    opacity: 0.8;
    margin-top: 1rem;
    font-size: 12px;
    font-weight: 400;
  }

  .cardBenefits {
    list-style: none;
  }

  .cardBenefit {
    font-family: Poppins, sans-serif;
    position: relative;
    padding: 1rem;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
    }
  }

  .selectBtn {
    position: relative;
    text-transform: uppercase;
    font-family: Poppins, sans-serif;
    border: 1px solid black;
    outline: none;
    width: 60%;
    padding: 10px 20px;
    margin: 1rem 0;
    cursor: pointer;
    background: rgba(255, 189, 89, 0.7);

    &:hover {
      background: rgba(255, 189, 89, 1);
    }

    .selectLink {
      text-decoration: none;
      color: inherit;
    }
  }
`;

const Card = ({
  animationDelay,
  cardTitle,
  cardPrice,
  cardSavings,
  cardValidation,
  cardBenefits,
}) => {
  const renderCardBenefits = cardBenefits.map((cardBenefit, idx) => {
    return <li className="cardBenefit">{cardBenefit}</li>;
  });

  return (
    <StyledCard>
      <h3 className="cardTitle">{cardTitle}</h3>
      <span className="cardPrice">{cardPrice}</span>
      <h4 className="cardSavings">{cardSavings}</h4>
      <h4 className="cardValidation">{cardValidation}</h4>
      <Link className="selectLink" to="/">
        <button className="selectBtn">Select</button>
      </Link>
      <ul className="cardBenefits">{renderCardBenefits}</ul>
    </StyledCard>
  );
};

export default Card;
