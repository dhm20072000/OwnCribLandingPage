/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
//eslint-disable-entire-file
// eslint-disable-next-line
import React, { useState,useContext,useEffect } from "react";
import styled from "styled-components";
import noSlogan from "../Assets/noSlogan.png";
import { IoPersonSharp, IoSearchSharp } from "react-icons/io5";

import { Link } from "react-router-dom";
import UserContext from "../store/user-context";
const StyledNav = styled.div`
// width: 100%;
// position: fixed;
// z-index: 10;
// box-shadow: 0 1px 7px 0 rgb(0 0 0 / 30%);
// background: white;

  position: relative;

  .navLinks {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    list-style: none;
  }

  .navLink {
    font-family: Montserrat;
    font-weight: bolder;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.1s ease;

    display: flex;
    align-items: center;

    &:hover {
      color: #03989e;
    }
    animation: 1s ease-in 0s 1 linksFadeIn;
    
    > *{
      text-decoration: none;
      color: inherit;      
    }
  }

  .leftNav {
    display: flex;
    align-items: center;
    .navLink {
      padding: 0 0.8rem;
    }
  }

  .rightNav {
    display: flex;
    align-items: center;
    
    li{
      padding 0 0.8rem;
    }

    .navIcon{
      font-size: 2rem;
      display: flex;
      align-items: center;
    }

  }

  .logoContainer {
    margin-top: 0.5rem;
    max-width: 150px;
    .logoImg {
      width: 75%;
      height: auto;
    }
  }

  @keyframes linksFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .navSearch{
    border-radius: 1rem;
    border: 1px solid  #03989e;
    padding: .5rem;
    outline: none;
  }

  .avatarImage{
    width: 35px;
    height: 35px;
  }

`;

const Nav = () => {

  const userCtx = useContext(UserContext);

  //const[name,setName] = useState('');
  const [search, setSearch] = useState("");
  //const {email} = userCtx;

  // useEffect(() => {
  //   setName(userCtx.email.split('@')[0]);
  // },[email]);

  return (
    <StyledNav>
      <ul className="navLinks">
        <div className="leftNav">
          <li className="navLink">
            <Link to="/">Home</Link>
          </li>
          <li className="navLink">
            <Link to="/buy">Buying</Link>
          </li>
          <li className="navLink">
            <Link to="/sell">Selling</Link>
          </li>
          <li className="navLink">
            <Link to="/sell">Services</Link>
          </li>
          <li className="navLink">
            <Link to="/listing">Listings</Link>
          </li>
        </div>
        <div className="logoContainer">
          <Link to="/">
            <img className="logoImg" src={noSlogan} alt="Logo" />
          </Link>
        </div>
        <div className="rightNav">
          {userCtx.isLoggedIn && <li className="navLink">
                                  <Link to="/">Dashboard</Link>
                                </li>}
          {!userCtx.isLoggedIn ?  
            <li className="navLink">
              <Link to="/login">Login</Link>
            </li> :
            <li className="navLink">
              <Link onClick={userCtx.onLogout} to="/">Logout</Link>
            </li>
          }
          {
            userCtx.isLoggedIn && 
            <li className="navLink">
              <Link to="/">Hi {userCtx.email.split('@')[0]}!</Link>
            </li>
          }
          <li className="navLink">
            {userCtx.isLoggedIn ?
              <Link to="/login" className="navIcon">
                <img className='avatarImage' src="images/avatar.png" alt="" />
              </Link>
              :
              <Link to="/login" className="navIcon">
                <IoPersonSharp />
              </Link>
            }
          </li>
          {/* <input
            placeholder="City, State or ZipCode"
            className="navSearch hidden"
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          /> */}
          {/* <li className="navLink">
            <Link
              to={{ pathname: "/search", state: search }}
              className="navIcon"
            >
              <IoSearchSharp />
            </Link>
          </li> */}
        </div>
      </ul>
    </StyledNav>
  );
};

export default Nav;
