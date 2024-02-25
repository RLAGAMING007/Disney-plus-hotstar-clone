import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Nav>
        <Logo src="/images/logo.svg" />

        <NavMenu>
          <Link to={"/"}>
            <img src="/images/home-icon.svg" alt="" />
            <span>HOME</span>
          </Link>
          <Link>
            <img src="/images/search-icon.svg" alt="" />
            <span>SEARCH</span>
          </Link>
          <Link>
            <img src="/images/watchlist-icon.svg" alt="" />
            <span>WATCHLIST</span>
          </Link>
          <Link>
            <img src="/images/originals-icon.svg" alt="" />
            <span>ORIGINALS</span>
          </Link>
          <Link>
            <img src="/images/movies-icon.svg" alt="" />
            <span>MOVIES</span>
          </Link>
          <Link>
            <img src="/images/series-icon.svg" alt="" />
            <span>SERIES</span>
          </Link>
        </NavMenu>
        <UserImg src="/images/laksh.jpeg" />
      </Nav>
    </>
  );
};

export default Header;

const Nav = styled.nav`
  overflow-x: hidden;
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0px 12px;
    cursor: pointer;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      color: white;
      position: relative;
      &::after {
        content: " ";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.2, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span::after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;

const UserImg = styled.img`
  object-fit: cover;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
