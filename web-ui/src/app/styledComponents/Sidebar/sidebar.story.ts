import * as React from 'react';
import Sidebar from './index';
import { stories } from 'storybook';

export default { title: 'Button' };

export const withEmoji = () => (
  <Sidebar>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Sidebar>
);
