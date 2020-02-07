import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { TodoModel } from 'app/models';
import { createStores } from 'app/stores';
import { App } from 'app';
import history from './app/history';

// default fixtures for TodoStore
const defaultTodos = [
  new TodoModel('Use Mobx'),
  new TodoModel('Use React'),
  new TodoModel('Make ui works', true)
];

// prepare MobX stores
const rootStore = createStores(history, defaultTodos);

// render react DOM
ReactDOM.render(
  <Provider {...rootStore}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
