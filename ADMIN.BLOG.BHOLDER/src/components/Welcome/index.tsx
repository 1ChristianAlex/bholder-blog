import React, { FC } from 'react';
import { CardItem } from 'components';
import { useUser } from 'context/hooks';

const Welcome: FC = () => {
  const { first_name } = useUser();
  const title = `Welcome ${first_name}`;
  const content = `Now ${Date.now()} and we have 1245789 users online`;
  return <CardItem title={title} textContent={content} />;
};

export default Welcome;
