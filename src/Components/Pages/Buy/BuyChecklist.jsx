import React from "react";
import styled from "styled-components";

const StyledChecklist = styled.div`
  .checkListItem {
    display: flex;
    align-items: center;

    input {
      margin-right: 1rem;
    }
  }

  .checklistTitle {
    text-align: center;
    margin: 1rem 0;
    font-size: 1.5em;
    color: #03989e;
  }
`;

const BuyChecklist = () => {
  return (
    <StyledChecklist>
      <h3 className="checklistTitle">Buyer Checklist:</h3>
      <div className="checkList">
        <div className="checkListItem">
          <input type="checkbox" />
          <h4 className="checkListItemDesc">Complete Profile</h4>
        </div>
        <div className="checkListItem">
          <input type="checkbox" />
          <h4 className="checkListItemDesc">Finish Landing Page</h4>
        </div>
      </div>
    </StyledChecklist>
  );
};
export default BuyChecklist;
