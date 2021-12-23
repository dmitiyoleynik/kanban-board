import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';

import { RootAction } from 'store/actions';
import rootEpic from 'store/epics';
import reducer, { IAppState } from 'store/reducers';

const epicMiddleware = createEpicMiddleware<RootAction, RootAction, IAppState, unknown>();
const composeEnhancers = composeWithDevTools(applyMiddleware(epicMiddleware));

const store = createStore(reducer, composeEnhancers);

epicMiddleware.run(rootEpic);

export default store;

export type RootState = ReturnType<typeof store.getState>;
