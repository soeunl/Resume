import React from 'react';
import styled from 'styled-components';

const ProfileImage = ({ className }) => {
  return (
    <div className={className}>
      <div className="layout-width">
        <div className="tit">
          <span>RESUME</span>
          이소은
        </div>
      </div>
    </div>
  );
};

const StyledProfileImage = styled(ProfileImage)`
  background-image: url('./images/main.jpg');
  background-repeat: no-repeat;
  background-position: 50% 46%;
  background-size: 100%;
  height: 450px;
  padding: 50px 30px 10px;
  position: relative;

  .tit {
    position: absolute;
    bottom: 10px;
  }

  span {
    font-size: 1.65rem;
    margin-right: 10px;
  }
`;

export default React.memo(StyledProfileImage);
