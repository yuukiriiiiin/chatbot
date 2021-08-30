import 'react-redux';
import { combineReducers } from 'redux';
import { reducer as inquiry } from './inquiry';
import { reducer as progressState } from './progressState';

export const reducer = combineReducers({
  inquiry,
  progressState,
});

export type UIRootState = ReturnType<typeof reducer>;
