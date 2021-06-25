import React from "react";
import styled from "styled-components";

const StyledMessages = styled.div`
  // #ffbd59
  // #03989e

  .messagesTitle {
    text-align: center;
    margin: 1rem 0;
    font-size: 1.5em;
    color: #03989e;
  }

  .message {
    display: flex;
    align-items: center;
  }

  .newMessage {
    &:before {
      content: "New";
    }
  }

  .oldMessage {
    &:before {
      content: "Old";
    }
  }

  .messageStatus {
    margin: 0 1rem 0 0;
    text-align: center;
    border: 1px solid black;
    background: #03989e;
    width: 50px;
  }
`;

const Messages = () => {
  return (
    <StyledMessages>
      <h3 className="messagesTitle">Messaging Center: </h3>
      <div className="message">
        <div className="messageStatus newMessage" />
        <h4 className="messageDesc">
          Seller Message: Yo, Respond To My Message
        </h4>
      </div>
      <div className="message">
        <div className="messageStatus newMessage" />
        <h4 className="messageDesc">
          Seller Message: Yo, Respond To My Message
        </h4>
      </div>
      <div className="message">
        <div className="messageStatus oldMessage" />
        <h4 className="messageDesc">
          Seller Message: Hello Nice To Meet You, I Am Message.
        </h4>
      </div>
      <div className="message">
        <div className="messageStatus oldMessage" />
        <h4 className="messageDesc">
          Seller Message: Hello Nice To Meet You, I Am Message.
        </h4>
      </div>
    </StyledMessages>
  );
};

export default Messages;
