import React from "react";
import styled from "styled-components";
import { FaInbox } from "react-icons/fa";

const StyledNotifications = styled.div`
  padding: 2rem;
  //   grid-column-start: 2;
  //   grid-column-end: 3;
  //   grid-row-start: 1;
  //   grid-row-end: 2;

  .notificationTitle {
    text-align: center;
    margin: 1rem 0;
    font-size: 1.5em;
    color: #03989e;
  }

  .listingsTitle {
    text-align: center;
    margin: 1rem 0;
    font-size: 1.5em;
    color: #03989e;
  }

  .newNotifications {
    padding: 1rem;
    font-size: 1.3em;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #03989e;
    text-align: center;
    transition: all 500ms ease;
    cursor: pointer;

    span {
      color: #ffbd59;
      font-size: 1.5em;
    }

    &:hover {
      transform: scale(1.05);
    }
  }

  .totalListings {
    margin-top: 1rem;
    padding: 1rem;
    font-size: 1.3em;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #03989e;
    text-align: center;

    span {
      color: #ffbd59;
      font-size: 1.5em;
      margin-left: 1rem;
    }
  }

  .icon {
    margin: 0.75rem 1rem 0 0;
  }
`;

const Notifications = () => {
  return (
    <StyledNotifications>
      <div className="notifications">
        <h3 className="notificationTitle">Notifications:</h3>
        <div className="newNotifications">
          <div className="icon">
            <FaInbox />
          </div>
          <h4>
            You have <span className="notifNumber">10</span> new notifications!
          </h4>
        </div>
      </div>

      <div className="listings">
        <h3 className="totalListings">
          Total Current Listings: <span>10,240</span>
        </h3>
      </div>
    </StyledNotifications>
  );
};

export default Notifications;
