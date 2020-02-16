// // import * as React from 'react';
// // import Sidebar from './index';
import Sidebar from './Sidebar';

// export default { title: 'Button' };

// // export const withEmoji = () => Sidebar;
// // export const story = () => Sidebar;
// import React from 'react';
import { storiesOf } from '@storybook/react';
// import Toggle from './index';
// import { boolean, text } from '@storybook/addon-knobs';

const stories = storiesOf('Toggle', module);

stories.add('On or off', () => {
  return (
    <Sidebar />
  );
});