import * as React from 'react';
import { Route, Redirect } from 'react-router';

interface IPrivateRoute {
    component: any,
    authed: boolean,
    address: string,
    [x:string]: any;
}
const PrivateRoute: React.FunctionComponent<IPrivateRoute> = ({ component: Component, authed, address, ...props }) => {
    return (
      <Route
        {...props}
        render={(props) => authed === true
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/login', state: { from: props.location } }}/>}
      />
    );
  }
  export default PrivateRoute;
