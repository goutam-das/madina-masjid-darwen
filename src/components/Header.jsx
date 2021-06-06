import React from "react";
import {
  Header,
  HeaderMenuContainer,
  LogoImage,
  HeaderULMenu,
  HeaderLIMenuItem,
} from "../styles";
import mmdLogo from "../images/MMD-logo-03.png";

const HeaderComponent = () => {
  return (
    <Header>
      <LogoImage src={mmdLogo} alt="MMD-logo" />
      <HeaderMenuContainer>
        <HeaderULMenu>
          <HeaderLIMenuItem>
            <a href="/" className="active">
              HOME
            </a>
          </HeaderLIMenuItem>
          <HeaderLIMenuItem>
            <a href="/">
              ABOUT
            </a>
          </HeaderLIMenuItem>
          <HeaderLIMenuItem>
            <a href="/">
              SERVICE
            </a>
          </HeaderLIMenuItem>
          <HeaderLIMenuItem>
            <a href="/">
              TIME TABLE
            </a>
          </HeaderLIMenuItem>
          <HeaderLIMenuItem>
            <a href="/">
              NEWS
            </a>
          </HeaderLIMenuItem>
          <HeaderLIMenuItem>
            <a href="/">
              ASK IMAM
            </a>
          </HeaderLIMenuItem>
          <HeaderLIMenuItem>
            <a href="/">
              MEDIA
            </a>
          </HeaderLIMenuItem>
          <HeaderLIMenuItem>
            <a href="/">
              CONTACT
            </a>
          </HeaderLIMenuItem>
          <HeaderLIMenuItem>
            <a href="/">
              DONATE
            </a>
          </HeaderLIMenuItem>
        </HeaderULMenu>
      </HeaderMenuContainer>
    </Header>
  );
};

export default HeaderComponent;
