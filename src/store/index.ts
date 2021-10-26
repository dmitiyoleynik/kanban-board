import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';

const composeEnhancers = composeWithDevTools();

const store = createStore(reducer, composeEnhancers);

export default store;

export type RootState = ReturnType<typeof store.getState>;
