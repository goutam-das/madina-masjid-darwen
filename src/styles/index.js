import React from "react";
import styled from "styled-components";

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
`;

export const Main = styled.main``;

export const HeaderMenuContainer = styled.div`
  height: 100%;
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

export const LogoImage = styled.img`
  height: calc(var(--header-height) * 0.85);
  width: auto;
  object-fit: contain;
`;

export const BackgroundImage = styled.div`
  padding: 0 4%;
  min-height: 640px;
  grid-gap: 5%;
  display: grid;
  grid-template-columns: 45% 50%;
  ${({ src }) =>
    src &&
    `
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: scroll;
    background-image: url(${src});
  `}
  position: relative;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;


