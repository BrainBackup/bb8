import * as React from 'react';
import Navigation from 'app/components/Navigation';

export class Root extends React.Component<any, any> {
  renderDevTool() {
    if (process.env.NODE_ENV !== 'production') {
      const DevTools = require('mobx-react-devtools').default;
      return <DevTools />;
    }
  }

  render() {
    return (
      <div className="container">
      <Navigation>
        {this.props.children}
        {this.renderDevTool()}
      </Navigation>
      </div>
    );
  }
}
