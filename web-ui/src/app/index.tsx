import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Router, Route, Switch } from 'react-router';
import { Root } from 'app/containers/Root';
import { TodoApp } from 'app/containers/TodoApp';
// import PrivateRoute from 'app/components/PrivateRoute';
import Login from 'app/routes/authentication';
console.log(typeof TodoApp)
// render react DOM
export const App = hot(({ history }) => (
  <Root>
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        {/* <PrivateRoute address='/' component={TodoApp} authed={false} key={'page.url'} exact/> */}
        <Route path="/" component={TodoApp} />
      </Switch>
    </Router>
  </Root>
));
