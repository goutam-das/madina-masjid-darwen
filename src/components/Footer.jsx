import React from "react";
import styled from "styled-components";
import {
  Footer,
  FooterMenuContainer,
  FooterDivider,
  FooterCopyrightContainer,
  FooterCopyright,
  FooterMenu,
  FooterMenuItemLink,
  FooterMenuItemText,
} from "../styles";
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
          {/* <FooterMenu>
            <FooterMenuItemLink>Facebook</FooterMenuItemLink>
            <FooterMenuItemLink>Pinterest</FooterMenuItemLink>
            <FooterMenuItemLink>Instagram</FooterMenuItemLink>
            <FooterMenuItemLink>Twitter</FooterMenuItemLink>
          </FooterMenu> */}
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
