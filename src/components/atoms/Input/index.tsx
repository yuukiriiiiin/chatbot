import react from 'react';
import clsx from 'clsx';
import styles from './input.module.scss';

export type Props = {
  type: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: any) => void;
  required?: boolean;
  hasError?: boolean;
  edited?: boolean;
};

export const Input: React.VFC<Props> = ({
  type,
  value,
  name,
  hasError,
  placeholder,
  onChange,
  required,
}) => {
  return (
    <input
      className={clsx(styles.root)}
      type={type}
      value={value}
      name={name}
      id={name}
      placeholder={placeholder}
      onChange={onChange}
      data-is-required={required}
      data-is-error={hasError}
    />
  );
};
