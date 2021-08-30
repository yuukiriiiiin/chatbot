import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { RootState } from '../../configureStore';
import { submitName } from '../inquiry';

export type Tuple = 'name' | 'email' | 'tel' | 'message';

type ProgressState = {
  progress: number;
  current: Tuple;
};

const INITIAL_STATE: ProgressState = {
  progress: 1,
  current: 'name',
};

export const reducer = reducerWithInitialState(INITIAL_STATE) //
  .case(submitName, (state, _payload) => ({
    ...state,
    progress: state.progress + 1,
  }));

export const selectProgressState = createSelector(
  [
    (state: RootState) => state.ui.progressState.progress,
    (state: RootState) => state.ui.progressState.current,
  ],
  (progress, current) => ({
    progress,
    current,
  })
);

export type SelectedProgressState = ReturnType<typeof selectProgressState>;
export type State = typeof INITIAL_STATE;
