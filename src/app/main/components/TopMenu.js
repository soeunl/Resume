import React from 'react';
import { Header } from 'react-fullpage';
import styled from 'styled-components';

const StyledNav = styled.nav`
  width: 100%;
  height: 55px;
  background: #fff;
  border-bottom: 1px solid #000;

  .layout-width {
    display: flex;

    a {
      line-height: 49px;
      padding: 0 30px;
      font-size: 1.75rem;
    }

    @media all and (max-width: 420px) {
      a {
        padding: 0 15px;
        font-size: 1.65rem;
        letter-spacing: -0.5px;
      }
    }
  }
`;

const TopMenu = () => {
  return (
    <Header>
      <StyledNav>
        <div className="layout-width">
          <a href="#sectionOne">INFO & ABOUT</a>
          <a href="#sectionTwo">EXPERIENCE</a>
          <a href="#sectionThree">PORTFOLIO</a>
        </div>
      </StyledNav>
    </Header>
  );
};

export default React.memo(TopMenu);
