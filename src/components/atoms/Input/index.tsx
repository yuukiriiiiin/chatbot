import react from 'react';
import clsx from 'clsx';
import styles from './input.module.scss';

type Props = {
  type: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: any) => void;
  required?: boolean;
  label?: string;
  hasError?: boolean;
  edited?: boolean;
};

export const Input: React.VFC<Props> = ({
  type,
  value,
  name,
  label,
  hasError,
  placeholder,
  onChange,
  required,
  edited,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.root__labelArea}>
        <label className={styles.root__label} htmlFor={name}>
          {label}
        </label>
      </div>
      <input
        className={clsx(styles.root__input)}
        type={type}
        value={value}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        data-is-required={required}
        data-is-error={hasError}
      />
    </div>
  );
};
