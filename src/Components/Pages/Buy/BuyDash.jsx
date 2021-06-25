import React from "react";
import styled from "styled-components";

// #03989e
// #ffbd59
const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  flex-wrap: wrap;

  * > {
    flex: 1 1 50%;
  }

  .profileTitle {
    text-align: center;
    margin: 1rem 0;
    font-size: 1.5em;
    color: #03989e;
    // border: 2px solid #ffbd59;
  }

  .buyerName {
    text-align: center;
    font-size: 2em;
    margin: 1rem 0;
  }

  .leftInfo {
    .buyerInfo {
      h5 {
        font-size: 1em;
        color: #03989e;
        margin: 1rem;

        span {
          font-family: Open Sans, sans-serif;
          color: black;
        }
      }
    }
  }

  .rightInfo {
    .infoBox {
      background: #ffbd59;

      h5 {
        padding: 0.5rem;
        font-size: 1em;
        margin: 1rem;

        span {
          color: #03989e;
          font-family: Open Sans, sans-serif;
          font-weight: bolder;
          font-size: 1.1em;
        }
      }
    }
  }

  .editProfileBtn {
    padding: 10px 20px;
    background: white;
    cursor: pointer;
    border: 1px solid #03989e;
    outline: none;
    font-family: Poppins, sans-serif;
    font-weight: bold;
    transition: all 200ms ease-in;

    &:hover {
      background: #ffbd59;
    }
  }
`;

const BuyerInfo = () => {
  return (
    <StyledInfo>
      <div className="leftInfo">
        <h3 className="profileTitle">Your Profile: </h3>
        <h4 className="buyerName">John Doe</h4>
        <div className="buyerInfo">
          <h5>
            Address: <span>His House</span>
          </h5>
          <h5>
            Phone: <span>His Number</span>
          </h5>
          <h5>
            Email: <span>His Email</span>
          </h5>
          <h5>
            SSN: <span>His SSN</span>
          </h5>
          <h5>
            Account Rep: <span>His Account Rep</span>
          </h5>
        </div>
        <button className="editProfileBtn">Edit</button>
      </div>
      <div className="rightInfo">
        <div className="infoBox">
          <h5>
            Pre-Approval: <span>$100.00</span>
          </h5>
        </div>
        <div className="infoBox">
          <h5>
            E-Deposit: <span>$20.00</span>
          </h5>
        </div>
        <div className="infoBox">
          <h5>
            Insurance: <span>His Insurance</span>
          </h5>
        </div>
        <div className="infoBox">
          <h5>
            Inspector: <span>His Inspector</span>
          </h5>
        </div>
      </div>
    </StyledInfo>
  );
};

export default BuyerInfo;
