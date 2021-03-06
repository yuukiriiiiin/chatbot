import React from 'react';
import react, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeValue, selectInquiry } from '../../../redux/ui/inquiry';
import { next } from '../../../redux/ui/progressState';
import { pushMessage, selectMessages } from '../../../redux/ui/messages';
import { selectProgressState } from '../../../redux/ui/progressState';
import { Name as Presentation } from './Name';

export const Container = () => {
  const dispatch = useDispatch();

  const { form, edited, validationErrors } = useSelector(selectInquiry);
  const { messages } = useSelector(selectMessages);
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
      dispatch(next({ current: current, value: form[current] }));
    },
    [dispatch, current, form]
  );

  return (
    <Presentation
      messages={messages}
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
