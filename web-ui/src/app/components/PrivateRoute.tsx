import * as React from 'react';
import { Route, Redirect } from 'react-router';
// TODO: ask about handeling ...props
interface IPrivateRoute {
    component: React.ReactElement<any> | function,
    authed: boolean,
    address: string,
    exact: boolean,
    key: string
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
