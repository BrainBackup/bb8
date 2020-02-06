import * as React from 'react';
import { Route, Redirect } from 'react-router';

interface IPrivateRoute {
    component: React.ReactElement<any>,
    authed: boolean,
    address: string,
    props: Object
}
const PrivateRoute: React.FunctionComponent<IPrivateRoute> = ({ component, authed, address, ...props }) => {
    return (
      <Route
        {...props}
        render={(props) => authed === true
          ? React.cloneElement(component, {...props})
          : <Redirect to={{ pathname: `/${address}`, state: { from: props.location } }}/>}
      />
    );
  }
  export default PrivateRoute;
