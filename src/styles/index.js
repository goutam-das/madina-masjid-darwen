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

export const Footer = styled.footer`
  background-color: #232323;
  color: #fff;
`;

export const FooterMenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 36px 4%;
`;
export const FooterCopyrightContainer = styled.div`
  padding: 32px 0;
  display: flex;
  justify-content: center;
`;
export const FooterCopyright = styled.p``;
export const FooterDivider = styled.div`
  height: 1px;
  border-top: 1px solid rgba(87, 166, 143, 0.2);
  width: 100%;
`;

export const FooterMenu = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FooterMenuItem = styled.li`
  margin: 4px auto;
  h2 {
    font-size: 1.5em;
    line-height: 1.35em;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 20px;
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }
  &:hover {
    a {
      text-decoration: underline;
      color: var(--base-color);
      cursor: pointer;
    }
  }
`;

export const FooterMenuItemTitle = ({ children }) => (
  <FooterMenuItem>
    <h2>{children}</h2>
  </FooterMenuItem>
);

export const FooterMenuItemLink = ({ children, ...rest }) => (
  <FooterMenuItem>
    <a {...rest}>{children}</a>
  </FooterMenuItem>
);

export const FooterMenuItemText = ({ children }) => (
  <FooterMenuItem>
    <p>{children}</p>
  </FooterMenuItem>
);
