import React from 'react';
import { Section } from 'react-fullpage';
import { FcLike } from 'react-icons/fc';

const Experience = () => {
  return (
    <Section>
      <h1>
        <FcLike />
        Education & Work Experience
      </h1>
    </Section>
  );
};

export default React.memo(Experience);
