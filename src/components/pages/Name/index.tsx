import react, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, selectInquiry } from '../../../redux/ui/inquiry';
import { Name as Presentation } from './Name';

export const Container = () => {
  const dispatch = useDispatch();

  const { form, edited, validationErrors } = useSelector(selectInquiry);
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(changeName({ value: e.target.value }));
    },
    [dispatch]
  );

  return (
    <Presentation
      form={form}
      edited={edited}
      validationErrors={validationErrors}
      onChange={handleChange}
    />
  );
};
