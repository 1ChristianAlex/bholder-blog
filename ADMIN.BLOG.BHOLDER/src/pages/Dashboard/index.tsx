import React from 'react';
import { Menu } from 'components';
import { WithSideCol } from 'containers';

const DashBoard: React.FC = () => {
  return (
    <WithSideCol ColComponent={Menu} MainComponent={() => <h1>teste</h1>} />
  );
};

export default DashBoard;
