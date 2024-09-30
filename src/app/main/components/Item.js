import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.dev`
  h2 {
    display: flex;
    align-items: center;

    .tit {
      font-size: 1.4rem;
    }
  }
`;

const Item = ({ childre, title }) => {
  return (
    <Wrapper>
      <h2>
        <div className="tit">{title}</div>
        <div className="bar"></div>
      </h2>
      <div className="item-content">{childre}</div>
    </Wrapper>
  );
};

export default React.memo(Item);
