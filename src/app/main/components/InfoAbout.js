import React from 'react';
import { Section } from 'react-fullpage';
import { FcLike } from 'react-icons/fc';
import ProfileImage from './ProfileImage';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 51px;

  .inner {
    display: flex;

    * {
    width 0;
    flex-grow: 1;
    flex-wrap: wrap;
    }

    * + * {
    margin-left: 10px;
    }
  }
`;

const InfoAbout = () => {
  return (
    <Section>
      <Wrapper>
        <ProfileImage />
        <div className="layout-width inner">
          <h1>
            <FcLike />
            RESUME
          </h1>
        </div>
      </Wrapper>
    </Section>
  );
};

export default React.memo(InfoAbout);
