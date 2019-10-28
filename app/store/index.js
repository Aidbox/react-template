import createStore from 'storeon';

import user from './user';

const store = createStore([
  user,
  process.env.NODE_ENV !== 'production' && require('storeon/devtools')
]);

export default store;
