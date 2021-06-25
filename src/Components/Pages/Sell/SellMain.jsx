import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "../../Card";

const StyledSell = styled.div`
  //   height: 100vh;

  .sellerTitle {
    text-align: center;
    font-family: Poppins, sans-serif;
    font-weight: 700;
    font-size: 4rem;
    color: #03989e;
    margin: 4rem 0;
  }

  .sellerCards {
    padding: 0 20px;
    max-width: 1600px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    grid-gap: 2rem;
    text-align: center;
  }
`;

const cardValidation = "Valid for one year";

const sellerPackages = [
  {
    cardTitle: "Basic Listing",
    cardPrice: 500,
    cardSavings: "Average Savings: $15,460",
    cardValidation: cardValidation,
    cardBenefits: [
      "Listing Placed on Zillow",
      "Full Access To Real Estate Contracts",
      "Real Estate Data In Your Area",
      "Book Showings/Accep Offers Directly",
      "Access To Learning Center - Videos To Explain Every Step",
    ],
  },
  {
    cardTitle: "Certified Listing",
    cardPrice: 1000,
    cardSavings: "Average Savings: $14,960",
    cardValidation: cardValidation,
    cardBenefits: [
      "All Benefits of Basic Seller Package",
      "Front End Appraisal - Guarantee Your Value",
    ],
  },
  {
    cardTitle: "Premium Listing",
    cardPrice: 1500,
    cardSavings: "Average Savings: $14,460",
    cardValidation: cardValidation,
    cardBenefits: [
      "Everything Included in Certified Listing Package",
      "Media Package",
      "3D Tour",
      "Listing Photos",
      "Drone Pics/Videos",
    ],
  },
];

const renderSellerCards = sellerPackages.map((card, idx) => {
  return (
    <Card
      animationDelay={200 * idx}
      key={idx}
      cardTitle={card.cardTitle}
      cardPrice={card.cardPrice}
      cardSavings={card.cardSavings}
      cardValidation={card.cardValidation}
      cardBenefits={card.cardBenefits}
    />
  );
});

const SellMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <StyledSell>
      <h1 className="sellerTitle">Seller Packages</h1>
      <div className="sellerCards">{renderSellerCards}</div>
    </StyledSell>
  );
};

export default SellMain;
