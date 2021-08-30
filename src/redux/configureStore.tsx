import { useMemo } from 'react';
import { createStore, applyMiddleware, compose, Store } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { reducer as ui } from './ui';
// import { reducer as resources } from './resources';

// eslint-disable-next-line
let store: Store | null;

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}
declare const window: ExtendedWindow;

const composeReduxDevToolsEnhancers =
  (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

function initStore(preloadedState: Partial<RootState>) {
  return createStore(
    rootReducer,
    preloadedState,
    composeReduxDevToolsEnhancers(applyMiddleware(thunk))
  );
}

export const initializeStore = (preloadedState: Partial<RootState>): Store => {
  /* eslint-disable immutable/no-let, no-underscore-dangle */
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = null;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
  /* eslint-enable */
};

export const rootReducer = combineReducers({
  ui,
  // resources,
});

export type RootState = ReturnType<typeof rootReducer>;

export function useStore(initialState: RootState): Store {
  return useMemo(() => initializeStore(initialState), [initialState]);
}

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}
