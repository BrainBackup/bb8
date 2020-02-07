import * as React from 'react';
import Navigation from 'app/components/Navigation';
import theme from 'app/theme/dark';
import { MuiThemeProvider } from '@material-ui/core';
export class Root extends React.Component<any, any> {
  renderDevTool() {
    if (process.env.NODE_ENV !== 'production') {
      const DevTools = require('mobx-react-devtools').default;
      return <DevTools />;
    }
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="container">
          <Navigation>
            {this.props.children}
            {this.renderDevTool()}
          </Navigation>
        </div>
      </MuiThemeProvider>
    );
  }
}
