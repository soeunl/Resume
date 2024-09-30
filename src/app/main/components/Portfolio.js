import React from 'react';
import { Section } from 'react-fullpage';
import { FcLike } from 'react-icons/fc';

const Portfolio = () => {
  return (
    <Section>
      <h1>
        <FcLike />
        Portfolio
      </h1>
    </Section>
  );
};

export default React.memo(Portfolio);
