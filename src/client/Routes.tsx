import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import Root from './scenes/Root';
import NotFound from './scenes/NotFound';

const Routes = () => (
  <Switch>
    <Route component={Root} exact path="/" />
    <Route component={NotFound} />
  </Switch>
);

export default hot(module)(Routes);
