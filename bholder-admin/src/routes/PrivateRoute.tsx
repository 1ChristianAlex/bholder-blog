import React, { FC } from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { Auth, CurrentUser } from 'services';
import { useUser, useDispatch } from 'context/hooks';
import { updateUser } from 'context/user/action';

export interface IRoutes extends RouteProps {
  component: FC;
  title: string;
}

const PrivateRoute: React.FC<IRoutes> = ({ component, ...rest }) => {
  const user = useUser();
  const dispatch = useDispatch();
  const verifyLoged = () => {
    if (user?.id) {
      return true;
    }

    const auth = Auth.getInstance();
    const token = auth.getToken();
    if (token) {
      CurrentUser().then(result => {
        if (result?.id) {
          dispatch(updateUser(result));
        }
      });
      return true;
    }

    return false;
  };

  return (
    <>
      {!verifyLoged() ? (
        <Redirect to="/" />
      ) : (
        <Route component={component} {...rest} />
      )}
    </>
  );
};

export default PrivateRoute;
