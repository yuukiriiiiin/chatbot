import 'react-redux';
import { combineReducers } from 'redux';
import { reducer as inquiry } from './inquiry';
import { reducer as progressState } from './progressState';
import { reducer as messages } from './messages';

export const reducer = combineReducers({
  inquiry,
  progressState,
  messages,
});

export type UIRootState = ReturnType<typeof reducer>;
