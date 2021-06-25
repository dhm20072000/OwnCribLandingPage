/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const StyledFooter = styled.div`
  margin-top: 5rem;
  padding: 2rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(254, 192, 100, 1);
  font-family: Open Sans, sans-serif;
  font-size: 1.1em;
  // font-weight: bold;
  flex-wrap: wrap;

  > * {
    flex: 1 0 33%;
  }

  .infoFooter {
    display: flex;
    flex-wrap: wrap;
    list-style: none;

    li {
      padding: 1rem;
    }
  }

  .socials {
    display: flex;
    justify-content: space-evenly;
    padding: 1rem;
  }

  .legalFooter {
    display: flex;
    justify-content: flex-end;
    list-style: none;

    li {
      padding: 1rem;
    }
  }

  .emailFooter {
    color: #03989e;
    cursor: pointer;
    text-decoration: none;
  }

  .socials{

    a{
      color: #000000;
    }

    a:visisted{
      color: #000000;
    }
  }

`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="leftFooter">
        <ul className="infoFooter">
          <li>
            <a className="emailFooter" href="mailto:rcarpetender@owncrib.com">
              rcarpenter@owncrib.com
            </a>
          </li>
          <li>517-881-1324</li>
        </ul>
      </div>
      <div className="socials">
        <a href="https://www.facebook.com/OwnCrib" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com/owncrib" target="_blank">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/in/owncrib" target="_blank">
          <FaLinkedinIn />
        </a>
        <a href="https://www.instagram.com/owncrib/" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://www.pinterest.com/OwnCrib/" target="_blank">
          <FaPinterest />
        </a>
      </div>

      <div className="rightFooter">
        <ul className="legalFooter">
          <li>
            <a>Terms and Conditions</a>
          </li>
          <li>
            <a>Privacy Policy</a>
          </li>
          <li>©2021 by OwnCrib.com</li>
        </ul>
      </div>
    </StyledFooter>
  );
};

export default Footer;
