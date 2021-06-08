import React, { useState } from "react";
import styled from "styled-components";
import mmdLogo from "../images/MMD-logo-03.png";
import menu from "../images/menu.png";

const HeaderComponent = () => {
  const [open, setOpen] = useState(false);
  return (
    <Header>
      <Menu onClick={() => setOpen((x) => !x)}>
        <MenuImage src={menu} />
      </Menu>
      <LogoImage src={mmdLogo} alt="MMD-logo" />
      <HeaderMenuContainer open={open}>
        <Overlay onClick={() => setOpen(false)} />
        <HeaderULMenu>
          <HeaderLIMenuItem>
            <a href="/" className="active">
              HOME
            </a>
          </HeaderLIMenuItem>
          <HeaderLIMenuItem>
            <a href="/">ABOUT</a>
          </HeaderLIMenuItem>
          <HeaderLIMenuItem>
            <a href="/">SERVICE</a>
          </HeaderLIMenuItem>
          <HeaderLIMenuItem>
            <a href="/">TIME TABLE</a>
          </HeaderLIMenuItem>
          <HeaderLIMenuItem>
            <a href="/">NEWS</a>
          </HeaderLIMenuItem>
          <HeaderLIMenuItem>
            <a href="/">ASK IMAM</a>
          </HeaderLIMenuItem>
          <HeaderLIMenuItem>
            <a href="/">MEDIA</a>
          </HeaderLIMenuItem>
          <HeaderLIMenuItem>
            <a href="/">CONTACT</a>
          </HeaderLIMenuItem>
          <HeaderLIMenuItem>
            <a href="/">DONATE</a>
          </HeaderLIMenuItem>
        </HeaderULMenu>
      </HeaderMenuContainer>
    </Header>
  );
};

export default HeaderComponent;

const Overlay = styled.div`
  @media (max-width: 1024px) {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }
`;

const Menu = styled.button`
  background-color: transparent;
  border: 0;
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const MenuImage = styled.img`
  height: calc(var(--header-height) * 0.6);
`;

export const HeaderULMenu = styled.ul`
  display: flex;
  list-style: none;
  height: inherit;
  padding: 0;
  margin: 0;
`;

export const HeaderLIMenuItem = styled.li`
  display: flex;
  flex: 1;
  min-width: fit-content;
  margin: 0 10px;

  a {
    flex: 1;
    font-size: 16px;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 0 10px;
    color: #fff;
    text-decoration: none;
    position: relative;

    &.active,
    &:hover {
      color: var(--base-color);
      &::after {
        content: "";
        position: absolute;
        bottom: -2px;
        width: 100%;
        border-bottom: 2px solid var(--base-color);
      }
    }
  }
`;

export const HeaderMenuContainer = styled.div`
  height: 100%;
  @media (max-width: 1024px) {
    display: none;
    background-color: #232323;
    position: fixed;
    left: -240px;
    bottom: 0;
    top: 0;
    width: 240px;
    transition: left 0.3s ease-in-out;
    ${({ open }) =>
      open &&
      `
      display: block;
      left: 0;
    `}
  }
`;

export const LogoImage = styled.img`
  height: calc(var(--header-height) * 0.85);
  width: auto;
  object-fit: contain;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  color: #ffffff;
  background-color: #232323;
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
  height: var(--header-height);
  padding: 0 4%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;

  @media (max-width: 1240px) {
    padding: 0 10px;
    ${HeaderLIMenuItem} {
      a {
        font-size: 14px;
        padding: 0 2px;
      }
    }
  }

  @media (max-width: 1024px) {
    --header-height: 64px;
    padding: 0;
    justify-content: flex-start;
    ${HeaderULMenu} {
      margin-top: var(--header-height);
      flex-direction: column;
    }
    ${HeaderLIMenuItem} {
      flex: 0;
      a {
        height: 40px;
        &.active,
        &:hover {
          &::after {
            border: 0;
            border-left: 2px solid var(--base-color);
            height: 75%;
            top: 7.5%;
          }
        }
      }
    }
  }
`;
