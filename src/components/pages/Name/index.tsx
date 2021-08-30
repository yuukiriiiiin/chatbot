import React from 'react';
import react, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeValue, selectInquiry, next } from '../../../redux/ui/inquiry';
import { selectProgressState } from '../../../redux/ui/progressState';
import { Name as Presentation } from './Name';

export const Container = () => {
  const dispatch = useDispatch();

  const { form, edited, validationErrors } = useSelector(selectInquiry);
  const { progress, current } = useSelector(selectProgressState);
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(changeValue({ name: e.target.name, value: e.target.value }));
    },
    [dispatch]
  );
  const handleNext = useCallback(
    (e: React.ChangeEvent<HTMLButtonElement>) => {
      e.preventDefault();
      dispatch(next());
    },
    [dispatch]
  );

  return (
    <Presentation
      form={form}
      edited={edited}
      validationErrors={validationErrors}
      onChange={handleChange}
      progress={progress}
      current={current}
      onClick={handleNext}
    />
  );
};