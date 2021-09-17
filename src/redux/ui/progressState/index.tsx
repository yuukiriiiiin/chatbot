import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createSelector } from 'reselect';
import { RootState } from '../../configureStore';

export type Tuple = 'name' | 'email' | 'tel' | 'message';

const actionCreator = actionCreatorFactory('progress state');

type Value = {
  current: string;
  value: string;
};
export const next = actionCreator<Value>('next question');

type ProgressState = {
  progress: number;
  current: Tuple;
};

const INITIAL_STATE: ProgressState = {
  progress: 0,
  current: 'name',
};

export const reducer = reducerWithInitialState(INITIAL_STATE) //
  .case(next, (state, _payload) => {
    const currentValueTuple = ['name', 'email', 'tel', 'message'];
    const nextProgress = state.progress + 1;
    const nextCurrentValue = currentValueTuple[nextProgress] as Tuple;
    return {
      ...state,
      progress: nextProgress,
      current: nextCurrentValue,
    };
  });

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
