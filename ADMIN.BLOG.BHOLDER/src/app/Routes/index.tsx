import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PublicRoutes from './Public';
import PrivateRoutes from './Private';
import { Dashboard, Login } from 'pages';
// const Login = React.lazy(() => import('pages/Login'));

function AppRoutes() {
  return (
    <Router>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Switch>
        <PrivateRoutes exact path={['/dashboard', '/']}>
          <Dashboard />
        </PrivateRoutes>
        <PublicRoutes component={Login} exact path="/login" />
      </Switch>
      {/* </Suspense> */}
    </Router>
  );
}

export default AppRoutes;
