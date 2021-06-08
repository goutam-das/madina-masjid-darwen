import React from "react";
import styled from "styled-components";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import pinterest from "../images/pinterest.png";
import twitter from "../images/twitter.png";

const FooterComponent = () => {
  return (
    <Footer>
      <FooterMenuContainer>
        <Grid>
          <Title>Menu</Title>
          <FooterMenu>
            <FooterMenuItemLink>About</FooterMenuItemLink>
            <FooterMenuItemLink>Events</FooterMenuItemLink>
            <FooterMenuItemLink>News</FooterMenuItemLink>
            <FooterMenuItemLink>Media</FooterMenuItemLink>
            <FooterMenuItemLink>Contact</FooterMenuItemLink>
          </FooterMenu>
        </Grid>
        <Grid>
          <Title>Services</Title>
          <FooterMenu>
            <FooterMenuItemLink>Marriage</FooterMenuItemLink>
            <FooterMenuItemLink>Madrasah</FooterMenuItemLink>
            <FooterMenuItemLink>
              Community Engagement And Education
            </FooterMenuItemLink>
            <FooterMenuItemLink>Congregational Prayers</FooterMenuItemLink>
            <FooterMenuItemLink>School Visits</FooterMenuItemLink>
            <FooterMenuItemLink>Funeral</FooterMenuItemLink>
          </FooterMenu>
        </Grid>
        <Grid>
          <Title>Contact</Title>
          <FooterMenu>
            <FooterMenuItemLink href="tel:07912 781392">
              07912 781392
            </FooterMenuItemLink>
            <FooterMenuItemLink href="mailto:info@darwenmosque.co.uk">
              info@darwenmosque.co.uk
            </FooterMenuItemLink>
            <FooterMenuItemText>
              21-23 Victoria Street,
              <br />
              Darwen, BB3 3HB
            </FooterMenuItemText>
          </FooterMenu>
        </Grid>
        <Grid>
          <Title>Social</Title>
          <SocialLinks />
        </Grid>
      </FooterMenuContainer>
      <FooterDivider />
      <FooterCopyrightContainer>
        <FooterCopyright>
          Copyright © 2021 by Vinn Corp All rights reserved.
        </FooterCopyright>
      </FooterCopyrightContainer>
    </Footer>
  );
};

export default FooterComponent;

const SocialLinks = () => {
  return (
    <SocialLinksContainer>
      <a href="/">
        <img src={facebook} alt="Facebook" />
      </a>
      <a href="/">
        <img src={pinterest} alt="Pinterest" />
      </a>
      <a href="/">
        <img src={instagram} alt="Instagram" />
      </a>
      <a href="/">
        <img src={twitter} alt="Twitter" />
      </a>
    </SocialLinksContainer>
  );
};

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  img {
    height: 32px;
    width: 32px;
  }

  a {
    text-decoration: none;
    margin: 0 4px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 48px auto;
`;
const Title = styled.h2`
  margin: 0;
  text-align: center;
  font-size: 25px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.footer`
  background-color: #232323;
  color: #fff;
`;

export const FooterMenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 36px 4%;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
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
