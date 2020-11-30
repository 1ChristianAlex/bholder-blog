import React from 'react';
import { Route, Switch } from 'react-router';
import EditPost from './EditPost';
import { privateRoutes } from '../../app/Routes/RoutesNames';
// import { Container } from './styles';

const Posts: React.FC = () => {
  return (
    <Switch>
      <Route exact path={privateRoutes.singlePosts}>
        <EditPost />
      </Route>
    </Switch>
  );
};

export default Posts;
