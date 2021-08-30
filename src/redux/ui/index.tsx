import 'react-redux';
import { combineReducers } from 'redux';
import { reducer as inquiry } from './inquiry';

export const reducer = combineReducers({
  inquiry,
});

export type UIRootState = ReturnType<typeof reducer>;
